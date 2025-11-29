import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { AboutUsSection } from "./sections/AboutUsSection";
import { BlogSection } from "./sections/BlogSection";
import { ContactSection } from "./sections/ContactSection";
import { FAQSection } from "./sections/FAQSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { GallerySection } from "./sections/GallerySection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NavigationSection } from "./sections/NavigationSection";
import { NewsletterSection } from "./sections/NewsletterSection";
import { PricingSection } from "./sections/PricingSection";
import { ServicesSection } from "./sections/ServicesSection";
import { SidebarSection } from "./sections/SidebarSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

const leftNavItems = [
  { label: "About Us", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "Partner", href: "#partner" },
];

export const Screen = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col bg-[#0c0c0e]">
      <header className="w-full h-14 flex bg-[#000000b2] border-b border-[#ffffff26] sticky top-0 z-50">
        <div className="w-full max-w-[1424px] mx-auto h-14 flex items-center justify-between px-2.5 gap-1.5">
          <nav className="flex items-center gap-1.5">
            {leftNavItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="h-9 px-4 rounded-lg text-[#ffffff80] hover:text-white text-sm font-normal [font-family:'Inter',Helvetica]"
              >
                {item.label}
              </Button>
            ))}
          </nav>

          <div className="w-[116.36px] h-8 [background:url(..//image--sc-dtebfx-.png)_50%_50%_/_cover]" />

          <div className="flex items-center gap-1.5">
            <Button
              variant="ghost"
              className="h-9 px-4 rounded-lg text-[#ffffff80] hover:text-white text-sm font-normal [font-family:'Inter',Helvetica] flex items-center gap-[4.1px]"
            >
              Existing Members
              <ChevronDownIcon className="w-3.5 h-3.5" />
            </Button>

            <Button className="h-9 px-4 bg-[#ffffff0d] hover:bg-[#ffffff1a] rounded-lg shadow-[inset_0px_0.5px_0px_#ffffff1a] text-white text-sm font-normal [font-family:'Inter',Helvetica]">
              Book Demo
            </Button>

            <Button className="h-9 px-4 bg-[#ffffff0d] hover:bg-[#ffffff1a] rounded-lg shadow-[inset_0px_0.5px_0px_#ffffff1a] text-white text-sm font-normal [font-family:'Inter',Helvetica]">
              Free Trial
            </Button>
          </div>
        </div>
      </header>

      <main className="w-full flex flex-col">
        <NewsletterSection />
        <ContactSection />
        <BlogSection />
        <ServicesSection />
        <AboutUsSection />
        <NavigationSection />
        <SidebarSection />
        <FooterSection />
        <MainContentSection />
        <FAQSection />
        <FeaturesSection />
        <HeroSection />
        <GallerySection />
        <TestimonialsSection />
        <PricingSection />
      </main>
    </div>
  );
};
