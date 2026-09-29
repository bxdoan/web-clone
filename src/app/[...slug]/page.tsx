import { RoutedPage } from "@/components/sites/70maivietnam-store-f583e865/shared/RoutedPage";

type CatchAllPageProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function CatchAllPage({ params }: CatchAllPageProps) {
  const { slug } = await params;
  return <RoutedPage pathname={`/${slug.join("/")}/`} />;
}
