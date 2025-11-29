import React from "react";
import { Button } from "../../../../components/ui/button";

const footerLinks = [
  { label: "Support", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Privacy", href: "#" },
];

export const PricingSection = (): JSX.Element => {
  return (
    <footer className="w-full border-t border-[#ffffff1a]">
      <div className="flex items-center justify-between px-20 py-[89px]">
        <img
          className="w-[92px] h-5"
          alt="Div sc bruwdq"
          src="/div--sc-bruwdq-.svg"
        />

        <nav className="flex items-center gap-4">
          {footerLinks.map((link, index) => (
            <Button
              key={index}
              variant="ghost"
              className="h-9 px-4 text-sm font-normal text-[#ffffff80] hover:text-white [font-family:'Inter',Helvetica]"
            >
              {link.label}
            </Button>
          ))}
          <div className="flex items-center justify-center h-5 text-sm font-normal text-[#ffffff80] [font-family:'Inter',Helvetica]">
            © 2025 Roam HQ
          </div>
        </nav>
      </div>
    </footer>
  );
};
