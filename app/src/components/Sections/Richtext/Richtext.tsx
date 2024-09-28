import React from "react";
import { ObjectRichtext } from "@app/types/schema";
import { cn } from "@app/utils/utils";
import { SectionHeading } from "@app/components/SectionHeading";
import { useContent } from "@app/hooks/useContent";

export type RichTextProps = ObjectRichtext & {
  sectionIndex: number;
};

const Richtext: React.FC<RichTextProps> = ({
  title,
  content,
  sectionIndex,
  hideTitle = false,
}) => {
  const { formatContent } = useContent();
  const formattedContent = formatContent(content);

  return (
    <div
      className={cn(
        "relative pb-12 lg:pb-16 px-4 md:px-16 bg-bsi-pure-black",
        sectionIndex !== 0 ? "pt-12 lg:pt-16" : ""
      )}
    >
      <div className="flex flex-col w-full items-center max-w-screen-2xl mx-auto">
        {title && !hideTitle && (
          <SectionHeading
            sectionIndex={sectionIndex}
            title={title}
            backgroundColour="pure-black"
            className="md:px-10 lg:px-16"
          />
        )}
        <div className="flex flex-col max-w-[800px]">{formattedContent}</div>
      </div>
    </div>
  );
};

export default Richtext;
