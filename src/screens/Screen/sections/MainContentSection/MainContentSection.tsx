import React from "react";
import { Button } from "../../../../components/ui/button";

const descriptionLines = [
  "Record sales demos, investor updates, product",
  "releases, announcements or anything else you",
  "need right from your desktop with Roam",
  "Magicast. Record your screen and add your",
  "video or audio picture-in-picture to create a",
  "captivating presentation right in Roam. Easily",
  "share via AInbox or a link with someone",
  "externally. They'll get your Magicast and",
  "its transcription.",
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="w-full flex gap-[52px] px-[124px] py-16">
      <div className="w-[764px] h-[504.52px] [background:url(..//video--sc-dvvnwr-.png)_50%_50%_/_cover] rounded-[2.29px]" />

      <div className="w-[360px] flex flex-col gap-2">
        <h2 className="[font-family:'Inter',Helvetica] font-medium text-white text-[22px] tracking-[0] leading-7">
          AI Screen Recorder
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
            className="bg-[#ffffff0d] hover:bg-[#ffffff1a] text-white shadow-[inset_0px_0.5px_0px_#ffffff1a] rounded-lg h-7 px-3 text-sm font-normal"
          >
            Free Trial
          </Button>

          <Button
            variant="secondary"
            className="bg-[#ffffff0d] hover:bg-[#ffffff1a] text-white shadow-[inset_0px_0.5px_0px_#ffffff1a] rounded-lg h-7 px-3 text-sm font-normal"
          >
            Book Demo
          </Button>
        </div>
      </div>
    </section>
  );
};
