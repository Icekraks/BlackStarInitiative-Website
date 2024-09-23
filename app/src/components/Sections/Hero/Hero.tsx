import React from "react";
import type { ObjectHero } from "@app/types/schema";
import { ResponsiveImage } from "@app/components/ResponsiveImage";
import { Button } from "@app/theme/ui/button";
import { ChevronsDown, Mouse } from "lucide-react";

type HeroProps = ObjectHero & {
  sectionIndex: number;
  showScrollDown?: boolean;
};

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  image,
  showScrollDown = false,
}) => {
  return (
    <>
      <div className="relative  h-[100dvh] max-h-[750px] lg:max-h-[1000px]">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center">
          <div className="absolute inset-0">
            {image && image.asset && (
              <ResponsiveImage
                className="w-full h-full object-cover"
                src={image.asset.url}
                alt={image.asset.altText}
              />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
        </div>
        <div className="px-4 flex w-full flex-col items-center justify-center gap-3 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col">
            <h1 className="heading-1 text-2xl md:4xl lg:text-6xl text-bsi-red">
              {title}
            </h1>
            <h4 className="heading-2 text-xl md:2xl lg:text-4xl text-bsi-white">
              {subtitle}
            </h4>
          </div>
        </div>
        {showScrollDown && (
          <div
            onClick={() => {
              const element = document.querySelector("#section-1");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="block bottom-8 left-[50%] translate-x-[50%] absolute animate-bounce cursor-pointer"
          >
            <Mouse size={32} color="var(--bsi-white)" />
            <ChevronsDown size={32} color="var(--bsi-white)" />
          </div>
        )}
      </div>
    </>
  );
};

export default Hero;
