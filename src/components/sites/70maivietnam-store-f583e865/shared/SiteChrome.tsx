import { ContactWidgets } from "../root-8a5edab2/ContactWidgets";
import { FooterSection } from "../root-8a5edab2/FooterSection";
import { HeaderHero } from "../root-8a5edab2/HeaderHero";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-70mai">
      <HeaderHero showHero={false} />
      {children}
      <FooterSection />
      <ContactWidgets />
    </div>
  );
}
