import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const descriptionLines = [
  "Knock on an empty seat in someone's private",
  "office to start an audio-only Drop-In Meeting. If",
  "they want to talk, they'll accept your knock.",
  "When you're in their office, you can also see",
  "their shelf, which shows the pictures, books,",
  "music and other things they want to showcase.",
];

export const BlogSection = (): JSX.Element => {
  return (
    <section className="w-full flex gap-[52px] overflow-hidden py-16">
      <Card className="flex-shrink-0 w-[968px] h-[627px] bg-[#1d1e20] rounded-[2.29px] border border-[#ffffff1a] overflow-hidden">
        <CardContent className="p-0 w-full h-full">
          <div className="[background:url(..//video--sc-dvvnwr--4.png)_50%_50%_/_cover] w-full h-full rounded-[2.29px]" />
        </CardContent>
      </Card>

      <div className="flex flex-col justify-center w-[360px] gap-2">
        <h2 className="[font-family:'Inter',Helvetica] font-medium text-white text-[22px] tracking-[0] leading-7 whitespace-nowrap">
          Drop-In Meetings
        </h2>

        <div className="flex flex-col gap-0 mt-2">
          {descriptionLines.map((line, index) => (
            <p
              key={index}
              className="[font-family:'Inter',Helvetica] font-normal text-[#ffffff80] text-base tracking-[0] leading-6 whitespace-nowrap"
            >
              {line}
            </p>
          ))}
        </div>

        <div className="flex items-start gap-2 mt-4">
          <Button
            variant="secondary"
            className="bg-[#ffffff0d] rounded-lg shadow-[inset_0px_0.5px_0px_#ffffff1a] hover:bg-[#ffffff1a] [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 h-7 px-3"
          >
            Free Trial
          </Button>

          <Button
            variant="secondary"
            className="bg-[#ffffff0d] rounded-lg shadow-[inset_0px_0.5px_0px_#ffffff1a] hover:bg-[#ffffff1a] [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 h-7 px-3"
          >
            Book Demo
          </Button>
        </div>
      </div>
    </section>
  );
};
