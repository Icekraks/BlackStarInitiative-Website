import React from "react";
import { Button } from "@app/theme/ui/button";
import { ObjectCTA } from "@app/types/schema";
import { cn } from "@app/utils/utils";
import { SectionHeading } from "@app/components/SectionHeading";
import { useState } from "react";
import { ResponsiveImage } from "@app/components/ResponsiveImage";
import useLink from "@app/hooks/useLink";
import { Link } from "@remix-run/react";

export type CTAProps = ObjectCTA & {
  sectionIndex: number;
};

//CTA Section
const CTA: React.FC<CTAProps> = ({
  title,
  description,
  image,
  background,
  callToAction,
  sectionIndex,
  leftImage,
}) => {
  const { urlResolver } = useLink();
  const [readMore, setReadMore] = useState(false);
  const toggleExpand = () => {
    setReadMore(!readMore);
  };

  const backgroundColour = `var(--bsi-${background?.colour || "pure-black"})`;

  const resolvedUrl = callToAction ? urlResolver(callToAction) : null;

  return (
    <div style={{ background: backgroundColour }} className="relative">
      <div
        className={cn(
          "flex flex-col w-full items-start mx-auto",
          leftImage ? "lg:flex-row" : "lg:flex-row-reverse"
        )}
      >
        <div className="relative w-full lg:w-1/2 pb-[min(60%,720px)]">
          <div className="absolute inset-0">
            {image ? (
              <ResponsiveImage
                src={image.asset.url}
                alt={image.asset.altText}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-bsi-black"></div>
            )}
          </div>
        </div>
        <div
          className={cn(
            "w-full lg:w-1/2 max-w-[720px] px-4 pb-12 lg:pb-16",
            sectionIndex !== 0 ? "pt-12 lg:pt-16" : ""
          )}
        >
          <SectionHeading
            sectionIndex={sectionIndex}
            title={title}
            backgroundColour={background?.colour || "black"}
            className="md:px-10 lg:px-16"
          />
          <div className="flex flex-col mb-4 lg:mb-12">
            {description && (
              <p className="text-bsi-white px-4 md:px-10 lg:px-16 w-full">
                <span className="block md:hidden">
                  {readMore
                    ? description
                    : `${description
                        .split(" ")
                        .slice(0, 20)
                        .join(" ")}...`}{" "}
                </span>

                <span className="hidden md:block">{description}</span>
              </p>
            )}

            {/* Show "Read More" button only on mobile (hidden on medium and larger screens) */}
            <div className="md:hidden">
              <Button
                variant="link"
                className="mt-2 md:hidden underline w-auto"
                onClick={toggleExpand}
              >
                {readMore ? "Read Less" : "Read More"}
              </Button>
            </div>
          </div>
          {resolvedUrl && (
            <div className="flex px-4 md:px-10 lg:px-16">
              <Button variant="tertiary" size="default" asChild>
                <Link
                  to={resolvedUrl.url}
                  target={resolvedUrl.external ? "_blank" : ""}
                >
                  {resolvedUrl.label}
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CTA;
