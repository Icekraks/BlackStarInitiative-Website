import React from "react";
import { Button } from "@app/theme/ui/button";
import { ObjectSocialSection } from "@app/types/schema";
import { cn } from "@app/utils/utils";
import { RootLoaderData } from "@app/types/global";
import { Link, useRouteLoaderData } from "@remix-run/react";
import { DiscordIcon } from "@app/components/Icons/Discord";
import { YoutubeIcon } from "@app/components/Icons/Youtube";
import { PatreonIcon } from "@app/components/Icons/Patreon";
import { TwitterIcon } from "@app/components/Icons/Twitter";

export type SocialSectionProps = ObjectSocialSection & {
  sectionIndex: number;
};

const SocialSection: React.FC<SocialSectionProps> = ({
  title,
  background,
  sectionIndex,
}) => {
  const splitTitle = title.split("#");

  const root = useRouteLoaderData("root") as RootLoaderData;

  const keys = Object.keys(root.social) as Array<keyof typeof SocialIcons>;

  const SocialIcons = {
    discord: (
      <DiscordIcon
        className="w-[1.25rem] lg:w-[3rem] h-[1.25rem] lg:h-[3rem]"
        fill="currentColor"
      />
    ),
    youtube: (
      <YoutubeIcon
        className="w-[1.25rem] lg:w-[3rem] h-[1.25rem] lg:h-[3rem]"
        fill="currentColor"
      />
    ),
    patreon: (
      <PatreonIcon
        className="w-[1.25rem] lg:w-[3rem] h-[1.25rem] lg:h-[3rem]"
        fill="currentColor"
      />
    ),
    twitter: (
      <TwitterIcon
        className="w-[1.25rem] lg:w-[3rem] h-[1.25rem] lg:h-[3rem]"
        fill="currentColor"
      />
    ),
  };

  const backgroundColour = `bg-bsi-${background?.colour || "pure-black"}`;

  console

  return (
    <div
      className={cn(
        "relative pb-12 lg:pb-16 2xl:pb-24 px-4 md:px-16",
        sectionIndex !== 0 ? "pt-12 lg:pt-16 2xl:pt-24" : "",
        backgroundColour
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
                    ? background?.colour === "red"
                      ? "text-bsi-black"
                      : "text-bsi-red"
                    : "text-bsi-white"
                )}
              >
                {titlePart}
              </span>
            ))}
          </h2>
        )}

        <div className="flex gap-4">
          {keys.map((key, index) => {
            return (
              <Button
                key={index}
                asChild
                variant="default"
                size="iconLarge"
                className="rounded-full"
              >
                <Link to={root.social?.[key]} target="_blank">
                  {SocialIcons[key as keyof typeof SocialIcons]}
                </Link>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SocialSection;
