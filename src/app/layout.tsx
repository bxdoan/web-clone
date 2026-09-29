import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const manrope = localFont({
  src: [
    {
      path: "../../public/sites/70maivietnam-store-f583e865/root-8a5edab2/fonts/Manrope-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/sites/70maivietnam-store-f583e865/root-8a5edab2/fonts/Manrope-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "70mai Nha Trang | Camera Hành Trình và Phụ Kiện Chính Hãng",
  description:
    "Camera hành trình và phụ kiện 70mai chính hãng tại Nha Trang. Tư vấn sản phẩm, lắp đặt và hỗ trợ khách hàng tại Khánh Hòa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
