import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonials = [
  {
    quote: ["@roam is such a phenomenal and carefully crafted", "product"],
    author: "Scott Belsky",
    handle: "@scottbelsky · Adobe",
    avatar: "/image--sc-dntsta--75.png",
    icon: "/icon.svg",
  },
  {
    quote: [
      "My two most recommended productivity hacks: 1. Use",
      "@perplexity_ai instead of google for search. Thank me",
      "later. 2. If you have a startup, use @roam for your virtual",
      "office. Take the test drive and you'll be hooked. If i was",
      "still at TechCrunch, I'd be covering these products",
      "relentlessly.",
    ],
    author: "Michael Arrington",
    handle: "@arrington",
    avatar: "/image--sc-dntsta--76.png",
    icon: "/icon.svg",
  },
  {
    quote: ["Use @roam"],
    author: "Anthony Pompliano",
    handle: "@APompliano",
    avatar: "/image--sc-dntsta--77.png",
    icon: "/icon.svg",
  },
  {
    quote: [
      "@roam lets you set custom entrance sounds! Of course I",
      "set mine to Gilfoyle's bitcoin mining alert from",
      "@SiliconHBO (Napalm Death's 'You Suffer'). My",
      "condolences to the ears of everyone on the @AryeoHQ",
      "engineering team",
    ],
    author: "Drew",
    handle: "@drewclemcr8 · Zillow",
    avatar: "/image--sc-dntsta--78.png",
    icon: "/icon.svg",
  },
  {
    quote: [
      "Here's how you can save ~$800/month on tools for your",
      "remote team. We use @roam —an all-in-one platform for",
      "remote teams. It replaces multiple tools, simplifies",
      "workflows, and costs just $9.97/month per active user.",
    ],
    author: "Suganthan Mohanadasan",
    handle: "@Suganthanmn",
    avatar: "/image--sc-dntsta--79.png",
    icon: "/icon.svg",
  },
  {
    quote: ["Roam has been incredible for Pro Athlete Community."],
    author: "Chip Paucek",
    handle: "@chippaucek · Pro Athlete Community",
    avatar: "/image--sc-dntsta--80.png",
    icon: "/icon.svg",
  },
  {
    quote: ["As a roam shop can attest it rocks"],
    author: "Jack Zampolin",
    handle: "@jackzampolin",
    avatar: "/image--sc-dntsta--81.png",
    icon: "/icon.svg",
  },
  {
    quote: [
      "Today is the best day to start building a better future.",
      "The best tools for this @roam @NotionHQ @OpenAI and",
      "a lot of hard work! #littletech",
    ],
    author: "Lon Baker",
    handle: "@aught66",
    avatar: "/image--sc-dntsta--82.png",
    icon: "/icon.svg",
  },
  {
    quote: [
      "If you're running a fully remote tech startup (and why",
      "would you do it any other way?), you should look into",
      "Roam. Our team started using it a month ago and the",
      "results have been insane! Greater levels of collaboration.",
    ],
    author: "Sean Mossman",
    handle: "Behold Beverage Intelligence",
    avatar: "/image--sc-dntsta--83.png",
    icon: "/icon-6.svg",
  },
  {
    quote: [
      "Roam... Check it out. Its saved us so much time and",
      "energy. What they have created is truly remarkable.",
      "Howard Lerman and Roam team you have done so well.",
      "Thank you.",
    ],
    author: "Adam Ritter",
    handle: "HomeKynd",
    avatar: "/image--sc-dntsta--84.png",
    icon: "/icon-6.svg",
  },
  {
    quote: [
      "At Deepgram we cannot understate how fundamentally",
      "Roam has shifted our remote culture away from not just",
      "communicating online to actually collaborating in a",
      "shared space. We host all of our All Hands meetings in",
      "Roam. Our product, research & dev teams practically live",
      'in their Roam virtual offices, giving "open door policy" a',
      "WHOLE new meaning. The amount of time spent",
      "organizing our floors & office spaces alone just goes to",
      "show the level of pride & ownership that people feel in",
      "our virtual office and how much time we spend on the",
      "platform. I think all Deepgrammers would agree that we",
      "couldn't innovate as rapidly and freely as we do without",
      "having Roam to keep us all connected.",
    ],
    author: "Hannah Gorelik",
    handle: "Deepgram",
    avatar: "/image--sc-dntsta--85.png",
    icon: "/icon-6.svg",
  },
  {
    quote: [
      "Roam is becoming a big part of how our show teams",
      "around the world connect together.",
    ],
    author: "Duncan Fisher",
    handle: "Cirque du Soleil",
    avatar: "/image--sc-dntsta--86.png",
    icon: "/icon-6.svg",
  },
  {
    quote: [
      'With the ability to "drop in" to your virtual @roam office',
      "@howard and team just bridged real world connections",
      "to digital connections in a way never been done before.",
    ],
    author: "Thomas Cornelius",
    handle: "graph8tc",
    avatar: "/image--sc-dntsta--87.png",
    icon: "/icon.svg",
  },
  {
    quote: [
      "We've been fully remote at BuildEmpire 🎯 for the past 6",
      "months, and we've been using Roam to stay connected",
      "and productive. I have to say, I'm loving it!",
    ],
    author: "Felicity Fiore",
    handle: "BuildEmpire",
    avatar: "/image--sc-dntsta--88.png",
    icon: "/icon-6.svg",
  },
  {
    quote: [
      "Shout out to @roam for providing a great virtual",
      "headquarters platform. At @Voi_Net, we have team",
      "members working daily from Columbia, UK, NYC, CT,",
      "TX, Seattle, Canada, a boat in parts unknown, Denver,",
      "Western MASS and Pittsburgh. The newest feature",
      "offering a scheduling tool is awesome! If you haven't",
      "considered it, I suggest test driving @roam for your",
      "team. It's shockingly cost effective and very user-",
      "friendly.",
    ],
    author: "Gov",
    handle: "@GovVoi",
    avatar: "/image--sc-dntsta--89.png",
    icon: "/icon.svg",
  },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden border-t border-[#ffffff1a]">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="Background"
        src="/div--sc-kbfrbl-.svg"
      />

      <div
        className="relative flex gap-4 py-20 animate-marquee"
        style={{ "--duration": "120s" } as React.CSSProperties}
      >
        {[...Array(3)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex gap-4 shrink-0">
            {testimonials.map((testimonial, index) => (
              <Card
                key={`${groupIndex}-${index}`}
                className="w-[480px] shrink-0 bg-[#0c0c0e] border-[#ffffff1a] rounded-3xl"
              >
                <CardContent className="p-6 flex flex-col gap-5">
                  <div className="flex flex-col gap-0">
                    {testimonial.quote.map((line, lineIndex) => (
                      <p
                        key={lineIndex}
                        className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-6"
                      >
                        {line}
                      </p>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-5 border-t border-[#ffffff1a]">
                    <Avatar className="w-12 h-12">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.author}
                      />
                      <AvatarFallback>
                        {testimonial.author.charAt(0)}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1 flex flex-col">
                      <p className="[font-family:'Inter',Helvetica] font-medium text-white text-lg tracking-[0] leading-6">
                        {testimonial.author}
                      </p>
                      <p className="[font-family:'Inter',Helvetica] font-normal text-[#ffffff80] text-base tracking-[0] leading-6">
                        {testimonial.handle}
                      </p>
                    </div>

                    <img
                      className="w-6 h-6"
                      alt="Social icon"
                      src={testimonial.icon}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
