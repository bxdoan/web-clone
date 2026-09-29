export interface CategoryProductData {
  title: string;
  price: string;
  regularPrice?: string;
  image: string;
  href: string;
}

export interface CategoryListingData {
  id: string;
  path: string;
  heading: string;
  breadcrumb: string;
  totalCount: number;
  description: string;
  products: CategoryProductData[];
}

export const categoryListings = {
  "camera-hanh-trinh": {
    id: "camera-hanh-trinh",
    path: "/camera-hanh-trinh/",
    heading: "CAMERA HÀNH TRÌNH",
    breadcrumb: "Camera hành trình",
    totalCount: 25,
    description: "70mai Nha Trang tư vấn và phân phối camera hành trình 70mai chính hãng. Khám phá những dòng camera phù hợp cho xế cưng của bạn.",
    products: [
      { title: "Camera hành trình 70mai 4K A810 Lite", price: "2.790.000₫", image: "/sites/70maivietnam-store-f583e865/root-8a5edab2/images/anh-dai-dien-A810-lite-2-83202a29.webp", href: "/camera-hanh-trinh/camera-hanh-trinh-70mai-a810-lite/" },
      { title: "Camera hành trình 70mai 4K Omni X800", price: "5.990.000₫", image: "/sites/70maivietnam-store-f583e865/root-8a5edab2/images/70mai-X800-4K-xoay-360-ket-noi-4G-2-3f6514ad.webp", href: "/camera-hanh-trinh/camera-hanh-trinh-70mai-omni-x800/" },
      { title: "Camera hành trình 70mai A210", price: "1.690.000₫", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/2ed333053151.jpg", href: "/camera-hanh-trinh/camera-hanh-trinh-70mai-a210/" },
      { title: "Camera hành trình 70mai A410", price: "2.100.000₫", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/6422dd694485.jpg", href: "/camera-hanh-trinh/camera-hanh-trinh-70mai-a410/" },
      { title: "Camera hành trình 70mai A410 Neo", price: "1.990.000₫", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/a8294ebf8855.jpg", href: "/camera-hanh-trinh/camera-hanh-trinh-70mai-a410-neo/" },
      { title: "Camera hành trình 70mai A800SE", price: "3.190.000₫", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/e6ea74c61f85.jpg", href: "/camera-hanh-trinh/camera-hanh-trinh-70mai-a800se/" },
      { title: "Camera hành trình 70mai A800SE SpeedEye", price: "3.990.000₫", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/61555b525c15.jpg", href: "/camera-hanh-trinh/camera-hanh-trinh-70mai-a800se-speedeye/" },
      { title: "Camera hành trình 70mai A810S", price: "4.690.000₫", image: "/sites/70maivietnam-store-f583e865/root-8a5edab2/images/anh-xoa-phong-2-e1769396861678-b1ecaad2.webp", href: "/camera-hanh-trinh/camera-hanh-trinh-70mai-a810s/" },
      { title: "Camera Hành Trình 70mai M310 Plus 2K", price: "1.250.000₫", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/d9cdf5e956bc.jpg", href: "/camera-hanh-trinh/camera-hanh-trinh-70mai-m310-plus-2k/" },
      { title: "Camera Hành Trình 70mai M310 Plus 3K", price: "1.700.000₫", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/740caa9b5925.jpg", href: "/camera-hanh-trinh/camera-hanh-trinh-70mai-m310-plus-3k/" },
      { title: "Camera hành trình 70mai M310 Plus 4K", price: "2.100.000₫", image: "/sites/70maivietnam-store-f583e865/root-8a5edab2/images/Anh-dai-dienj-70mai-M310-Plus-4K-c872fba9.webp", href: "/camera-hanh-trinh/camera-hanh-trinh-70mai-m310-plus-4k/" },
      { title: "Camera hành trình 70mai M800", price: "5.890.000₫", image: "/sites/70maivietnam-store-f583e865/root-8a5edab2/images/anh-nen-xoa-phong-2-4dd83141.webp", href: "/camera-hanh-trinh/camera-hanh-trinh-70mai-m800/" },
      { title: "Camera hành trình 70mai S410 dạng gương", price: "2.990.000₫", image: "/sites/70maivietnam-store-f583e865/root-8a5edab2/images/camera-hanh-trinh-70maai-S410-7ca11ae9.webp", href: "/camera-hanh-trinh/camera-hanh-trinh-70mai-s410-dang-guong/" },
      { title: "Camera Hành Trình 70mai T400", price: "3.590.000₫", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/1f1457903ada.jpg", href: "/camera-hanh-trinh/camera-hanh-trinh-70mai-t400/" },
      { title: "Camera Hành Trình 70mai T800", price: "9.990.000₫", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/e1175663c763.jpg", href: "/camera-hanh-trinh/camera-hanh-trinh-70mai-t800/" },
      { title: "Camera hành trình 70mai M310", price: "1.190.000₫", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/e5312a0f5fb0.jpg", href: "/camera-hanh-trinh/camera-hanh-trinh-70mai-m310/" },
      { title: "Camera hành trình 70mai A510", price: "2.690.000₫", image: "/sites/70maivietnam-store-f583e865/root-8a5edab2/images/Dai-dien-70mai-A510-moi-580x580-1-5e465ade.webp", href: "/camera-hanh-trinh/camera-hanh-trinh-70mai-a510/" },
      { title: "Camera hành trình 70mai A810", price: "Liên hệ", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/d210d4202665.jpg", href: "/camera-hanh-trinh/camera-hanh-trinh-70mai-a810/" },
      { title: "Camera hành trình 70mai A200", price: "1.700.000₫", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/c9c2c7387904.jpg", href: "/camera-hanh-trinh/camera-hanh-trinh-70mai-a200/" },
      { title: "Camera hành trình 70mai A500S", price: "2.290.000₫", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/b5c44bcd2ec8.jpg", href: "/camera-hanh-trinh/camera-hanh-trinh-70mai-a500s/" },
      { title: "Camera hành trình gương 70mai S500", price: "Liên hệ", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/1001d7c74d25.jpg", href: "/camera-hanh-trinh/camera-hanh-trinh-guong-70mai-s500/" },
      { title: "Camera hành trình 70mai A400", price: "Liên hệ", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/ea6557eebdab.jpg", href: "/camera-hanh-trinh/camera-hanh-trinh-70mai-a400/" },
      { title: "Camera hành trình 70mai D07", price: "Liên hệ", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/e83db4d1079f.jpg", href: "/camera-hanh-trinh/camera-hanh-trinh-70mai-d07/" },
      { title: "Camera hành trình 70mai 1S", price: "790.000₫", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/2ae39a591e8b.jpg", href: "/camera-hanh-trinh/camera-hanh-trinh-70mai-1s/" },
      { title: "Camera hành trình 70mai 1S", price: "790.000₫", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/2ae39a591e8b.jpg", href: "/camera-hanh-trinh/camera-hanh-trinh-70mai-1s/" },
    ],
  },
  "phu-kien-camera": {
    id: "phu-kien-camera",
    path: "/phu-kien-camera/",
    heading: "PHỤ KIỆN CAMERA",
    breadcrumb: "Phụ kiện Camera",
    totalCount: 32,
    description: "Phụ kiện camera hành trình 70mai như chân đế dán cam, dây cáp nguồn, tẩu sạc nguồn, đế dán 3M, film dán kính, mắt camera sau, Bộ Hardwire Kit 70mai,..",
    products: [
      { title: "Bộ Hardwire Kit 70mai UP06 cho camera hành trình 70mai", price: "690.000₫", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/75491a3086f6.jpg", href: "/phu-kien-camera/bo-hardwire-kit-70mai-up06-cho-camera-hanh-trinh-70mai/" },
      { title: "Đầu đọc thẻ nhớ camera hành trình 70mai", price: "Liên hệ", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/2f7e9f612921.png", href: "/phu-kien-camera/dau-doc-the-nho-camera-hanh-trinh-70mai/" },
      { title: "Mắt camera sau 70mai RC14", price: "1.190.000₫", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/63fb6bf69e48.jpg", href: "/phu-kien-camera/mat-camera-sau-70mai-rc14/" },
      { title: "Mắt camera sau 70mai RC21", price: "690.000₫", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/d403b1e8bf9b.jpg", href: "/phu-kien-camera/mat-camera-sau-70mai-rc21/" },
      { title: "Mắt camera sau 70mai RC22", price: "690.000₫", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/7a3bf60633ec.jpg", href: "/phu-kien-camera/mat-camera-sau-70mai-rc22/" },
      { title: "Mắt camera sau 70mai RC23", price: "Liên hệ", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/64e19c0b6b24.jpg", href: "/phu-kien-camera/mat-camera-sau-70mai-rc23/" },
      { title: "Mắt camera sau 70mai RC24", price: "1.590.000₫", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/e002a3a108fb.jpg", href: "/phu-kien-camera/mat-camera-sau-70mai-rc24/" },
      { title: "Mắt camera sau 70mai RC41", price: "Liên hệ", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/1b1fd410df00.jpg", href: "/phu-kien-camera/mat-camera-sau-70mai-rc41/" },
      { title: "Thẻ nhớ Lexar SILVER PLUS", price: "1.690.000₫", image: "/sites/70maivietnam-store-f583e865/root-8a5edab2/images/Anh-dai-dien-the-nho-lexar-silver-plusx-1-f90e5aea.webp", href: "/phu-kien-camera/the-nho-camera-hanh-trinh/the-nho-lexar-silver-plus/" },
      { title: "Thẻ nhớ Lexar xanh 633x", price: "290.000₫", image: "/sites/70maivietnam-store-f583e865/root-8a5edab2/images/Anh-dai-dien-the-nho-lexar-633x1-1-b8685ac1.webp", href: "/phu-kien-camera/the-nho-camera-hanh-trinh/the-nho-lexar-xanh-633/" },
      { title: "Mắt camera trong xe 70mai FC02", price: "Liên hệ", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/75e35218dd94.jpg", href: "/phu-kien-camera/70mai-fc02/" },
      { title: "Mắt camera sau 70mai RC11", price: "690.000₫", image: "/sites/70maivietnam-store-f583e865/root-8a5edab2/images/70mai-RC-11-12-3-2e738354.webp", href: "/phu-kien-camera/70mai-rc11/" },
      { title: "Mắt camera sau 70mai RC12", price: "Liên hệ", image: "/sites/70maivietnam-store-f583e865/root-8a5edab2/images/70mai-RC-11-12-3-2e738354.webp", href: "/phu-kien-camera/70mai-rc12/" },
      { title: "Mắt camera sau 70mai RC13", price: "Liên hệ", image: "/sites/70maivietnam-store-f583e865/root-8a5edab2/images/mat-cam-sau-RC13-e1717053577986-551f63c0.webp", href: "/phu-kien-camera/70mai-rc13/" },
      { title: "Bộ Hardwire Kit cổng OBD II cho camera hành trình 70mai", price: "Liên hệ", image: "/sites/70maivietnam-store-f583e865/root-8a5edab2/images/0dd3abdb29bbb49c407aab4820f2cc4e-af0d8fff.webp", href: "/phu-kien-camera/bo-hardwire-kit-cong-obd-2/" },
      { title: "Bộ Hardwire Kit 70mai UP03 cho camera hành trình 70mai chân Type-C", price: "390.000₫", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/970aae979d30.jpg", href: "/phu-kien-camera/bo-hardwire-kit-cho-camera-hanh-trinh-70mai-chan-type-c/" },
      { title: "Bộ Hardwire Kit 70mai UP02 cho camera hành trình 70mai chân Micro USB", price: "390.000₫", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/1cf5d1e180fd.jpg", href: "/phu-kien-camera/bo-hardwire-kit-cho-camera-hanh-trinh-70mai-chan-micro-usb/" },
      { title: "Bộ lọc CPL 70mai cho camera hành trình A800S, A500S, Lite 2", price: "Liên hệ", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/1891b1d91a8a.jpg", href: "/phu-kien-camera/bo-loc-cpl-70mai-cho-camera-hanh-trinh-a800s-a500s-lite-2/" },
      { title: "Bộ lọc CPL 70mai cho camera hành trình A810", price: "Liên hệ", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/812a597eef50.jpg", href: "/phu-kien-camera/bo-loc-cpl-70mai-cho-camera-hanh-trinh-a810/" },
      { title: "Cáp nguồn camera hành trình 70mai cổng Micro USB", price: "180.000₫", image: "/sites/70maivietnam-store-f583e865/root-8a5edab2/images/Cap-nguon-phu-kien-70mai-cho-Camera-hanh-trinh-7df52cbc.webp", href: "/phu-kien-camera/cap-nguon-cho-camera-hanh-trinh-70mai/" },
      { title: "Cáp nguồn camera hành trình 70mai cổng Type-C", price: "180.000₫", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/994e524d91eb.jpg", href: "/phu-kien-camera/cap-nguon-camera-hanh-trinh-70mai-cong-type-c/" },
      { title: "Cáp nguồn cho camera hành trình 70mai M500/Omni", price: "180.000₫", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/01d9e5f13afe.jpg", href: "/phu-kien-camera/cap-nguon-cho-camera-hanh-trinh-70mai-m500-omni/" },
      { title: "Miếng dán 3M cho camera 70mai", price: "50.000₫", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/17dfae9435ca.jpg", href: "/phu-kien-camera/mieng-dan-3m-cho-camera-70mai/" },
      { title: "Miếng dán từ tính cho camera hành trình 70mai", price: "50.000₫", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/f5dbe925db73.jpg", href: "/phu-kien-camera/mieng-dan-tu-tinh-cho-camera-hanh-trinh-70mai/" },
      { title: "Phụ kiện camera hành trình 70mai 1S và M300", price: "150.000₫", image: "/sites/70maivietnam-store-f583e865/root-8a5edab2/images/Phu-kien-70mai-cho-Camera-hanh-trinh-1S-M300-1a9d479d.webp", href: "/phu-kien-camera/phu-kien-camera-hanh-trinh-70mai-1s-m300/" },
      { title: "Phụ kiện camera hành trình 70mai A400", price: "150.000₫", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/8817a28365fa.jpg", href: "/phu-kien-camera/phu-kien-camera-hanh-trinh-70mai-a400/" },
      { title: "Phụ kiện camera hành trình 70mai A510, A500S, A200", price: "150.000₫", image: "/sites/70maivietnam-store-f583e865/root-8a5edab2/images/Phu-kien-70mai-cho-Dash-Cam-A500S-e157d698.webp", href: "/phu-kien-camera/phu-kien-camera-hanh-trinh-70mai-a500s/" },
      { title: "Phụ kiện camera hành trình 70mai A810, A800S", price: "160.000₫", image: "/sites/70maivietnam-store-f583e865/root-8a5edab2/images/Phu-kien-70mai-danh-cho-Camera-hanh-trinh-A800S-07e921cf.webp", href: "/phu-kien-camera/phu-kien-camera-hanh-trinh-70mai-a800s/" },
      { title: "Phụ kiện camera hành trình 70mai Omni", price: "150.000₫", image: "/sites/70maivietnam-store-f583e865/root-8a5edab2/images/Phu-kien-70mai-cho-Dash-Cam-Omni-3d5a6677.webp", href: "/phu-kien-camera/phu-kien-camera-hanh-trinh-70mai-omni/" },
      { title: "Sim 4G cho camera hành trình", price: "900.000₫", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/d65bb9aafd6a.jpg", href: "/phu-kien-camera/sim-4g/" },
      { title: "Tẩu sạc 70mai", price: "150.000₫", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/6bf6676ed799.jpg", href: "/phu-kien-camera/tau-sac-70mai/" },
    ],
  },
  "phu-kien-70mai": {
    id: "phu-kien-70mai",
    path: "/phu-kien-70mai/",
    heading: "PHỤ KIỆN 70MAI",
    breadcrumb: "Phụ kiện 70mai",
    totalCount: 10,
    description: "Top phụ kiện 70mai cần thiết nên trang bị khi mới mua xe để an tâm trên mọi hành trình. 70mai Nha Trang tư vấn và hỗ trợ sản phẩm tại địa phương.",
    products: [
      { title: "Bộ Gối Tựa Đầu và Tựa Lưng 70mai Cho Ô Tô", price: "380.000₫", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/61f9bc93ae44.jpg", href: "/phu-kien-70mai/bo-goi-tua-dau-va-tua-lung-70mai-cho-o-to/" },
      { title: "Bộ tích điện 70mai cho camera hành trình", price: "Liên hệ", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/a1c094281774.jpg", href: "/phu-kien-70mai/bo-tich-dien-70mai-cho-camera-hanh-trinh/" },
      { title: "Cảm biến áp suất lốp 70mai T05", price: "1.990.000₫", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/75ad5afb0c6f.jpg", href: "/phu-kien-70mai/cam-bien-ap-suat-lop-70mai-t05/" },
      { title: "Máy hút bụi cầm tay 70mai PV03 và PV04", price: "Liên hệ", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/645b4c95d42a.jpg", href: "/phu-kien-70mai/may-hut-bui-cam-tay-70mai-pv03-va-pv04/" },
      { title: "Trạm phát điện di động Tera 1000", price: "Liên hệ", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/692be28ce9f9.jpg", href: "/phu-kien-70mai/tram-phat-dien-di-dong-tera-1000/" },
      { title: "Máy phát điện Tera-1000", price: "Liên hệ", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/3d3a08010367.jpg", href: "/phu-kien-70mai/may-phat-dien-tera-1000/" },
      { title: "Cảm biến áp suất lốp 70mai T02", price: "Liên hệ", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/d69d22796ce3.jpg", href: "/phu-kien-70mai/cam-bien-ap-suat-lop-70mai-t02/" },
      { title: "Cảm biến áp suất lốp 70mai T04", price: "Liên hệ", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/51cfed70391e.jpg", href: "/phu-kien-70mai/cam-bien-ap-suat-lop-70mai-t04/" },
      { title: "Máy hút bụi 70mai PV01", price: "Liên hệ", image: "/sites/70maivietnam-store-f583e865/root-8a5edab2/images/may-hut-bui-70mai-4e4dab1f.webp", href: "/phu-kien-70mai/may-hut-bui-70mai-pv01/" },
      { title: "Miếng dán gương chiếu hậu 70mai", price: "Liên hệ", image: "/sites/70maivietnam-store-f583e865/shared/images/category-listing/90ed8f78eb24.jpg", href: "/phu-kien-70mai/mieng-dan-guong-chieu-hau-70mai/" },
    ],
  },
} satisfies Record<string, CategoryListingData>;

export type CategoryListingId = keyof typeof categoryListings;
