import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const sourceUrl = "https://70maivietnam.store/";
const siteKey = "70maivietnam-store-f583e865";
const pageKey = "root-8a5edab2";
const assetRoot = path.join("public", "sites", siteKey, pageKey);
const imageRoot = path.join(assetRoot, "images");
const fontRoot = path.join(assetRoot, "fonts");
const researchRoot = path.join("docs", "research", siteKey, pageKey);

function attributes(tag) {
  const result = {};
  for (const match of tag.matchAll(/([:\w-]+)\s*=\s*(["'])(.*?)\2/gs)) {
    result[match[1].toLowerCase()] = match[3].replaceAll("&amp;", "&").replaceAll("&#038;", "&");
  }
  return result;
}

function largestSrcset(srcset) {
  if (!srcset) return null;
  const candidates = [];
  for (const part of srcset.split(",")) {
    const match = part.trim().match(/^(\S+)\s+(\d+)w$/);
    if (match) candidates.push({ url: match[1], width: Number(match[2]) });
  }
  return candidates.sort((a, b) => b.width - a.width)[0]?.url ?? null;
}

function sourceFromPicture(block) {
  const sources = [...block.matchAll(/<source\b[^>]*>/gi)].map((match) => attributes(match[0]));
  const preferred = sources.find((source) => source.type?.includes("webp") && source.srcset);
  return largestSrcset(preferred?.srcset) ?? largestSrcset(sources[0]?.srcset);
}

function cleanText(value) {
  return (value ?? "")
    .replace(/<[^>]+>/g, " ")
    .replaceAll("&nbsp;", " ")
    .replaceAll("&#8211;", "–")
    .replaceAll("&#8217;", "’")
    .replaceAll("&amp;", "&")
    .replace(/\s+/g, " ")
    .trim();
}

const htmlResponse = await fetch(sourceUrl);
if (!htmlResponse.ok) throw new Error("Source page returned " + htmlResponse.status);
const html = await htmlResponse.text();
const candidates = [];
const seenUrls = new Set();

function addAsset(rawUrl, alt, kind = "image") {
  if (!rawUrl || rawUrl.includes("{{") || rawUrl.includes("/vi/ID/") || rawUrl.startsWith("data:")) return;
  let url;
  try {
    url = new URL(rawUrl.replaceAll("&amp;", "&"), sourceUrl).href;
  } catch {
    return;
  }
  if (!/^https?:/.test(url) || seenUrls.has(url)) return;
  const pathname = decodeURIComponent(new URL(url).pathname);
  const ext = path.posix.extname(pathname).toLowerCase();
  const allowed = kind === "font" ? [".woff2", ".woff", ".ttf"] : [".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"];
  if (!allowed.includes(ext)) return;
  seenUrls.add(url);
  candidates.push({ url, alt: cleanText(alt), kind, ext });
}

const pictureRanges = [];
for (const match of html.matchAll(/<picture\b[^>]*>[\s\S]*?<\/picture>/gi)) {
  pictureRanges.push([match.index, match.index + match[0].length]);
  const imageTag = match[0].match(/<img\b[^>]*>/i)?.[0];
  if (!imageTag) continue;
  const image = attributes(imageTag);
  addAsset(sourceFromPicture(match[0]) ?? largestSrcset(image.srcset) ?? image["data-src"] ?? image.src, image.alt);
}
for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
  if (pictureRanges.some(([start, end]) => match.index >= start && match.index < end)) continue;
  const image = attributes(match[0]);
  addAsset(largestSrcset(image.srcset) ?? image["data-src"] ?? image.src, image.alt);
}
for (const match of html.matchAll(/url\((["']?)(.*?)\1\)/gi)) {
  addAsset(match[2], "", "image");
}

addAsset("/wp-content/uploads/2023/03/logo-70maivietnam.svg", "70mai Việt Nam logo");
candidates.push(
  {
    url: "https://70maivietnam.store/wp-content/themes/yootheme/fonts/font-b709609c.woff2",
    alt: "Manrope Regular",
    kind: "font",
    ext: ".woff2",
    filename: "Manrope-Regular.woff2",
  },
  {
    url: "https://70maivietnam.store/wp-content/themes/yootheme/fonts/font-9b489c2c.woff2",
    alt: "Manrope Bold",
    kind: "font",
    ext: ".woff2",
    filename: "Manrope-Bold.woff2",
  },
);
for (const font of candidates.filter((asset) => asset.kind === "font")) seenUrls.add(font.url);

const usedNames = new Set();
for (const asset of candidates) {
  if (asset.filename) continue;
  const basename = path.posix.basename(decodeURIComponent(new URL(asset.url).pathname));
  const sanitized = basename.replace(/[^A-Za-z0-9._-]+/g, "-").slice(-100);
  let filename = sanitized || "asset" + asset.ext;
  let sequence = 2;
  while (usedNames.has(asset.kind + ":" + filename)) {
    const extension = path.posix.extname(filename);
    const stem = filename.slice(0, -extension.length);
    filename = stem + "-" + sequence++ + extension;
  }
  usedNames.add(asset.kind + ":" + filename);
  asset.filename = filename;
}

await mkdir(imageRoot, { recursive: true });
await mkdir(fontRoot, { recursive: true });
await mkdir(researchRoot, { recursive: true });
const failures = [];
let nextIndex = 0;

async function worker() {
  while (nextIndex < candidates.length) {
    const asset = candidates[nextIndex++];
    const folder = asset.kind === "font" ? fontRoot : imageRoot;
    const filePath = path.join(folder, asset.filename);
    let lastError;
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        const response = await fetch(asset.url);
        if (!response.ok) throw new Error("HTTP " + response.status);
        await writeFile(filePath, new Uint8Array(await response.arrayBuffer()));
        asset.local = "/" + filePath.replaceAll(path.sep, "/");
        break;
      } catch (error) {
        lastError = error;
      }
    }
    if (!asset.local) {
      failures.push({ url: asset.url, error: String(lastError) });
      process.stdout.write("FAIL " + asset.url + " " + String(lastError) + "\n");
    }
  }
}
await Promise.all(Array.from({ length: Math.min(4, candidates.length) }, worker));

const manifestPath = path.join(researchRoot, "ASSETS.json");
await writeFile(manifestPath, JSON.stringify(candidates, null, 2) + "\n");
const inventory = candidates
  .filter((asset) => asset.local)
  .map((asset) => "- " + asset.alt + ": " + asset.local)
  .join("\n");
await writeFile(
  path.join(researchRoot, "ASSETS.md"),
  "# Downloaded assets\n\nSource assets are stored locally under public/sites/" + siteKey + "/" + pageKey + "/.\n\n" + inventory + "\n",
);
process.stdout.write(
  "Downloaded " + (candidates.length - failures.length) + "/" + candidates.length +
    " assets. Manifest: " + manifestPath + "\n",
);
if (failures.length) process.exitCode = 1;

