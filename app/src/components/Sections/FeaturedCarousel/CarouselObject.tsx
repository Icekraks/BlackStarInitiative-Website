import React from "react";
import { CarouselObject as CarouselObjecType } from "@app/types/schema";
import { ResponsiveImage } from "@app/components/ResponsiveImage";
import { Link } from "@remix-run/react";

export const CarouselObject: React.FC<CarouselObjecType> = ({
  title,
  image,
  toggleEmbed,
  url,
}) => {
  return (
    <div className="h-full">
      <Link to={url || "/"} target="_blank" className="block h-full">
        {image ? (
          <ResponsiveImage
            src={image.asset.url}
            alt={image.asset.altText}
            aspectRatio={0.75}
          />
        ) : (
          <div> null image</div>
        )}
      </Link>
    </div>
  );
};
