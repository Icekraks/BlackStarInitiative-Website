import React from "react";
import { ContactCard as ContactCardType } from "@app/types/schema";
import { Link } from "@remix-run/react";
import { Button } from "@app/theme/ui/button";
import { cn } from "@app/utils/utils";

type ContactCardProps = ContactCardType & {
  backgroundColour: string;
};

export const ContactCard: React.FC<ContactCardProps> = ({
  title,
  description,
  backgroundColour = "black",
  link,
}) => {
  return (
    <div
      className={cn(
        "p-4 rounded-md max-w-[430px]",
        backgroundColour === "black" ||
          backgroundColour === "pure-black" ||
          backgroundColour === "red"
          ? "bg-bsi-white"
          : "bg-bsi-black"
      )}
    >
      <h3
        className={cn(
          "heading-2",
          backgroundColour === "black" ||
            backgroundColour === "pure-black" ||
            backgroundColour === "red"
            ? "text-bsi-black"
            : "text-bsi-white"
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          backgroundColour === "black" ||
            backgroundColour === "pure-black" ||
            backgroundColour === "red"
            ? "text-bsi-black"
            : "text-bsi-white"
        )}
      >
        {description}
      </p>
      {link && link.link && link.title && (
        <Button
          asChild
          variant={
            backgroundColour === "black" ||
            backgroundColour === "pure-black" ||
            backgroundColour === "red"
              ? "linkInvert"
              : "link"
          }
          className="underline pl-0"
        >
          <Link to={link.link}>{link.title}</Link>
        </Button>
      )}
    </div>
  );
};
