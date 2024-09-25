import React from "react";
import type { File, Image } from "@app/types/global";
import { ResponsiveImage } from "@app/components/ResponsiveImage";

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
          <video
            src={content.asset.url}
            className="w-full h-full object-cover"
            controls
          />
        </div>
      )}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
    </div>
  );
};
