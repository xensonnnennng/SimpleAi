import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonials = [
  {
    name: "Barry Byrne",
    role: "Sales Director, FCR Media, Dublin",
    avatar: "..//image--sc-ggwzva--5.png",
    quote: [
      "If you wanted to take Roam away from me, you'd have to pry it out of my",
      "cold, dead hands… Roam is the glue that keeps us together. Every",
      "morning, we see it, we feel it. Everyone's there together. That's us. That's",
      "who we are. We're in it together. I was cynical about it but it's",
      "irreplaceable. You cannot beat it. In a nut shell, I went from skeptic right",
      "through to evangelist.",
    ],
  },
  {
    name: "Deborah Harris",
    role: "Co-Founder, The Grow CFO Co, Brisbane",
    avatar: "..//image--sc-ggwzva--4.png",
    quote: [
      "Our clients expect us to be leading-edge and Roam is at the forefront of",
      "innovation. So it's always a talking piece and allows us to seamlessly",
      "have an innovation conversation with our clients. They know that we're a",
      "part of the AI community and now they can see this in action so that's",
      "really fantastic.",
    ],
  },
  {
    name: "Marcel Fairbairn",
    role: "Founder & CEO, GearSource, West Palm Beach",
    avatar: "..//image--sc-ggwzva--3.png",
    quote: [
      "There are two applications in our business that you'd have to kill me and",
      "peel them out of my bleeding hands. Roam is one of them. Roam has not",
      "only changed our business, it has changed the people in our business,",
      "how we conduct business, everyone's attitudes toward the business…",
      "what it is to operate a remote business. Roam is on another level. It is by",
      "far my favorite app in the world. I love it that much.",
    ],
  },
  {
    name: "Scott Gifis",
    role: "CEO of NoFraud, New York",
    avatar: "..//image--sc-ggwzva--2.png",
    quote: [
      "I went from a world where my calendar was jam packed every single day",
      "with recurring meetings and people scheduling things three weeks out to",
      "get a 5 minute conversation done, which is just not the way that",
      "business needs to move. Now, my average meeting time is 7 minutes",
      "and I've got huge chunks of time on my calendar open to get work done.",
    ],
  },
  {
    name: "Krish Jagirdar",
    role: "Co-Founder, Internet Game, New York",
    avatar: "..//image--sc-ggwzva--1.png",
    quote: [
      "There are a lot of things I love about the Roam platform. We are a fully distributed company which means we often lack connections and the",
      "ability for quick conversations. Everything's being scheduled with these",
      "long 30-minute meetings. You lack the togetherness of being able to see",
      "a bunch of people around you that are all working on a shared mission.",
      "Utilizing Roam allows for these beautiful moments where you're quickly",
      "saying hello to someone, or even talking about something that's not",
      "related to work. Seeing people just grinding next to you. Allowing for that",
      "feeling of connection even though you are really all around the country",
      "and all around the world.",
    ],
  },
  {
    name: "Dave Riggs",
    role: "Co-Founder, Apex Growth, Los Angeles",
    avatar: "..//image--sc-ggwzva-.png",
    quote: [
      "Before we had Roam, a lot of times we would get caught up in these",
      "endless Slack discussions, where we were just going back-and-forth",
      "about all kinds of things and it was taking way too long. Now when that",
      "happens, we just hop into each other's Roam offices and have a quick",
      "conversation. It usually takes 3 or 4 minutes to eliminate what would",
      "have been an energy sucking 10 or 15-minute Slack back-and-forth. I've",
      "really enjoyed the spontaneity and the accessibility of just being able to",
      "talk to people whenever I want with Roam. I think it's great.",
    ],
  },
];

export const GallerySection = (): JSX.Element => {
  return (
    <section className="w-full border-t border-[#ffffff1a]">
      <div className="grid grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="rounded-none border-0 border-r border-b border-[#ffffff1a] last:border-r-0 [&:nth-child(2n)]:border-r-0 bg-transparent"
          >
            <CardContent className="p-20 flex flex-col gap-4">
              <Avatar className="w-[72px] h-[72px] rounded-[16000px]">
                <AvatarImage
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="object-cover"
                />
              </Avatar>

              <div className="flex flex-col gap-0">
                <h3 className="font-medium text-[22px] leading-7 text-white [font-family:'Inter',Helvetica]">
                  {testimonial.name}
                </h3>
                <p className="font-medium text-base leading-6 text-[#ffffff80] [font-family:'Inter',Helvetica]">
                  {testimonial.role}
                </p>
              </div>

              <div className="flex flex-col">
                {testimonial.quote.map((line, lineIndex) => (
                  <p
                    key={lineIndex}
                    className="font-normal text-base leading-6 text-[#ffffff80] [font-family:'Inter',Helvetica]"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="relative w-full h-[704px] overflow-hidden [background:radial-gradient(50%_50%_at_50%_50%,rgba(30,30,36,1)_0%,rgba(12,12,14,1)_100%)]">
        <div className="w-full h-full flex overflow-hidden">
          <div className="mt-[162px] w-[1440px] h-[1872px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.3)_71%,rgba(0,0,0,0)_71%),radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.3)_71%,rgba(0,0,0,0)_71%),radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.3)_71%,rgba(0,0,0,0)_71%),radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.3)_71%,rgba(0,0,0,0)_71%)]" />
        </div>
      </div>
    </section>
  );
};
