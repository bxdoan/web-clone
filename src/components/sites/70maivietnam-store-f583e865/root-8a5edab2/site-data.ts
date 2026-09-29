import type {
  AccessoryCategoryData,
  FeaturedCameraData,
  FooterColumnData,
  ImageCopyCardData,
  ProductCardData,
} from "./types";

export const ASSET_ROOT =
  "/sites/70maivietnam-store-f583e865/root-8a5edab2/images";

export const image = (filename: string): string => `${ASSET_ROOT}/${filename}`;

export const media = {
  logo: image("logo-70maivietnam.svg"),
  desktopHeroOne: image("Banner-70mai-HD-2026-web-2336e553.webp"),
  desktopHeroTwo: image("70maivietnam-tc-98e4ba46.webp"),
  mobileHeroOne: image("Banner-70mai-HD-2026-mb-ffb45181.webp"),
  mobileHeroTwo: image("Dai-su-thuong-hieu-70mai-Viet-Nam-HD-2e5fac35.webp"),
  team: image("Viet-Nam-EXPO-02e7324f.webp"),
  affiliate: image("70maivietnam-Affiliate-2025-8bef0ab4.webp"),
  map: image("MAP-70mai-Viet-Nam.jpg"),
  zalo: image("icon-zalo-9bacacd1.webp"),
  messenger: image("icon-messenger-12006689.webp"),
  mapIcon: image("icon-map-10853971.webp"),
} as const;

export const contactPhones = [
  {
    number: "0915670892",
    tel: "tel:+84915670892",
    zalo: "https://zalo.me/0915670892",
  },
  {
    number: "0904195065",
    tel: "tel:+84904195065",
    zalo: "https://zalo.me/0904195065",
  },
] as const;

export const storeAddress = "2/18 Ngô Đến, Bắc Nha Trang, Khánh Hòa";

const cameraPath = (slug: string): string =>
  `https://70maivietnam.store/camera-hanh-trinh/${slug}/`;

export const featuredCameras: FeaturedCameraData[] = [
  {
    title: "70mai A800SE SpeedEye",
    desktopLeft: image("70mai-SP-A800SE-noi-bat-trang-chu-2.jpg"),
    desktopRight: image("70mai-SP-A800SEspeedeye-noi-bat-trang-chu.jpg"),
    mobileImage: image("anh-Mobile-A800SE-sp-noi-bat.jpg"),
    desktopFeatures: ["Cảnh báo quá tốc độ", "Cảnh báo camera giao thông", "Ghi hình 4K siêu nét"],
    desktopPrice: "3.990.000 đ",
    mobilePrice: "3.900.000 đ",
    href: cameraPath("camera-hanh-trinh-70mai-a800se-speedeye"),
  },
  {
    title: "70mai 4K T800",
    desktopLeft: image("T800-SP-noi-bat-trang-chu-2.jpg"),
    desktopRight: image("T800-70mai-SP-noi-bat-trang-chu.jpg"),
    mobileImage: image("T800-anh-Mobile-sp-noi-bat.jpg"),
    desktopFeatures: ["Ghi hình 3 kênh HDR", "Cảm biến ảnh Sony STRAVIS 2", "2 phiên bản tùy chọn"],
    desktopPrice: "9.900.000 đ",
    href: cameraPath("camera-hanh-trinh-70mai-t800"),
  },
  {
    title: "70mai A810 Lite",
    desktopLeft: image("70mai-SP-A810-lite-noi-bat-trang-chu-2.jpg"),
    desktopRight: image("70mai-SP-A810-Lite-noi-bat-trang-chu.jpg"),
    mobileImage: image("anh-Mobile-sp-A810-Lite-noi-bat.jpg"),
    desktopFeatures: ["Ghi hình 4K HDR", "Ghi hình: Trước & Sau", "Hỗ trợ thẻ nhớ lên tới 512GB"],
    desktopPrice: "2.790.000 đ",
    href: cameraPath("camera-hanh-trinh-70mai-a810-lite"),
  },
  {
    title: "70mai 4K A810S",
    desktopLeft: image("A810S-SP-noi-bat-trang-chu-2.jpg"),
    desktopRight: image("A810S-70mai-SP-noi-bat-trang-chu.jpg"),
    mobileImage: image("A810S-anh-Mobile-sp-noi-bat.jpg"),
    desktopFeatures: ["Ghi hình 4K HDR", "Quay đêm siêu nét trước & sau", "Cảm biến Sony STARVIS 2"],
    desktopPrice: "5.290.000 đ",
    href: cameraPath("camera-hanh-trinh-70mai-a810s"),
  },
  {
    title: "70mai 4K M800",
    desktopLeft: image("M800-SP-noi-bat-trang-chu-2.jpg"),
    desktopRight: image("M800-70mai-SP-noi-bat-trang-chu.jpg"),
    mobileImage: image("M800-anh-Mobile-sp-noi-bat.jpg"),
    desktopFeatures: ["Ghi hình 4K HDR, 2 kênh trước & sau", "Cảm biến hình ảnh Sony STARVIS 2", "Bộ nhớ trong eMMC 128G"],
    desktopPrice: "6.790.000 đ",
    href: cameraPath("camera-hanh-trinh-70mai-m800"),
  },
  {
    title: "70mai T400",
    desktopLeft: image("T400-Dai-dien-trang-chu-2.jpg"),
    desktopRight: image("T400-70mai-SP-noi-bat-trang-chu.jpg"),
    mobileImage: image("T400-anh-Mobile-sp-noi-bat.jpg"),
    desktopFeatures: ["Ghi hình toàn diện 3 kênh", "Thiết kế nhỏ gọn lắp đặt nhanh", "Giám sát đỗ xe 24h thông minh"],
    desktopPrice: "3.890.000 đ",
    href: cameraPath("camera-hanh-trinh-70mai-t400"),
  },
  {
    title: "70mai A410 Neo",
    desktopLeft: image("70mai-SP-noi-A410-Neo-bat-trang-chu-2.jpg"),
    desktopRight: image("70mai-SP-noi-bat-A410-Neo-trang-chu.jpg"),
    mobileImage: image("anh-Mobile-A410-Neo-sp-noi-bat.jpg"),
    desktopFeatures: ["Ghi hình toàn diện 2 kênh", "Độ nét 2,5K QHD", "Pin siêu tụ điện"],
    mobileFeatures: ["Ghi hình toàn diện 2 kênh", "Thiết kế nhỏ gọn lắp đặt nhanh", "Giám sát đỗ xe 24h thông minh"],
    desktopPrice: "1.990.000 đ",
    href: cameraPath("camera-hanh-trinh-70mai-a410-neo"),
  },
  {
    title: "70mai A210-1",
    desktopLeft: image("Camera-hanh-trinh-70mai-A210.jpg"),
    desktopRight: image("70mai-SP-noi-bat-A210-trang-chu.jpg"),
    mobileImage: image("anh-Mobile-sp-A210-noi-bat.jpg"),
    desktopFeatures: ["Ghi hình 1080P HDR", "Ghi hình: Trước & Sau", "Tối ưu khả năng lưu trữ"],
    mobileFeatures: ["Ghi hình Trước & Sau: 1080P HDR"],
    desktopPrice: "2.100.000 đ",
    href: cameraPath("camera-hanh-trinh-70mai-a210"),
  },
  {
    title: "70mai M310 plus 4K",
    desktopLeft: image("70mai-SP-M310-4K-noi-bat-trang-chu-2.jpg"),
    desktopRight: image("70mai-SP-M310-4K-noi-bat-trang-chu.jpg"),
    mobileImage: image("anh-Mobile-sp-M310-4K-noi-bat.jpg"),
    desktopFeatures: ["Ghi hình 4K", "Ống kính xoay 360°, Khẩu độ F1.55"],
    desktopPrice: "2.100.000 đ",
    href: cameraPath("camera-hanh-trinh-70mai-m310-plus-4k"),
  },
  {
    title: "70mai M310 Plus 3K",
    desktopLeft: image("Desktop-70mai-m310-plus-SP-noi-bat-trang-chu-2.jpg"),
    desktopRight: image("Desktop-70mai-m310-plus-noi-bat-trang-chu.jpg"),
    mobileImage: image("Mobile-70mai-m310-plus-SP-noi-bat-trang-chu.jpg"),
    desktopFeatures: ["Ghi hình 3K HD", "Ống kính xoay 360°, Khẩu độ F1.55"],
    desktopPrice: "1.700.000 đ",
    href: cameraPath("camera-hanh-trinh-70mai-m310-plus-3k"),
  },
];

export const cameraRailOne: ProductCardData[] = [
  { title: "Camera hành trình 70mai 4K Omni X800", price: "5.990.000₫", image: image("70mai-X800-4K-xoay-360-ket-noi-4G-2-3f6514ad.webp"), href: cameraPath("camera-hanh-trinh-70mai-omni-x800") },
  { title: "Camera hành trình 70mai S410 dạng gương", price: "2.990.000₫", image: image("camera-hanh-trinh-70maai-S410-7ca11ae9.webp"), href: cameraPath("camera-hanh-trinh-70mai-s410-dang-guong") },
  { title: "Camera hành trình 70mai M800", price: "5.890.000₫", image: image("anh-nen-xoa-phong-2-4dd83141.webp"), href: cameraPath("camera-hanh-trinh-70mai-m800") },
  { title: "Camera hành trình 70mai M310 Plus 4K", price: "2.100.000₫", image: image("Anh-dai-dienj-70mai-M310-Plus-4K-c872fba9.webp"), href: cameraPath("camera-hanh-trinh-70mai-m310-plus-4k") },
  { title: "Camera Hành Trình 70mai M310 Plus 3K", price: "1.700.000₫", image: image("M310-Plus-7440a6e8.webp"), href: cameraPath("camera-hanh-trinh-70mai-m310-plus-3k") },
];

export const cameraRailTwo: ProductCardData[] = [
  { title: "Camera hành trình 70mai 4K A810 Lite", price: "2.790.000₫", image: image("anh-dai-dien-A810-lite-2-83202a29.webp"), href: cameraPath("camera-hanh-trinh-70mai-a810-lite") },
  { title: "Camera hành trình 70mai A800SE SpeedEye", price: "3.990.000₫", image: image("anh-dai-dien-63d3ad58.webp"), href: cameraPath("camera-hanh-trinh-70mai-a800se-speedeye") },
  { title: "Camera hành trình 70mai A210", price: "1.690.000₫", image: image("Anh-dai-dien-3e68303b.webp"), href: cameraPath("camera-hanh-trinh-70mai-a210") },
  { title: "Camera hành trình 70mai A510", price: "2.690.000₫", image: image("Dai-dien-70mai-A510-moi-580x580-1-5e465ade.webp"), href: cameraPath("camera-hanh-trinh-70mai-a510") },
  { title: "Camera hành trình 70mai A810S", price: "4.690.000₫", image: image("anh-xoa-phong-2-e1769396861678-b1ecaad2.webp"), href: cameraPath("camera-hanh-trinh-70mai-a810s") },
];

export const memoryCards: ProductCardData[] = [
  { title: "Thẻ nhớ Lexar xanh 633x", price: "290.000₫", image: image("Anh-dai-dien-the-nho-lexar-633x1-1-b8685ac1.webp"), href: "https://70maivietnam.store/phu-kien-camera/the-nho-camera-hanh-trinh/the-nho-lexar-xanh-633/" },
  { title: "Thẻ nhớ Lexar Blue Plus", price: "850.000₫", image: image("Anh-dai-dien-the-nho-lexar-blue-plus-1-29dde8b6.webp"), href: "https://70maivietnam.store/phu-kien-camera/the-nho-camera-hanh-trinh/the-nho-lexar-blue-plus/" },
  { title: "Thẻ nhớ Lexar SILVER PLUS", price: "1.690.000₫", image: image("Anh-dai-dien-the-nho-lexar-silver-plusx-1-f90e5aea.webp"), href: "https://70maivietnam.store/phu-kien-camera/the-nho-camera-hanh-trinh/the-nho-lexar-silver-plus/" },
];

export const benefits: ImageCopyCardData[] = [
  { title: "Bằng chứng khi xảy ra tai nạn", description: "Video từ camera cung cấp bằng chứng quan trọng khi xảy ra va chạm hoặc tranh chấp giao thông", image: image("70mai-bang-chung-khi-xay-ra-tai-nan-giaothong-a0db9b44.webp") },
  { title: "Tăng cường an ninh", description: "Camera giám sát bãi đỗ xe, ghi hình khi phát hiện va chạm hoặc chuyển động đáng ngờ để bảo vệ xe", image: image("70mai-giam-sat-do-xe-an-toan-f9eb87d9.webp") },
  { title: "Hỗ trợ lái xe an toàn", description: "Công nghệ ADAS tích hợp trên camera hành trình hỗ trợ lái xe an toàn và thuận tiện hơn", image: image("70mai-ho-tro-lai-xe-an-toan-adas-0313dc5d.webp") },
  { title: "Lưu giữ kỷ niệm", description: "Camera ghi lại những cảnh đẹp trên mọi hành trình của bạn để chia sẻ với gia đình và bạn bè", image: image("70mai-luu-giu-ky-niem-719ad10f.webp") },
];

export const cameraTypes: ImageCopyCardData[] = [
  { title: "Camera hành trình trước", description: "Camera ghi hình phía trước xe ô tô", image: image("ghi-hinh-phia-truoc-xe-4-e2546cfd.webp") },
  { title: "Camera hành trình trước và sau", description: "Camera ghi hình 2 mắt trước và sau xe ô tô", image: image("ghi-hinh-truoc-sau-o-to-4-74a4d2ae.webp") },
  { title: "Camera hành trình trước – trong – sau", description: "Camera ghi hình 3 mắt trước – trong – sau xe ô tô", image: image("camera-hanh-trinh-ghi-hinh-3-kenh-truoc-trong-va-sau-6d9a4fe1.webp") },
];

export const accessoryCategories: AccessoryCategoryData[] = [
  {
    id: "ext",
    title: "Phụ kiện 70mai",
    products: [
      { title: "Kích bình ắc quy 70mai PS07", price: "1.790.000₫", image: image("70mai-PS07-Anh-Dai-Dien-2-848dae4c.webp"), href: "https://70maivietnam.store/kich-dien-binh-ac-quy/kich-binh-ac-quy-70mai-ps07/" },
      { title: "Bơm lốp ô tô 70mai TP07", price: "1.350.000₫", image: image("1.1-3a91ded3.webp"), href: "https://70maivietnam.store/bom-lop-o-to/bom-lop-o-to-70mai-tp07/" },
      { title: "Bơm lốp ô tô 70mai TP01", price: "1.490.000₫", image: image("70mai-TP01-fb63e07b.webp"), href: "https://70maivietnam.store/bom-lop-o-to/bom-xiaomi-70mai-tp01/" },
      { title: "Bơm lốp ô tô 70mai TP10", price: "1.100.000₫", image: image("TP10-2-fa4dae31.webp"), href: "https://70maivietnam.store/bom-lop-o-to/bom-lop-o-to-70mai-tp10/" },
      { title: "Kích bình ắc quy 70mai PS01", price: "Liên hệ", image: image("70mai-ps01-0e88ce32.webp"), href: "https://70maivietnam.store/phu-kien-70mai/kich-binh-ac-quy-70mai-ps01/" },
      { title: "Máy hút bụi 70mai PV01", price: "Liên hệ", image: image("may-hut-bui-70mai-4e4dab1f.webp"), href: "https://70maivietnam.store/phu-kien-70mai/may-hut-bui-70mai-pv01/" },
    ],
  },
  {
    id: "acc",
    title: "Phụ kiện Camera",
    products: [
      { title: "Bộ Hardwire Kit UP04 cho camera hành trình 70mai hỗ trợ 4G", price: "Liên hệ", image: image("Hardwire-Kit-UP4-Module-4G-3128dfad.webp"), href: "https://70maivietnam.store/phu-kien-camera/bo-hardwire-kit-up04/" },
      { title: "Bộ Hardwire Kit cổng OBD II cho camera hành trình 70mai", price: "Liên hệ", image: image("0dd3abdb29bbb49c407aab4820f2cc4e-af0d8fff.webp"), href: "https://70maivietnam.store/phu-kien-camera/bo-hardwire-kit-cong-obd-2/" },
      { title: "Mắt camera sau 70mai RC11", price: "690.000₫", image: image("70mai-RC-11-12-3-2e738354.webp"), href: "https://70maivietnam.store/phu-kien-camera/70mai-rc11/" },
      { title: "Mắt camera sau 70mai RC12", price: "Liên hệ", image: image("70mai-RC-11-12-3-2e738354.webp"), href: "https://70maivietnam.store/phu-kien-camera/70mai-rc12/" },
      { title: "Mắt camera sau 70mai RC13", price: "Liên hệ", image: image("mat-cam-sau-RC13-e1717053577986-551f63c0.webp"), href: "https://70maivietnam.store/phu-kien-camera/70mai-rc13/" },
      { title: "Tẩu sạc 70mai", price: "150.000₫", image: image("Tau-sac-70mai-672940c1.webp"), href: "https://70maivietnam.store/phu-kien-camera/tau-sac-70mai/" },
      { title: "Cáp nguồn camera hành trình 70mai cổng Micro USB", price: "180.000₫", image: image("Cap-nguon-phu-kien-70mai-cho-Camera-hanh-trinh-7df52cbc.webp"), href: "https://70maivietnam.store/phu-kien-camera/cap-nguon-cho-camera-hanh-trinh-70mai/" },
      { title: "Phụ kiện camera hành trình 70mai A810, A800S", price: "160.000₫", image: image("Phu-kien-70mai-danh-cho-Camera-hanh-trinh-A800S-07e921cf.webp"), href: "https://70maivietnam.store/phu-kien-camera/phu-kien-camera-hanh-trinh-70mai-a800s/" },
      { title: "Phụ kiện camera hành trình 70mai A510, A500S, A200", price: "150.000₫", image: image("Phu-kien-70mai-cho-Dash-Cam-A500S-e157d698.webp"), href: "https://70maivietnam.store/phu-kien-camera/phu-kien-camera-hanh-trinh-70mai-a500s/" },
      { title: "Phụ kiện camera hành trình 70mai 1S và M300", price: "150.000₫", image: image("Phu-kien-70mai-cho-Camera-hanh-trinh-1S-M300-1a9d479d.webp"), href: "https://70maivietnam.store/phu-kien-camera/phu-kien-camera-hanh-trinh-70mai-1s-m300/" },
      { title: "Phụ kiện camera hành trình 70mai Omni", price: "150.000₫", image: image("Phu-kien-70mai-cho-Dash-Cam-Omni-3d5a6677.webp"), href: "https://70maivietnam.store/phu-kien-camera/phu-kien-camera-hanh-trinh-70mai-omni/" },
    ],
  },
  {
    id: "other",
    title: "Quà tặng 70mai",
    products: [
      { title: "Áo thun 70mai", price: "Liên hệ", image: image("Dong-phuc-70mai-e894b60b.webp"), href: "https://70maivietnam.store/qua-tang-70mai/ao-thun-70mai/" },
      { title: "Máy cắt lông mũi 70mai", price: "Liên hệ", image: image("may-cat-long-mui-70mai-1-2ea618c7.webp"), href: "https://70maivietnam.store/qua-tang-70mai/may-cat-long-mui-70mai/" },
      { title: "Bình nước thể thao 70mai", price: "Liên hệ", image: image("Binh-nuoc-the-thao-368de306.webp"), href: "https://70maivietnam.store/qua-tang-70mai/binh-nuoc-the-thao-70mai/" },
      { title: "Bình giữ nhiệt 70mai", price: "Liên hệ", image: image("Binh-nuoc-cach-nhiet-70mai-e828cb6f.webp"), href: "https://70maivietnam.store/qua-tang-70mai/binh-giu-nhiet-70mai/" },
      { title: "Ô che nắng mưa 70mai", price: "Liên hệ", image: image("o-che-nang-mua-70mai-bbbc0a35.webp"), href: "https://70maivietnam.store/qua-tang-70mai/o-che-nang-mua-70mai/" },
    ],
  },
];

export const storeAddresses = [storeAddress] as const;

export const footerColumns: FooterColumnData[] = [
  {
    title: "Sản phẩm chính",
    links: [
      { label: "Camera hành trình", href: "https://70maivietnam.store/camera-hanh-trinh/" },
      { label: "Phụ kiện 70mai", href: "https://70maivietnam.store/phu-kien-70mai/" },
      { label: "Phụ kiện camera", href: "https://70maivietnam.store/phu-kien-camera/" },
      { label: "Quà tặng 70mai", href: "https://70maivietnam.store/qua-tang-70mai/" },
      { label: "Power Station", href: "https://70maivietnam.store/power-station/" },
    ],
  },
  {
    title: "Hướng dẫn",
    links: [
      { label: "HD Mua hàng", href: "https://70maivietnam.store/huong-dan-mua-hang/" },
      { label: "HD lắp đặt", href: "https://70maivietnam.store/huong-dan-lap-dat/" },
      { label: "HD sử dụng", href: "https://70maivietnam.store/huong-dan-su-dung/" },
      { label: "HD bảo hành", href: "https://70maivietnam.store/huong-dan-bao-hanh/" },
    ],
  },
  {
    title: "Hỗ trợ khách hàng",
    links: [
      { label: "Giới thiệu", href: "https://70maivietnam.store/gioi-thieu/" },
      { label: "Bảo mật thông tin", href: "https://70maivietnam.store/bao-mat-thong-tin/" },
      { label: "Giao hàng - vận chuyển", href: "https://70maivietnam.store/giao-hang-van-chuyen/" },
      { label: "Bảo hành - đổi trả", href: "https://70maivietnam.store/bao-hanh-doi-tra/" },
      { label: "Thanh toán", href: "https://70maivietnam.store/thanh-toan/" },
    ],
  },
];

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/70maivietnam/" },
  { label: "Youtube", href: "https://www.youtube.com/@70maiVietnam" },
  { label: "Shopee", href: "https://shopee.vn/70maivietnam" },
  { label: "Tiktok", href: "https://www.tiktok.com/@70maivietnam" },
];
