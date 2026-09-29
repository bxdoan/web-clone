import { AboutSection } from "./AboutSection";
import { AccessoryShowcase } from "./AccessoryShowcase";
import { BenefitsAndTypes } from "./BenefitsAndTypes";
import { CameraCatalogRails, MemoryCardRail } from "./CatalogRails";
import { ContactWidgets } from "./ContactWidgets";
import { FeaturedCameras } from "./FeaturedCameras";
import { FooterSection } from "./FooterSection";
import { HeaderHero } from "./HeaderHero";
import { VideoGuides } from "./VideoGuides";

export function SitePage() {
  return (
    <div className="site-70mai">
      <HeaderHero />
      <main>
        <FeaturedCameras />
        <CameraCatalogRails />
        <BenefitsAndTypes />
        <MemoryCardRail />
        <AccessoryShowcase />
        <VideoGuides />
        <AboutSection />
      </main>
      <FooterSection />
      <ContactWidgets />
    </div>
  );
}
