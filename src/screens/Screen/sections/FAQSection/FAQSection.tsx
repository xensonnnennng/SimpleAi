import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

const descriptionLines = [
  "In legacy work, only senior people in the corner office benefited",
  "from the ultraproductivity of an assistant. In Roam, everyone gets",
  "their own AI Assistant capable of observing what's happening in",
  "the office, scheduling meetings, following up via email and chat,",
  "and searching through all of your Magic Minutes.",
];

const additionalLines = [
  "On-It is smart enough to volunteer to grab action items after a",
  "meeting when it has the skills. Click and your AI Assistant is On-It!",
];

const chatMessages = [
  {
    type: "user",
    lines: [
      "Can you tell me if you see Sean",
      "MacIsaac and Thomas Grapperon",
      "meeting together?",
    ],
  },
  {
    type: "assistant",
    lines: [
      "I'm On-It! I'll notify you the next time I",
      "notice that Sean MacIsaac and Thomas",
      "Grapperon are meeting together.",
    ],
  },
];

const taskSteps = [
  {
    text: "Resolving Sean and Thomas in the company directory",
    visible: true,
  },
  {
    text: "Locating Sean MacIsaac and Thomas Grapperon on the map",
    visible: false,
  },
  {
    text: "Setting a watch for them to enter the same room",
    visible: false,
  },
  {
    text: "Notifying You",
    visible: false,
  },
];

export const FAQSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col gap-[52px] py-16">
      <div className="mx-auto w-full max-w-[500px] flex flex-col px-4">
        <h2 className="text-center [font-family:'Inter',Helvetica] font-medium text-white text-[22px] tracking-[0] leading-7 whitespace-nowrap">
          Your AI Assistant is On-It!
        </h2>

        <div className="flex w-full flex-col items-start gap-2 mt-2">
          <div className="w-full text-center">
            {descriptionLines.map((line, index) => (
              <p
                key={`desc-${index}`}
                className="[font-family:'Inter',Helvetica] font-normal text-[#ffffff80] text-base tracking-[0] leading-6"
              >
                {line}
              </p>
            ))}
          </div>

          <div className="w-full text-center mt-4">
            {additionalLines.map((line, index) => (
              <p
                key={`add-${index}`}
                className="[font-family:'Inter',Helvetica] font-normal text-[#ffffff80] text-base tracking-[0] leading-6"
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          <Button
            variant="ghost"
            className="bg-[#ffffff0d] rounded-lg shadow-[inset_0px_0.5px_0px_#ffffff1a] [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 h-7 px-3"
          >
            Free Trial
          </Button>

          <Button
            variant="ghost"
            className="bg-[#ffffff0d] rounded-lg shadow-[inset_0px_0.5px_0px_#ffffff1a] [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 h-7 px-3"
          >
            Book Demo
          </Button>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[864px] px-4">
        <Card className="bg-[#1d1e20] rounded-xl border border-solid border-[#ffffff1a]">
          <CardContent className="p-0">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-solid border-[#ffffff1a]">
              <Avatar className="w-6 h-6">
                <AvatarImage src="/image-1.png" alt="Zorton" />
              </Avatar>

              <span className="[font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-5">
                Zorton
              </span>

              <div className="ml-auto">
                <img
                  className="w-[52px] h-6"
                  alt="Controls"
                  src="/div--sc-jxowhs-.svg"
                />
              </div>
            </div>

            <div className="flex">
              <div className="flex-1 flex flex-col gap-4 p-4 border-r border-solid border-[#ffffff1a] overflow-hidden">
                <div className="flex flex-col gap-4 overflow-hidden">
                  {chatMessages.map((message, index) => (
                    <div
                      key={`msg-${index}`}
                      className={`flex ${
                        message.type === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`flex flex-col px-3 py-[7.5px] rounded-[18px] max-w-[291px] ${
                          message.type === "user"
                            ? "bg-[#e7e8e9] rounded-br-[4px]"
                            : "bg-[#27282b] rounded-bl-[4px]"
                        }`}
                      >
                        {message.lines.map((line, lineIndex) => (
                          <p
                            key={`line-${lineIndex}`}
                            className={`[font-family:'Inter',Helvetica] font-normal text-sm tracking-[0] leading-5 ${
                              message.type === "user"
                                ? "text-black"
                                : "text-white"
                            }`}
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <Input
                    placeholder="Ask anything"
                    className="bg-[#ffffff0d] rounded-lg border border-solid border-[#ffffff1a] [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 h-[42px]"
                  />
                </div>
              </div>

              <div className="flex-1 p-4">
                <div className="flex items-center gap-2 mb-8">
                  <img className="w-6 h-6" alt="Icon" src="/icon-80.svg" />
                  <span className="[font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-5">
                    Watch for Sean and Thomas meeting together
                  </span>
                </div>

                <Card className="bg-[#27282b] rounded-xl border border-solid border-[#ffffff1a]">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <Avatar className="w-6 h-6">
                        <AvatarImage src="/image-1.png" alt="Zorton" />
                      </Avatar>
                      <span className="[font-family:'Inter',Helvetica] font-medium text-white text-xs tracking-[0] leading-4">
                        Zorton
                      </span>
                    </div>

                    <div className="flex flex-col gap-2">
                      {taskSteps.map((step, index) => (
                        <div
                          key={`step-${index}`}
                          className="flex items-start gap-4"
                        >
                          <div className="flex flex-col items-center">
                            <div className="w-px h-4 border-l border-solid border-[#ffffff26]" />
                          </div>
                          <p
                            className={`[font-family:'Inter',Helvetica] font-normal text-xs tracking-[0] leading-4 ${
                              step.visible ? "text-white" : "text-[#ffffff80]"
                            }`}
                          >
                            {step.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
