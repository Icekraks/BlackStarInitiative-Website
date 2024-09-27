import { Button } from "@app/theme/ui/button";
import { ObjectRichtext, ObjectText } from "@app/types/schema";
import { cn } from "@app/utils/utils";
import { SectionHeading } from "@app/components/SectionHeading";
import { useState } from "react";
import React from "react";

export type RichTextProps = ObjectRichtext & {
  sectionIndex: number;
};

const Text: React.FC<RichTextProps> = ({
  title,
  content,
  background,
  sectionIndex,
}) => {
  const backgroundColour = `var(--bsi-${background?.colour || "pure-black"})`;

  return (
    <div
      style={{ background: backgroundColour }}
      className={cn(
        "relative pb-12 lg:pb-16 px-4 md:px-16",
        sectionIndex !== 0 ? "pt-12 lg:pt-16" : ""
      )}
    >
      <div className="flex flex-col w-full items-center max-w-screen-2xl mx-auto">
        {title && (
          <SectionHeading
            sectionIndex={sectionIndex}
            title={title}
            backgroundColour={background?.colour || "black"}
            className="md:px-10 lg:px-16"
          />
        )}
        <div className="flex flex-col">{/** content */}</div>
      </div>
    </div>
  );
};

export default Text;
