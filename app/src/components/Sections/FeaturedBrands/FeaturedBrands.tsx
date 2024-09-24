import React from "react";
import { ObjectFeaturedBrands } from "@app/types/schema";
import { cn } from "@app/utils/utils";

type FeaturedBrandsProps = ObjectFeaturedBrands & {
  sectionIndex: number;
};

const FeaturedBrands: React.FC<FeaturedBrandsProps> = ({
  title,
  background,
  featuredBrand,
  sectionIndex,
}) => {
  const splitTitle = title.split("#");
  const backgroundColour = `var(--bsi-${background?.colour || "pure-black"})`;

  return (
    <div
      style={{ background: backgroundColour }}
      className={cn(
        "relative pb-12 lg:pb-16 2xl:pb-24 px-4 md:px-16",
        sectionIndex !== 0 ? "pt-12 lg:pt-16 2xl:pt-24" : ""
      )}
    >
      <div className="flex flex-col w-full items-center max-w-[1440px] mx-auto">
        {sectionIndex === 0 ? (
          <h1 className="heading-2 text-bsi-white text-2xl lg:text-4xl font-bold mb-5 lg:mb-10 w-full text-center">
            {splitTitle.map((titlePart, index) => (
              <span
                key={index}
                className={cn(
                  "heading-2 text-2xl lg:text-4xl font-bold mb-4 w-full",
                  index === 1
                    ? background?.colour === "red"
                      ? "text-bsi-black"
                      : "text-bsi-red"
                    : background?.colour === "white" ||
                      background?.colour === "pure-white"
                    ? "text-bsi-black"
                    : "text-bsi-white"
                )}
              >
                {titlePart}
              </span>
            ))}
          </h1>
        ) : (
          <h2 className="heading-2 text-bsi-white text-2xl lg:text-4xl font-bold mb-5 lg:mb-10 w-full text-center">
            {splitTitle.map((titlePart, index) => (
              <span
                key={index}
                className={cn(
                  "heading-2 text-2xl lg:text-4xl font-bold mb-4 w-full",
                  index === 1
                    ? "text-bsi-red"
                    : background?.colour === "white" ||
                      background?.colour === "pure-white"
                    ? "text-bsi-black"
                    : "text-bsi-white"
                )}
              >
                {titlePart}
              </span>
            ))}
          </h2>
        )}

        {featuredBrand?.length && (
          <div className="flex flex-col lg:flex-row lg:gap-12">
            {featuredBrand.map((brand, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className="flex w-[10rem] h-[10rem] lg:w-[12rem] lg:h-[12rem] xl:w-[18rem] xl:h-[18rem]"
                  dangerouslySetInnerHTML={{ __html: brand.image }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedBrands;
