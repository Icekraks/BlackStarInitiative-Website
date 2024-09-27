import React from "react";
import { useRouteLoaderData } from "@remix-run/react";
import { LogoProps, RootLoaderData } from "@app/types/global";
import { cn } from "@app/utils/utils";

export const Logo: React.FC<LogoProps> = ({ stacked = false }) => {
  const root = useRouteLoaderData("root") as RootLoaderData;
  const splitTitle = root.navigation.headerTitle.split("#");
  return (
    <div className="flex items-center gap-2">
      <img
        className={cn(
          "w-[3rem] h-[3rem]",
          stacked ? "md:w-[6rem] md:h-[6rem]" : ""
        )}
        src="/icons/BSIIconN.svg"
      />
      <h1
        className={cn(
          "flex flex-col items-start",
          stacked ? "md:flex-col" : "md:flex-row md:items-center md:gap-3"
        )}
      >
        {splitTitle.map((titlePart, index) => {
          if (index === 1) {
            const letterArray = titlePart.split("");
            return (
              <div
                key={index}
                className={cn(
                  "flex gap-[0.475rem] md:gap-[0.7rem] ml-0.5",
                  stacked ? "md:mt-0" : "md:mt-1"
                )}
              >
                {letterArray.map((letter, index) => (
                  <span
                    key={index}
                    className="uppercase text-bsi-red heading-1 text-base md:text-2xl "
                  >
                    {letter}
                  </span>
                ))}
              </div>
            );
          } else {
            return (
              <span
                key={index}
                className="uppercase text-bsi-white heading-2 text-xl md:text-3xl mr-auto md:mr-none"
              >
                {titlePart}
              </span>
            );
          }
        })}
      </h1>
    </div>
  );
};
