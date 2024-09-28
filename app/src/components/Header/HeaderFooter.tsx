import React from "react";
import { Button } from "@app/theme/ui/button";
import { Facebook, Instagram, Mail, Twitter, Youtube } from "lucide-react";
import { Link } from "@remix-run/react";
import { SettingsSocial } from "@app/types/schema";
import { PatreonIcon } from "@app/components/Icons/Patreon";
import { DiscordIcon } from "@app/components/Icons/Discord";
import { YoutubeIcon } from "@app/components/Icons/Youtube";
import { TwitterIcon } from "@app/components/Icons/Twitter";
import { TiktokIcon } from "@app/components/Icons/Tiktok";
import { FacebookIcon } from "@app/components/Icons/Facebook";
import { InstagramIcon } from "@app/components/Icons/Instagram";

type HeaderFooterProps = {
  social: SettingsSocial;
};

export const HeaderFooter: React.FC<HeaderFooterProps> = ({ social }) => {
  return (
    <>
      {social.socialMedia?.map((socialMedia, index) => {
        return (
          <Button
            key={index}
            className="fill-bsi-red hover:fill-primary"
            variant="ghost"
            size="icon"
            asChild
          >
            <Link to={socialMedia.url} target="_blank" rel="noreferrer">
              {socialMedia.name === "facebook" && (
                <FacebookIcon className="w-[1.5rem] h-[1.5rem] fill-bsi-red" />
              )}
              {socialMedia.name === "twitter" && (
                <TwitterIcon className="w-[1.5rem] h-[1.5rem] fill-bsi-red stroke-bsi-black" />
              )}
              {socialMedia.name === "instagram" && (
                <InstagramIcon className="w-[1.5rem] h-[1.5rem] fill-bsi-red" />
              )}
              {socialMedia.name === "youtube" && (
                <YoutubeIcon className="w-[1.5rem] h-[1.5rem] fill-bsi-red stroke-bsi-black" />
              )}
              {socialMedia.name === "patreon" && (
                <PatreonIcon className="w-[1.5rem] h-[1.5rem] fill-bsi-red" />
              )}
              {socialMedia.name === "discord" && (
                <DiscordIcon className="w-[1.5rem] h-[1.5rem] fill-bsi-red stroke-bsi-red" />
              )}
              {socialMedia.name === "tiktok" && (
                <TiktokIcon className="w-[1.5rem] h-[1.5rem] fill-bsi-red " />
              )}
            </Link>
          </Button>
        );
      })}
    </>
  );
};
