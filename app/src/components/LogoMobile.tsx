import React from "react";
import { Link as RemixLink, useRouteLoaderData } from "@remix-run/react";
import { RootLoaderData, LogoProps } from "@app/types/global";
import { cn } from "@app/utils/utils";

export const LogoMobile: React.FC<LogoProps> = () => {
  const root = useRouteLoaderData("root") as RootLoaderData;
  const splitTitle = root.navigation.headerTitle.split("#");
  return (
    <RemixLink to="/">
      <div className="flex items-center gap-2">
        <img className="w-[3rem] h-[3rem]" src="/icons/BSIIconN.svg" />
        <h1 className={cn("flex flex-col items-start")}>
          {splitTitle.map((titlePart, index) => {
            if (index === 1) {
              const letterArray = titlePart.split("");
              return (
                <div key={index} className={cn("flex gap-[0.475rem] ml-0.5")}>
                  {letterArray.map((letter, index) => (
                    <span
                      key={index}
                      className="uppercase text-bsi-red heading-1 text-base"
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
                  className="uppercase text-bsi-white heading-2 text-xl mr-auto"
                >
                  {titlePart}
                </span>
              );
            }
          })}
        </h1>
      </div>
    </RemixLink>
  );
};
