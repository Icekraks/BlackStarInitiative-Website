import React from "react";
import { ObjectFeaturedBrands } from "@app/types/schema";
import { cn } from "@app/utils/utils";
import { SectionHeading } from "@app/components/SectionHeading";

type FeaturedBrandsProps = ObjectFeaturedBrands & {
  sectionIndex: number;
};

const FeaturedBrands: React.FC<FeaturedBrandsProps> = ({
  title,
  background,
  featuredBrand,
  sectionIndex,
}) => {
  const backgroundColour = `var(--bsi-${background?.colour || "pure-black"})`;
  console.log(backgroundColour);
  return (
    <div
      style={{ background: backgroundColour }}
      className={cn(
        "relative pb-12 lg:pb-16 2xl:pb-24 px-4 md:px-16",
        sectionIndex !== 0 ? "pt-12 lg:pt-16 2xl:pt-24" : ""
      )}
    >
      <div className="flex flex-col w-full items-center max-w-screen-2xl mx-auto">
        <SectionHeading
          sectionIndex={sectionIndex}
          title={title}
          backgroundColour={background?.colour || "black"}
        />

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
