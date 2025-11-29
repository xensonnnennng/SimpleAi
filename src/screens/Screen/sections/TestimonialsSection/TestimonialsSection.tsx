import { ChevronDownIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="relative w-full border-t border-[#ffffff1a] py-20">
      <div className="flex flex-col items-center gap-11">
        <h2 className="[font-family:'Inter',Helvetica] font-medium text-white text-[22px] tracking-[0] leading-7 whitespace-nowrap">
          Ready to Grow Your Business?
        </h2>

        <div className="flex items-center gap-2.5 px-[9px] py-[9px] bg-[#ffffff0d] rounded-3xl border border-solid border-[#ffffff26]">
          <Button
            variant="ghost"
            className="relative h-[52px] px-4 bg-white rounded-2xl hover:bg-white"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <Avatar className="w-6 h-6">
                  <AvatarImage src="/image-3.png" alt="User avatar" />
                  <AvatarFallback className="bg-[#00000026]" />
                </Avatar>
                <div className="absolute top-px right-[-1px] w-[5px] h-[5px] bg-[#00a466] rounded-full border border-white" />
              </div>

              <span className="[font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[0] leading-6 whitespace-nowrap">
                Demo
              </span>

              <ChevronDownIcon className="w-4 h-4 text-black" />
            </div>
          </Button>

          <Button
            variant="ghost"
            className="h-[52px] px-4 bg-transparent rounded-2xl hover:bg-white/10"
          >
            <span className="[font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[0] leading-6 whitespace-nowrap">
              Free Trial
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
