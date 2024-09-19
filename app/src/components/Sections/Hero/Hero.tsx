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
  pretitle,
  subtitle,
  description,
  file,
  image,
  showScrollDown = false,
}) => {
  return (
    <>
      <div className="relative my-12 lg:my-16 2xl:my-24 px-8 lg:px-16 h-[100dvh] max-h-[750px] lg:max-h-[1000px]">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-x-[10rem] gap-y-[2.5rem] max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-3">
            <p>
              {pretitle && (
                <span className="text-[#b58900] font-bold">{pretitle}</span>
              )}
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-[#002b36]">
              {title}
            </h1>
            <h4 className="text-[#cb4b16]">{subtitle}</h4>
            {description && (
              <p className="text-primary max-w-[450px]">
                {description.replace(
                  "{x}",
                  `${new Date().getFullYear() - 2020}`
                )}
              </p>
            )}
            <div>
              {file && (
                <Button variant="default" asChild>
                  <a href={file.asset.url} download target="_blank">
                    Get my CV
                  </a>
                </Button>
              )}
            </div>
          </div>
          {image && image.asset && (
            <ResponsiveImage
              className="w-[375px] rounded-lg overflow-hidden"
              src={image.asset.url}
              alt={image.asset.altText}
            />
          )}
        </div>
        {showScrollDown && (
          <div
            onClick={() => {
              const element = document.querySelector("#section-1");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="hidden lg:block bottom-8 left-[50%] translate-x-[50%] absolute animate-bounce cursor-pointer"
          >
            <Mouse size={32} color="#002b36" />
            <ChevronsDown size={32} color="#002b36" />
          </div>
        )}
      </div>
    </>
  );
};

export default Hero;
