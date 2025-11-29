import React from "react";
import { Button } from "../../../../components/ui/button";

const descriptionLines = [
  "Send your Lobby link to guests to book time",
  "with you on your calendar. Configure different",
  "links with custom time and availability settings",
  "depending on context. Tailor your Lobby to",
  "look like your company. Best of all, you can",
  'allow your guests to "Drop-In" which appears',
  "automatically if you're available.",
];

export const FooterSection = (): JSX.Element => {
  return (
    <section className="w-full overflow-hidden flex gap-[52px] py-16">
      <div className="w-[360px] flex flex-col ml-[124px]">
        <h2 className="flex items-center justify-center w-[118px] h-7 [font-family:'Inter',Helvetica] font-medium text-white text-[22px] tracking-[0] leading-7 whitespace-nowrap">
          Scheduling
        </h2>

        <div className="flex w-[360px] flex-col items-start mt-2 gap-0">
          {descriptionLines.map((line, index) => (
            <p
              key={index}
              className="flex items-center justify-center w-fit [font-family:'Inter',Helvetica] font-normal text-[#ffffff80] text-base tracking-[0] leading-6 whitespace-nowrap"
            >
              {line}
            </p>
          ))}
        </div>

        <div className="mt-4 flex items-start gap-2">
          <Button
            variant="secondary"
            className="h-7 bg-[#ffffff0d] rounded-lg shadow-[inset_0px_0.5px_0px_#ffffff1a] hover:bg-[#ffffff1a] px-3"
          >
            <span className="[font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 whitespace-nowrap">
              Free Trial
            </span>
          </Button>

          <Button
            variant="secondary"
            className="h-7 bg-[#ffffff0d] rounded-lg shadow-[inset_0px_0.5px_0px_#ffffff1a] hover:bg-[#ffffff1a] px-3"
          >
            <span className="[font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 whitespace-nowrap">
              Book Demo
            </span>
          </Button>
        </div>
      </div>

      <div className="w-[968px] h-[627.41px] [background:url(../image--sc-gqfnfk-.png)_50%_50%_/_cover]" />
    </section>
  );
};
