import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const featuresData = [
  {
    category: "Team Collaboration",
    title: "GitHub",
    backgroundImage: "url(..//video--sc-frfeky--2.png)",
  },
  {
    category: "Team Collaboration",
    title: "Figma",
    backgroundImage: "url(..//image--sc-frfeky--2.png)",
  },
  {
    category: "Team Culture",
    title: "Spotify",
    backgroundImage: "url(..//video--sc-frfeky--1.png)",
  },
  {
    category: "Team Culture",
    title: "Stories",
    backgroundImage: "url(..//video--sc-frfeky-.png)",
  },
  {
    category: "Privacy",
    title: "Do Not Disturb",
    backgroundImage: "url(..//image--sc-frfeky--1.png)",
  },
  {
    category: "Team Collaboration",
    title: "3D Chat",
    backgroundImage: "url(..//image--sc-frfeky-.png)",
  },
];

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="w-full relative">
      <div className="grid grid-cols-3 gap-3">
        {featuresData.map((feature, index) => (
          <Card
            key={index}
            className="relative h-[583px] rounded-3xl overflow-hidden border border-solid border-[#ffffff1a] bg-transparent"
          >
            <CardContent className="p-0 relative w-full h-full">
              <div
                className="absolute inset-0 [background:var(--bg-image)_50%_50%_/_cover]"
                style={
                  {
                    "--bg-image": feature.backgroundImage,
                  } as React.CSSProperties
                }
              />

              <img
                className="absolute bottom-[31px] right-[25px] w-8 h-8"
                alt="Arrow icon"
                src="/div--sc-hvzcij-.svg"
              />

              <div className="absolute top-0 left-0 flex flex-col items-start gap-[4.5px] pl-6 pt-[23.5px]">
                <div className="[font-family:'Inter',Helvetica] font-medium text-[#ffffff80] text-sm tracking-[0] leading-5 whitespace-nowrap">
                  {feature.category}
                </div>

                <div className="[font-family:'Inter',Helvetica] font-medium text-white text-[28px] tracking-[0] leading-8 whitespace-nowrap">
                  {feature.title}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
