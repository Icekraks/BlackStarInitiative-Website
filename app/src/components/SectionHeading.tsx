import React from "react";
import { cn } from "@app/utils/utils";

type SectionHeadingProps = {
  title: string;
  backgroundColour: string;
  sectionIndex: number;
  className?: string;
};

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  backgroundColour,
  sectionIndex,
  className,
}) => {
  const splitTitle = title.split("#");

  return (
    <>
      {sectionIndex === 0 ? (
        <h1
          className={cn(
            "heading-2 text-bsi-white text-2xl lg:text-4xl font-bold mb-5 lg:mb-10 w-full text-center",
            className
          )}
        >
          {splitTitle.map((titlePart, index) => (
            <span
              key={index}
              className={cn(
                "heading-2 text-2xl lg:text-4xl font-bold mb-4 w-full",
                index === 1
                  ? backgroundColour === "red"
                    ? "text-bsi-black"
                    : "text-bsi-red"
                  : backgroundColour === "white" ||
                    backgroundColour === "pure-white"
                  ? "text-bsi-black"
                  : "text-bsi-white"
              )}
            >
              {titlePart}
            </span>
          ))}
        </h1>
      ) : (
        <h2
          className={cn(
            "heading-2 text-bsi-white text-2xl lg:text-4xl font-bold mb-5 lg:mb-10 w-full text-center",
            className
          )}
        >
          {splitTitle.map((titlePart, index) => (
            <span
              key={index}
              className={cn(
                "heading-2 text-2xl lg:text-4xl font-bold mb-4 w-full",
                index === 1
                  ? backgroundColour === "red"
                    ? "text-bsi-black"
                    : "text-bsi-red"
                  : backgroundColour === "white" ||
                    backgroundColour === "pure-white"
                  ? "text-bsi-black"
                  : "text-bsi-white"
              )}
            >
              {titlePart}
            </span>
          ))}
        </h2>
      )}
    </>
  );
};
