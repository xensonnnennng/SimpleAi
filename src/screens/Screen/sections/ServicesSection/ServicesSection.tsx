import React from "react";
import { Button } from "../../../../components/ui/button";

export const ServicesSection = (): JSX.Element => {
  const descriptionLines = [
    "Jump into a Meeting Room for video",
    "conferencing when you need to collaborate.",
    "When you're done, you're done! Includes high",
    "resolution screensharing and whiteboard as",
    "well. No more back-to-back video meetings",
    "filling out all day. Just meet when you need to,",
    "and when you're done, back to work.",
  ];

  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-[1424px] mx-auto flex gap-[52px] items-center">
        <div className="w-[360px] flex flex-col">
          <h2 className="[font-family:'Inter',Helvetica] font-medium text-white text-[22px] tracking-[0] leading-7 mb-2">
            Video Conferencing
          </h2>

          <div className="flex flex-col gap-0 mb-4">
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

        <div className="flex-1 max-w-[968px]">
          <div className="relative w-full aspect-[968/627] bg-[#1d1e20] rounded-[2.29px] border border-solid border-[#ffffff1a] overflow-hidden">
            <div className="absolute inset-0 bg-[url(..//video--sc-dvvnwr--3.png)] bg-cover bg-center bg-no-repeat rounded-[2.29px]" />
          </div>
        </div>
      </div>
    </section>
  );
};
