import React from "react";
import { Button } from "../../../../components/ui/button";

export const AboutUsSection = (): JSX.Element => {
  const descriptionLines = [
    "Take your presentations to the next level with a",
    "unique new Theater format for all-hands. Your",
    "audience sits in rows where they can whisper",
    "to each other. There's a backstage, Q&A",
    "microphone, and stadium mode for 100+",
    "people. All the world's a stage!",
  ];

  return (
    <section className="w-full overflow-hidden flex gap-[52px] py-16">
      <div className="flex-shrink-0 w-[968px] h-[627.41px] relative bg-[#1d1e20] rounded-[2.29px]">
        <div className="absolute top-0 left-0 w-full h-full rounded-[2.29px] border border-solid border-[#ffffff1a]" />
        <div className="[background:url(..//video--sc-dvvnwr--2.png)_50%_50%_/_cover] absolute top-0 left-0 w-full h-full rounded-[2.29px]" />
      </div>

      <div className="flex flex-col justify-center gap-4">
        <h2 className="[font-family:'Inter',Helvetica] font-medium text-white text-[22px] tracking-[0] leading-7">
          Theater
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

        <div className="flex items-start gap-2 mt-4">
          <Button
            variant="secondary"
            className="bg-[#ffffff0d] hover:bg-[#ffffff1a] text-white shadow-[inset_0px_0.5px_0px_#ffffff1a] rounded-lg h-7 px-3 text-sm font-normal [font-family:'Inter',Helvetica]"
          >
            Free Trial
          </Button>
          <Button
            variant="secondary"
            className="bg-[#ffffff0d] hover:bg-[#ffffff1a] text-white shadow-[inset_0px_0.5px_0px_#ffffff1a] rounded-lg h-7 px-3 text-sm font-normal [font-family:'Inter',Helvetica]"
          >
            Book Demo
          </Button>
        </div>
      </div>
    </section>
  );
};
