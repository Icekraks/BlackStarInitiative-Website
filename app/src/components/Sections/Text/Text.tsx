import { Button } from "@app/theme/ui/button";
import { ObjectText } from "@app/types/schema";
import { cn } from "@app/utils/utils";
import { SectionHeading } from "@app/components/SectionHeading";
import { useState } from "react";

export type TextProps = ObjectText & {
  sectionIndex: number;
};

const Text: React.FC<TextProps> = ({
  title,
  description,
  background,
  sectionIndex,
}) => {
  const [readMore, setReadMore] = useState(false);
  const toggleExpand = () => {
    setReadMore(!readMore);
  };

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
        <SectionHeading
          sectionIndex={sectionIndex}
          title={title}
          backgroundColour={background?.colour || "black"}
          className="md:px-10 lg:px-16"
        />
        <div className="flex flex-col">
          {description && (
            <p className="text-bsi-white px-4 md:px-10 lg:px-16 w-full">
              <span className="block md:hidden">
                {readMore
                  ? description
                  : `${description.split(" ").slice(0, 50).join(" ")}...`}{" "}
                {/* Set word limit to 50 */}
              </span>

              <span className="hidden md:block">{description}</span>
            </p>
          )}

          {/* Show "Read More" button only on mobile (hidden on medium and larger screens) */}
          <div className="md:hidden">
            <Button
              variant="link"
              className="mt-2 md:hidden underline w-auto"
              onClick={toggleExpand}
            >
              {readMore ? "Read Less" : "Read More"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Text;
