import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const SidebarSection = (): JSX.Element => {
  const descriptionLines = [
    "When you turn on Magic Minutes in a meeting, all participants will",
    "get a transcription and AI-summary of the meeting in a group chat that",
    "everyone's in. Best of all, you can prompt the minutes right in the",
    "group chat - asking questions and getting answers about certain",
    "parts of the meeting. If you're late to a meeting, you'll get an",
    "automated AI-catch-me-up. And, you can get AI summaries of any",
    "chat thread or PDF simply by prompting @MagicMinutes!",
  ];

  return (
    <section className="w-full flex gap-[52px] overflow-hidden py-16">
      <Card className="flex-shrink-0 w-[968px] h-[627.41px] bg-[#1d1e20] rounded-[2.29px] border-[#ffffff1a]">
        <CardContent className="p-0 w-full h-full relative">
          <div className="absolute inset-0 rounded-[2.29px] [background:url(..//video--sc-dvvnwr--1.png)_50%_50%_/_cover]" />
        </CardContent>
      </Card>

      <div className="flex flex-col justify-center max-w-[360px]">
        <h2 className="[font-family:'Inter',Helvetica] font-medium text-white text-[22px] tracking-[0] leading-7 text-center mb-2">
          AI-Powered Meeting Summaries
        </h2>

        <div className="flex flex-col gap-0 mb-4">
          {descriptionLines.map((line, index) => (
            <p
              key={index}
              className="[font-family:'Inter',Helvetica] font-normal text-[#ffffff80] text-base tracking-[0] leading-6 text-center"
            >
              {line}
            </p>
          ))}
        </div>

        <div className="flex items-start gap-2">
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
