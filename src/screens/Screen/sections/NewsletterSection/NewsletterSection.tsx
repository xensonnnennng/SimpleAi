import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

export const NewsletterSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[603px] overflow-hidden">
      <div className="absolute inset-0 w-full h-full [background:url(..//image--sc-cokdim-.png)_50%_50%_/_cover]" />
      <div className="absolute inset-0 w-full h-full [background:url(..//image--sc-cokdim--1.png)_50%_50%_/_cover]" />
      <div className="absolute inset-0 w-full h-full [background:url(..//image--sc-cokdim--2.png)_50%_50%_/_cover]" />
      <div className="absolute inset-0 w-full h-full [background:url(..//image--sc-cokdim--3.png)_50%_50%_/_cover]" />
      <div className="absolute inset-0 w-full h-full [background:url(..//image--sc-cokdim--4.png)_50%_50%_/_cover]" />
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(180deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0)_15%,rgba(0,0,0,0)_55%,rgba(0,0,0,0.8)_85%)]" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="pt-32 px-4">
          <div className="flex items-start gap-3 bg-[url(/div--sc-bvnbcq-.svg)] bg-[100%_100%] w-fit px-3 pt-3 pb-2">
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-2">
                <span className="[font-family:'Inter',Helvetica] font-medium text-white text-base leading-6">
                  Lobby
                </span>
                <img className="w-4 h-4" alt="Icon" src="/icon-77.svg" />
              </div>
              <span className="text-[#ffffff80] [font-family:'Inter',Helvetica] font-normal text-sm leading-5">
                Meeting Scheduler
              </span>
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-end justify-center pb-10">
          <div className="flex flex-col items-center gap-4 w-full max-w-[1344px] px-10">
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col items-center gap-1">
                <Badge
                  variant="outline"
                  className="bg-transparent border-transparent px-0"
                >
                  <span className="[font-family:'Inter',Helvetica] font-bold text-transparent text-base leading-6 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    AI-POWERED
                  </span>
                </Badge>
                <h1 className="[font-family:'Inter',Helvetica] font-bold text-white text-[40.5px] leading-[50px] whitespace-nowrap">
                  OFFICE OF THE FUTURE
                </h1>
                <p className="[font-family:'Inter',Helvetica] font-normal text-[#ffffff80] text-base leading-6 mt-2">
                  Ultraproductivity for just $18.88/month.
                </p>
              </div>

              <div className="flex items-center gap-2.5 px-[9px] py-[9px] bg-[#ffffff0d] rounded-3xl border border-solid border-[#ffffff26]">
                <Button
                  variant="secondary"
                  className="h-[52px] px-4 bg-white hover:bg-white/90 text-black rounded-2xl gap-3"
                >
                  <div className="relative w-6 h-6">
                    <div className="absolute inset-0 w-[25px] h-[25px] bg-[#00000026] rounded-full" />
                    <div className="absolute top-px right-[1px] w-[5px] h-[5px] bg-[#00a466] rounded-full z-10" />
                    <Avatar className="absolute inset-0 w-6 h-6">
                      <AvatarImage src="..//image-3.png" alt="User" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  </div>
                  <span className="[font-family:'Inter',Helvetica] font-medium text-base leading-6">
                    Demo
                  </span>
                  <img className="w-4 h-4" alt="Icon" src="/icon-86.svg" />
                </Button>

                <Button
                  variant="secondary"
                  className="h-[52px] px-12 bg-white hover:bg-white/90 text-black rounded-2xl"
                >
                  <span className="[font-family:'Inter',Helvetica] font-medium text-base leading-6">
                    Free Trial
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
