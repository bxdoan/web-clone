import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const siteKey = "70maivietnam-store-f583e865";
const sourceOrigin = "https://70maivietnam.store";
const assetPublicPath = `/sites/${siteKey}/shared/images/category-listing`;
const assetDirectory = path.join(
  projectRoot,
  "public",
  "sites",
  siteKey,
  "shared",
  "images",
  "category-listing",
);
const dataPath = path.join(
  projectRoot,
  "src",
  "components",
  "sites",
  siteKey,
  "shared",
  "category-data.ts",
);
const homepageAssetsPath = path.join(
  projectRoot,
  "docs",
  "research",
  siteKey,
  "root-8a5edab2",
  "ASSETS.json",
);

const categories = [
  {
    id: "camera-hanh-trinh",
    path: "/camera-hanh-trinh/",
    heading: "CAMERA HÀNH TRÌNH",
    breadcrumb: "Camera hành trình",
    totalCount: 25,
    description:
      "70mai Việt Nam phân phối camera hành trình 70mai chính hãng, với nhiều lựa chọn ghi hình rõ nét và hỗ trợ lái xe an toàn.",
  },
  {
    id: "phu-kien-camera",
    path: "/phu-kien-camera/",
    heading: "PHỤ KIỆN CAMERA",
    breadcrumb: "Phụ kiện Camera",
    totalCount: 32,
    description:
      "Phụ kiện camera hành trình 70mai chính hãng gồm camera sau, bộ nguồn, cáp kết nối và các phụ kiện hỗ trợ lắp đặt.",
  },
  {
    id: "phu-kien-70mai",
    path: "/phu-kien-70mai/",
    heading: "PHỤ KIỆN 70MAI",
    breadcrumb: "Phụ kiện 70mai",
    totalCount: 10,
    description:
      "Khám phá phụ kiện ô tô 70mai chính hãng như máy bơm lốp, kích bình, cảm biến áp suất lốp và thiết bị tiện ích.",
  },
];

function decodeEntities(value) {
  return value
    .replace(/&#x([0-9a-f]+);?/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&#(\d+);?/g, (_, code) => String.fromCodePoint(Number.parseInt(code, 10)))
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">");
}

function textFromHtml(value) {
  return decodeEntities(value.replace(/<[^>]*>/g, " "))
    .replace(/[\t\r\n ]+/g, " ")
    .trim();
}

function attribute(tag, name) {
  const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = tag.match(new RegExp(`\\b${escapedName}\\s*=\\s*(["'])([\\s\\S]*?)\\1`, "i"));
  return match ? decodeEntities(match[2]) : "";
}

function parseImageUrl(block) {
  const imageTag = block.match(/<img\b[^>]*>/i)?.[0];
  if (!imageTag) return "";

  const candidates = [
    attribute(imageTag, "data-lazy-src"),
    attribute(imageTag, "data-src"),
    attribute(imageTag, "src"),
  ].filter((value) => value && !value.startsWith("data:"));
  const srcset =
    attribute(imageTag, "data-lazy-srcset") ||
    attribute(imageTag, "data-srcset") ||
    attribute(imageTag, "srcset");
  const entries = srcset
    .split(",")
    .map((entry) => {
      const [url, descriptor = ""] = entry.trim().split(/\s+/);
      return { url, width: Number.parseInt(descriptor, 10) || 0 };
    })
    .filter((entry) => entry.url && !entry.url.startsWith("data:"));

  const squareThumbnail = entries.find((entry) => /-300x300\./i.test(entry.url));
  const widthCandidate = entries
    .filter((entry) => entry.width >= 255)
    .sort((left, right) => left.width - right.width)[0];
  const sourceCandidate = candidates.find((value) => /-300x300\./i.test(value));
  const imageUrl = squareThumbnail?.url || sourceCandidate || widthCandidate?.url || candidates[0] || "";
  return imageUrl ? new URL(imageUrl, sourceOrigin).toString() : "";
}

function parsePrice(block) {
  const priceMatch = block.match(/<span\b[^>]*class=["'][^"']*\bprice\b[^"']*["'][^>]*>([\s\S]*?)<\/a>/i);
  const priceMarkup = priceMatch?.[1] ?? block;
  const values = [...priceMarkup.matchAll(/<bdi[^>]*>([\s\S]*?)<\/bdi>/gi)].map((match) => {
    const value = textFromHtml(match[1]).replace(/\s+₫/g, "₫");
    return value;
  });

  if (values.length > 0) {
    const price = values.at(-1) ?? "";
    const regularPrice = values.length > 1 && values[0] !== price ? values[0] : undefined;
    return { price, regularPrice };
  }

  const plainText = textFromHtml(priceMarkup);
  const contact = plainText.match(/Liên\s*hệ/i)?.[0];
  return { price: contact ?? "Liên hệ", regularPrice: undefined };
}

function parsePage(html, pageUrl) {
  const blocks = [...html.matchAll(/<li\b[^>]*>[\s\S]*?<\/li>/gi)]
    .map((match) => match[0])
    .filter((block) => {
      const classNames = block.match(/^<li\b[^>]*\bclass=["']([^"']*)["']/i)?.[1] ?? "";
      return classNames.split(/\s+/).includes("product");
    });
  return blocks.flatMap((block, index) => {
    const titleMarkup = block.match(/<h2\b[^>]*class=["'][^"']*woocommerce-loop-product__title[^"']*["'][^>]*>([\s\S]*?)<\/h2>/i)?.[1];
    const href = attribute(block.match(/<a\b[^>]*>/i)?.[0] ?? "", "href");
    const title = titleMarkup ? textFromHtml(titleMarkup) : "";
    const imageUrl = parseImageUrl(block);
    if (!title || !href || !imageUrl) {
      console.log(`Skipped listing item ${index + 1} on ${pageUrl}: title=${Boolean(title)} href=${Boolean(href)} image=${Boolean(imageUrl)}`);
      return [];
    }

    const destination = new URL(href, sourceOrigin);
    const { price, regularPrice } = parsePrice(block);
    return [
      {
        title,
        price,
        ...(regularPrice ? { regularPrice } : {}),
        href: `${destination.pathname.endsWith("/") ? destination.pathname : `${destination.pathname}/`}`,
        sourceImage: imageUrl,
      },
    ];
  });
}

function categoryPagePath(category, pageNumber) {
  return pageNumber === 1 ? category.path : `${category.path}page/${pageNumber}/`;
}

async function fetchPage(url) {
  const response = await fetch(url, {
    headers: { "user-agent": "Mozilla/5.0 (compatible; 70mai-category-asset-collector/1.0)" },
  });
  if (!response.ok) throw new Error(`Could not fetch ${url}: HTTP ${response.status}`);
  return response.text();
}

function sourceStem(imageUrl) {
  return path
    .parse(new URL(imageUrl).pathname)
    .name.replace(/-\d+x\d+$/i, "")
    .toLowerCase();
}

function existingAssetMap(manifest) {
  const byStem = new Map();
  for (const asset of manifest) {
    const stem = path
      .parse(asset.filename)
      .name.replace(/-[0-9a-f]{8}$/i, "")
      .replace(/-\d+x\d+$/i, "")
      .toLowerCase();
    const ambiguousStem = /^(anh-dai-dien|dai-dien|image|untitled|img)$/i.test(stem);
    if (stem && stem.length > 13 && !ambiguousStem && !byStem.has(stem)) {
      byStem.set(stem, asset.local.replace(/^\/public/, ""));
    }
  }
  return byStem;
}

function pageDescription(html) {
  const meta = html.match(/<meta\b[^>]*name=["']description["'][^>]*>/i)?.[0] ?? "";
  return attribute(meta, "content");
}

function fileExtension(imageUrl) {
  const extension = path.extname(new URL(imageUrl).pathname).toLowerCase();
  return [".jpg", ".jpeg", ".png", ".webp", ".avif"].includes(extension) ? extension : ".jpg";
}

async function downloadImage(imageUrl) {
  const fileName = `${createHash("sha1").update(imageUrl).digest("hex").slice(0, 12)}${fileExtension(imageUrl)}`;
  const filePath = path.join(assetDirectory, fileName);
  try {
    await readFile(filePath);
    return `${assetPublicPath}/${fileName}`;
  } catch {
    // The product image still needs to be downloaded.
  }

  let lastError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(imageUrl, {
        headers: { "user-agent": "Mozilla/5.0 (compatible; 70mai-category-asset-collector/1.0)" },
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      await writeFile(filePath, new Uint8Array(await response.arrayBuffer()));
      return `${assetPublicPath}/${fileName}`;
    } catch (error) {
      lastError = error;
      if (attempt < 3) await new Promise((resolve) => setTimeout(resolve, attempt * 350));
    }
  }
  throw new Error(`Could not download ${imageUrl}: ${String(lastError)}`);
}

async function mapConcurrent(items, concurrency, callback) {
  const result = new Array(items.length);
  let cursor = 0;
  const workers = Array.from({ length: Math.min(concurrency, items.length) }, async () => {
    while (cursor < items.length) {
      const current = cursor;
      cursor += 1;
      result[current] = await callback(items[current], current);
    }
  });
  await Promise.all(workers);
  return result;
}

function printDataModule(listings) {
  const rows = listings.map((category) => {
    const products = category.products
      .map((product) => {
        const optionalPrice = product.regularPrice
          ? `, regularPrice: ${JSON.stringify(product.regularPrice)}`
          : "";
        return `      { title: ${JSON.stringify(product.title)}, price: ${JSON.stringify(product.price)}${optionalPrice}, image: ${JSON.stringify(product.image)}, href: ${JSON.stringify(product.href)} },`;
      })
      .join("\n");
    return `  ${JSON.stringify(category.id)}: {\n    id: ${JSON.stringify(category.id)},\n    path: ${JSON.stringify(category.path)},\n    heading: ${JSON.stringify(category.heading)},\n    breadcrumb: ${JSON.stringify(category.breadcrumb)},\n    totalCount: ${category.totalCount},\n    description: ${JSON.stringify(category.description)},\n    products: [\n${products}\n    ],\n  },`;
  });

  return `export interface CategoryProductData {\n  title: string;\n  price: string;\n  regularPrice?: string;\n  image: string;\n  href: string;\n}\n\nexport interface CategoryListingData {\n  id: string;\n  path: string;\n  heading: string;\n  breadcrumb: string;\n  totalCount: number;\n  description: string;\n  products: CategoryProductData[];\n}\n\nexport const categoryListings = {\n${rows.join("\n")}\n} satisfies Record<string, CategoryListingData>;\n\nexport type CategoryListingId = keyof typeof categoryListings;\n`;
}

async function main() {
  await mkdir(assetDirectory, { recursive: true });
  const manifest = JSON.parse(await readFile(homepageAssetsPath, "utf8"));
  const reusedByStem = existingAssetMap(manifest);
  const listings = [];

  for (const category of categories) {
    const pages = Math.ceil(category.totalCount / 8);
    const products = [];
    let description = category.description;
    for (let pageNumber = 1; pageNumber <= pages; pageNumber += 1) {
      const url = new URL(categoryPagePath(category, pageNumber), sourceOrigin).toString();
      const html = await fetchPage(url);
      if (pageNumber === 1) description = pageDescription(html) || description;
      const pageProducts = parsePage(html, url);
      console.log(`  page ${pageNumber}: ${pageProducts.length} products`);
      products.push(...pageProducts);
    }

    const distinct = [...new Map(products.map((product) => [product.href, product])).values()];
    const downloadedProducts = await mapConcurrent(distinct, 6, async (product) => {
      const reuse = reusedByStem.get(sourceStem(product.sourceImage));
      const image = reuse ?? (await downloadImage(product.sourceImage));
      return {
        title: product.title,
        price: product.price,
        ...(product.regularPrice ? { regularPrice: product.regularPrice } : {}),
        href: product.href,
        image,
      };
    });
    const productByPath = new Map(downloadedProducts.map((product) => [product.href, product]));
    const categoryProducts = products.map((product) => productByPath.get(product.href));

    listings.push({ ...category, description, products: categoryProducts });
    console.log(
      `${category.path}: ${categoryProducts.length}/${category.totalCount} listing rows (${distinct.length} distinct products)`,
    );
  }

  await writeFile(dataPath, printDataModule(listings), "utf8");
  console.log(`Wrote ${path.relative(projectRoot, dataPath)} and local category thumbnails.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
