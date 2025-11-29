import React from "react";
import { Button } from "../../../../components/ui/button";

const descriptionLines = [
  "Company Visualization with Live Presence on",
  "the Map. A live view of who's in the office,",
  "who's meeting with who, who's talking, 3D",
  "chats as they happen, music people are",
  "listening to, and much more. A shared view that",
  "makes your whole company feel as if",
  "everyone's in one room. Click on anyone's head",
  "to chat with them, or click on an empty seat to",
  "enter a room with them.",
];

export const ContactSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-[1424px] mx-auto flex flex-col lg:flex-row gap-[52px] items-start">
        <div className="w-full lg:w-[360px] flex flex-col gap-8">
          <h2 className="[font-family:'Inter',Helvetica] font-medium text-white text-[22px] tracking-[0] leading-7">
            Map
          </h2>

          <div className="flex flex-col gap-0">
            {descriptionLines.map((line, index) => (
              <p
                key={index}
                className="[font-family:'Inter',Helvetica] font-normal text-[#ffffff80] text-base tracking-[0] leading-6"
              >
                {line}
              </p>
            ))}
          </div>

          <div className="flex items-start gap-2">
            <Button
              variant="secondary"
              className="bg-[#ffffff0d] hover:bg-[#ffffff1a] text-white shadow-[inset_0px_0.5px_0px_#ffffff1a] rounded-lg h-7 px-3 [font-family:'Inter',Helvetica] font-normal text-sm"
            >
              Free Trial
            </Button>
            <Button
              variant="secondary"
              className="bg-[#ffffff0d] hover:bg-[#ffffff1a] text-white shadow-[inset_0px_0.5px_0px_#ffffff1a] rounded-lg h-7 px-3 [font-family:'Inter',Helvetica] font-normal text-sm"
            >
              Book Demo
            </Button>
          </div>
        </div>

        <div className="w-full lg:w-[968px] h-[627px] relative bg-[#1d1e20] rounded-[2.29px] border border-solid border-[#ffffff1a] overflow-hidden">
          <div className="absolute inset-0 [background:url(..//video--sc-dvvnwr--5.png)_50%_50%_/_cover] rounded-[2.29px]" />
        </div>
      </div>
    </section>
  );
};
