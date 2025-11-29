import React from "react";
import { Button } from "../../../../components/ui/button";

const descriptionLines = [
  "Send Direct Messages, Group Chats, or",
  "Confidential Chats with AInbox. Set up your",
  "own custom groups. Tailor for your own",
  "bespoke workflow with custom folders, pinned",
  "chats, bookmarks, scheduled messages, and",
  "drag-and-drop reordering. Search your entire",
  "history. Give out guest badges to chat with",
  "people outside your organization, free!",
];

export const NavigationSection = (): JSX.Element => {
  return (
    <section className="w-full flex gap-[52px] py-16">
      <div className="w-[360px] flex flex-col ml-[124px]">
        <h2 className="[font-family:'Inter',Helvetica] font-medium text-white text-[22px] tracking-[0] leading-7 whitespace-nowrap">
          Group Chat
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

        <div className="mt-4 flex items-start gap-2">
          <Button
            variant="secondary"
            className="bg-[#ffffff0d] rounded-lg shadow-[inset_0px_0.5px_0px_#ffffff1a] hover:bg-[#ffffff1a] [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-5"
          >
            Free Trial
          </Button>

          <Button
            variant="secondary"
            className="bg-[#ffffff0d] rounded-lg shadow-[inset_0px_0.5px_0px_#ffffff1a] hover:bg-[#ffffff1a] [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-5"
          >
            Book Demo
          </Button>
        </div>
      </div>

      <div className="w-[820px] h-[531.47px] [background:url(../image--sc-gqfnfk--1.png)_50%_50%_/_cover]" />
    </section>
  );
};
