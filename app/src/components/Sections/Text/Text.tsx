import { Button } from "@app/theme/ui/button";
import { ObjectText } from "@app/types/schema";
import { cn } from "@app/utils/utils";
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
  const splitTitle = title.split("#");

  const [readMore, setReadMore] = useState(false);
  const toggleExpand = () => {
    setReadMore(!readMore);
  };

  const backgroundColour = `var(--bsi-${background?.colour || "pure-black"})`;

  return (
    <div
      style={{ background: backgroundColour }}
      className={cn(
        "relative pb-12 lg:pb-16 2xl:pb-24 px-4 md:px-16",
        sectionIndex !== 0 ? "pt-12 lg:pt-16 2xl:pt-24" : ""
      )}
    >
      <div className="flex flex-col w-full items-center max-w-screen-2xl mx-auto">
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
                    : background?.colour === "white" ||
                      background?.colour === "pure-white"
                    ? "text-bsi-black"
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
                    ? "text-bsi-red"
                    : background?.colour === "white" ||
                      background?.colour === "pure-white"
                    ? "text-bsi-black"
                    : "text-bsi-white"
                )}
              >
                {titlePart}
              </span>
            ))}
          </h2>
        )}
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
