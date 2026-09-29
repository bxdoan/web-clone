import {
  accessoryCategories,
  cameraRailOne,
  cameraRailTwo,
  featuredCameras,
  memoryCards,
  image,
} from "../root-8a5edab2/site-data";
import type { ProductCardData } from "../root-8a5edab2/types";
import { categoryListings } from "./category-data";

export interface ProductDetailImage {
  src: string;
  alt: string;
}

export interface ProductDetailSection {
  heading: string;
  paragraphs: string[];
  image?: ProductDetailImage;
}

export interface ProductDetailSpec {
  label: string;
  value: string;
}

export interface ProductDetailData {
  pathname: string;
  title: string;
  categoryPath: string;
  categoryLabel: string;
  price: string;
  note: string;
  summary: string;
  warning?: string;
  features: string[];
  specificationHeading?: string;
  variants?: Array<{ value: string; label: string }>;
  images: ProductDetailImage[];
  sections: ProductDetailSection[];
  specs: ProductDetailSpec[];
  relatedProducts: Array<{
    title: string;
    price: string;
    image: string;
    href: string;
  }>;
}

const detailNote = "Giá trên đã bao gồm VAT, chưa bao gồm thẻ nhớ";

const localPath = (url: string): string => {
  try {
    const { pathname } = new URL(url);
    return normalizeProductPath(pathname);
  } catch {
    return normalizeProductPath(url);
  }
};

export function normalizeProductPath(pathname: string | readonly string[]): string {
  const path = typeof pathname === "string" ? pathname : Array.from(pathname).join("/");
  const cleanPath = path.split(/[?#]/, 1)[0] ?? "";
  let decodedPath = cleanPath;

  try {
    decodedPath = decodeURIComponent(cleanPath);
  } catch {
    // Keep the original URL when it contains an invalid escape sequence.
  }

  const segments = decodedPath.split("/").filter(Boolean);
  return segments.length ? `/${segments.join("/")}/` : "/";
}

const categoryForPath = (pathname: string): { path: string; label: string } => {
  const segments = pathname.split("/").filter(Boolean);
  const category = segments[0] ?? "";
  const categories: Record<string, string> = {
    "camera-hanh-trinh": "Camera hành trình",
    "phu-kien-camera": "Phụ kiện Camera",
    "phu-kien-70mai": "Phụ kiện 70mai",
    "qua-tang-70mai": "Quà tặng 70mai",
    "bom-lop-o-to": "Bơm lốp ô tô",
    "kich-dien-binh-ac-quy": "Kích điện bình ắc quy",
    "power-station": "Power Station",
  };

  if (segments.length < 2) {
    return { path: "/", label: "Sản phẩm" };
  }

  return {
    path: `/${segments.slice(0, -1).join("/")}/`,
    label: categories[category] ?? readableWords(category),
  };
};

function readableWords(value: string): string {
  return value
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^./, (first) => first.toLocaleUpperCase("vi-VN"));
}

function titleFromSlug(pathname: string): string {
  const slug = pathname.split("/").filter(Boolean).at(-1) ?? "san-pham-70mai";
  const decodedSlug = readableWords(slug);
  const brandMarker = decodedSlug.toLocaleLowerCase("vi-VN").lastIndexOf("70mai");

  if (brandMarker >= 0) {
    const model = decodedSlug
      .slice(brandMarker + "70mai".length)
      .trim()
      .split(" ")
      .filter(Boolean)
      .map((word) => /^[a-z]+\d+[a-z\d]*$/i.test(word)
        ? word.toLocaleUpperCase("vi-VN")
        : word.replace(/^./, (first) => first.toLocaleUpperCase("vi-VN")))
      .join(" ");
    const category = categoryForPath(pathname);
    const fallbackCategory = decodedSlug.slice(0, brandMarker).trim();
    const categoryHasBrand = category.label.toLocaleLowerCase("vi-VN").includes("70mai");
    const label = category.label !== "Sản phẩm" && !categoryHasBrand
      ? category.label
      : fallbackCategory || category.label;
    return `${label} 70mai${model ? ` ${model}` : ""}`;
  }

  return decodedSlug;
}

function toProductGallery(
  title: string,
  images: Array<string | undefined>,
): ProductDetailImage[] {
  return [...new Set(images.filter((src): src is string => Boolean(src)))].map(
    (src, index) => ({
      src,
      alt: index === 0 ? title : `${title} - ảnh ${index + 1}`,
    }),
  );
}

const catalogCards = [
  ...cameraRailOne,
  ...cameraRailTwo,
  ...memoryCards,
  ...accessoryCategories.flatMap((category) => category.products),
  ...Object.values(categoryListings).flatMap((category) => category.products),
];

function getRelatedProducts(pathname: string) {
  const seen = new Set<string>([pathname]);
  const related: ProductDetailData["relatedProducts"] = [];

  for (const camera of featuredCameras) {
    const href = localPath(camera.href);
    if (seen.has(href)) continue;
    seen.add(href);
    related.push({
      title: camera.title,
      price: camera.desktopPrice.replace(/\s*đ$/i, "₫"),
      image: camera.desktopRight,
      href,
    });
    if (related.length === 4) return related;
  }

  for (const card of catalogCards) {
    const href = localPath(card.href);
    if (seen.has(href)) continue;
    seen.add(href);
    related.push({ ...card, href });
    if (related.length === 4) break;
  }

  return related;
}

function makeCameraDetail(
  camera: (typeof featuredCameras)[number],
  galleryExtras: ProductCardData[],
): ProductDetailData {
  const pathname = localPath(camera.href);
  const title = `Camera hành trình ${camera.title}`;
  const isA800 = pathname.includes("a800se-speedeye");
  const featureImage = camera.desktopLeft;
  const featureBullets = [...camera.desktopFeatures];
  const images = toProductGallery(title, [
    camera.desktopRight,
    ...galleryExtras.map((card) => card.image),
    camera.mobileImage,
    featureImage,
  ]);
  const details: ProductDetailSection[] = isA800
    ? [
        {
          heading: "Cảnh báo giao thông thông minh cùng SpeedEye",
          paragraphs: [
            "70mai A800SE SpeedEye hỗ trợ nhắc tốc độ và cảnh báo camera giao thông trên hành trình.",
            "Phiên bản SpeedEye nhận diện biển báo từ dữ liệu GPS/Gofa, không nhận diện biển báo theo thời gian thực.",
          ],
          image: { src: featureImage, alt: `${title} được lắp trên kính lái` },
        },
        {
          heading: "Ghi hình 2 kênh sắc nét với 4k HDR 30FPS + 1080P 30FPS",
          paragraphs: [
            "Camera trước ghi hình 4K HDR; khi kết hợp camera sau, hệ thống ghi lại đồng thời hai góc nhìn trước và sau xe.",
            "Thiết kế màn hình tích hợp giúp người lái xem lại và căn chỉnh góc quay ngay trên thiết bị.",
          ],
          image: { src: images[0]?.src ?? camera.desktopRight, alt: `${title} và màn hình hiển thị` },
        },
        {
          heading: "Giám sát đỗ xe thông minh 24H",
          paragraphs: [
            "Chế độ giám sát khi đỗ xe ghi nhận sự kiện quanh xe khi camera được lắp cùng bộ nguồn phù hợp.",
            "Tính năng cần bộ Hardwire Kit tương thích và cách lắp đặt đúng hướng dẫn của nhà sản xuất.",
          ],
        },
      ]
    : [
        {
          heading: `Tính năng nổi bật của ${camera.title}`,
          paragraphs: [
            `${camera.title} được thiết kế để ghi hình hành trình rõ nét và hỗ trợ người lái trong quá trình sử dụng xe.`,
            ...featureBullets,
          ],
          image: { src: featureImage, alt: `${title} lắp đặt trên ô tô` },
        },
      ];

  const specs: ProductDetailSpec[] = isA800
    ? [
        { label: "Tên sản phẩm", value: title },
        { label: "Ghi hình camera trước", value: "4K HDR" },
        { label: "Ghi hình camera sau", value: "1080P" },
        { label: "Cảnh báo giao thông", value: "Dữ liệu GPS/Gofa; không nhận diện biển báo theo thời gian thực" },
      ]
    : [
        { label: "Tên sản phẩm", value: title },
        ...featureBullets.map((feature, index) => ({ label: `Tính năng ${index + 1}`, value: feature })),
      ];

  return {
    pathname,
    title,
    categoryPath: "/camera-hanh-trinh/",
    categoryLabel: "Camera hành trình",
    price: isA800 ? "3.990.000₫" : camera.desktopPrice.replace(/\s*đ$/i, "₫"),
    note: detailNote,
    summary: isA800
      ? "Camera hành trình 70mai A800SE SpeedEye ghi hình 4K, hỗ trợ cảnh báo tốc độ và camera giao thông."
      : `${camera.title} camera hành trình 70mai với ${featureBullets.slice(0, 2).join(" và ").toLocaleLowerCase("vi-VN")}.`,
    warning: isA800
      ? "SpeedEye sử dụng dữ liệu GPS/Gofa để nhận diện biển báo, không nhận diện biển báo giao thông theo thời gian thực."
      : undefined,
    features: featureBullets,
    specificationHeading: isA800
      ? "Thông số kỹ thuật camera hành trình 70mai A800SE"
      : `Thông số kỹ thuật ${title}`,
    variants: isA800
      ? [
          { value: "front", label: "Camera trước" },
          { value: "front-rear", label: "Camera trước + sau" },
        ]
      : undefined,
    images,
    sections: details,
    specs,
    relatedProducts: getRelatedProducts(pathname),
  };
}

const extraCardsByPath = new Map<string, ProductCardData[]>();
for (const card of catalogCards) {
  const pathname = localPath(card.href);
  const existing = extraCardsByPath.get(pathname) ?? [];
  extraCardsByPath.set(pathname, [...existing, card]);
}

const cameraDetails = featuredCameras.map((camera) =>
  makeCameraDetail(camera, extraCardsByPath.get(localPath(camera.href)) ?? []),
);

const catalogDetails: ProductDetailData[] = catalogCards.map((card) => {
  const pathname = localPath(card.href);
  const existing = cameraDetails.find((product) => product.pathname === pathname);
  if (existing) return existing;

  const title = card.title;
  const category = categoryForPath(pathname);
  return {
    pathname,
    title,
    categoryPath: category.path,
    categoryLabel: category.label,
    price: card.price,
    note: detailNote,
    summary: `${title} chính hãng 70mai. Liên hệ để được tư vấn phiên bản phù hợp với xe của bạn.`,
    features: ["Sản phẩm 70mai chính hãng", "Tư vấn lắp đặt và sử dụng", "Hỗ trợ bảo hành theo chính sách cửa hàng"],
    images: toProductGallery(title, [card.image]),
    sections: [
      {
        heading: `Thông tin ${title}`,
        paragraphs: [
          `${title} là phụ kiện thuộc hệ sinh thái 70mai. Kiểm tra khả năng tương thích với xe và thiết bị trước khi đặt hàng.`,
        ],
      },
    ],
    specs: [
      { label: "Tên sản phẩm", value: title },
      { label: "Tương thích", value: "Vui lòng kiểm tra theo thông tin của sản phẩm" },
    ],
    relatedProducts: getRelatedProducts(pathname),
  };
});

const knownProducts = new Map<string, ProductDetailData>();
for (const product of [...cameraDetails, ...catalogDetails]) {
  knownProducts.set(product.pathname, product);
}

const fallbackImage = image("70mai-SP-A800SEspeedeye-noi-bat-trang-chu.jpg");

export function getProductDetailData(
  pathname: string | readonly string[],
): ProductDetailData {
  const normalizedPath = normalizeProductPath(pathname);
  const product = knownProducts.get(normalizedPath);
  if (product) return product;

  const category = categoryForPath(normalizedPath);
  const title = titleFromSlug(normalizedPath);
  const a800Path = "/camera-hanh-trinh/camera-hanh-trinh-70mai-a800se-speedeye/";
  const relatedProducts = getRelatedProducts(normalizedPath)
    .filter((related) => related.href !== a800Path)
    .slice(0, 3);
  return {
    pathname: normalizedPath,
    title,
    categoryPath: category.path,
    categoryLabel: category.label,
    price: "Liên hệ",
    note: "Giá và tình trạng hàng được xác nhận khi liên hệ cửa hàng.",
    summary: `${title} thuộc danh mục ${category.label.toLocaleLowerCase("vi-VN")}. Liên hệ cửa hàng để được tư vấn thêm thông tin sản phẩm.`,
    features: ["Thông tin chi tiết đang được cập nhật", "Tư vấn chọn sản phẩm phù hợp", "Hỗ trợ khách hàng tại Việt Nam"],
    images: [],
    sections: [
      {
        heading: `Thông tin ${title}`,
        paragraphs: [
          "Nội dung chi tiết của sản phẩm này đang được cập nhật. Vui lòng liên hệ cửa hàng để xác nhận thông tin, giá bán và tình trạng hàng.",
        ],
      },
    ],
    specs: [
      { label: "Tên sản phẩm", value: title },
      { label: "Danh mục", value: category.label },
      { label: "Giá bán", value: "Liên hệ cửa hàng" },
    ],
    relatedProducts: [
      {
        title: "Camera hành trình 70mai A800SE SpeedEye",
        price: "3.990.000₫",
        image: fallbackImage,
        href: a800Path,
      },
      ...relatedProducts,
    ],
  };
}

export const productDetailPaths = [...knownProducts.keys()];
