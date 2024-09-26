import React from "react";
import type { File, Image } from "@app/types/global";
import { ResponsiveImage } from "@app/components/ResponsiveImage";
import { ResponsiveVideo } from "@app/components/ResponsiveVideo";

type HeroSlideProps = {
  content: File | Image;
};

export const HeroSlide: React.FC<HeroSlideProps> = ({ content }) => {
  return (
    <div className="relative h-full">
      {content._type === "image" && (
        <div className="absolute inset-0">
          <ResponsiveImage
            src={content.asset.url}
            alt={content.asset.altText}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      {content._type === "file" && (
        <div className="absolute inset-0">
          <ResponsiveVideo
            src={content.asset.url}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
    </div>
  );
};
