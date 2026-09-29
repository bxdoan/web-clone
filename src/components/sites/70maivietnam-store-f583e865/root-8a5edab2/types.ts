export interface ProductCardData {
  title: string;
  price: string;
  image: string;
  href: string;
}

export interface FeaturedCameraData {
  title: string;
  desktopLeft: string;
  desktopRight: string;
  mobileImage: string;
  desktopFeatures: string[];
  mobileFeatures?: string[];
  desktopPrice: string;
  mobilePrice?: string;
  href: string;
}

export interface ImageCopyCardData {
  title: string;
  description: string;
  image: string;
}

export interface AccessoryCategoryData {
  id: "ext" | "acc" | "other";
  title: string;
  products: ProductCardData[];
}

export interface FooterColumnData {
  title: string;
  links: Array<{ label: string; href: string }>;
}
