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
import { SectionHeading } from "@app/components/SectionHeading";

export type SocialSectionProps = ObjectSocialSection & {
  sectionIndex: number;
};

const SocialSection: React.FC<SocialSectionProps> = ({
  title,
  background,
  sectionIndex,
}) => {
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

  return (
    <div
      className={cn(
        "relative pb-12 lg:pb-16 2xl:pb-20 px-4 md:px-16",
        sectionIndex !== 0 ? "pt-12 lg:pt-16 2xl:pt-20" : "",
        backgroundColour
      )}
    >
      <div className="flex flex-col w-full items-center max-w-screen-2xl mx-auto">
        <SectionHeading
          sectionIndex={sectionIndex}
          title={title}
          backgroundColour={background?.colour || "black"}
        />

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
