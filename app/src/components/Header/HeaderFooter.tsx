import { SocialMedia } from "@app/types/global";
import React from "react";
import { Button } from "@app/theme/ui/button";
import { Github, Linkedin, Mail, Youtube } from "lucide-react";
import { Link } from "@remix-run/react";

type HeaderFooterProps = {
  social: SocialMedia;
};

export const HeaderFooter: React.FC<HeaderFooterProps> = ({ social }) => {
  return (
    <>
      {social.email && (
        <Button variant="outline" size="icon" asChild>
          <Link to={`mailto:${social.email}`} target="_blank" rel="noreferrer">
            <Mail />
          </Link>
        </Button>
      )}
      {social.linkedin && (
        <Button variant="outline" size="icon" asChild>
          <Link to={social.linkedin} target="_blank" rel="noreferrer">
            <Linkedin />
          </Link>
        </Button>
      )}
      {social.github && (
        <Button variant="outline" size="icon" asChild>
          <Link to={social.github} target="_blank" rel="noreferrer">
            <Github />
          </Link>
        </Button>
      )}
      {social.youtube && (
        <Button variant="outline" size="icon" asChild>
          <Link to={social.youtube} target="_blank" rel="noreferrer">
            <Youtube />
          </Link>
        </Button>
      )}
    </>
  );
};
