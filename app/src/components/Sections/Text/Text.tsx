import { ObjectText } from "@app/types/schema";
import { cn } from "@app/utils/utils";

export type TextProps = ObjectText & {
  sectionIndex: number;
};

const Text: React.FC<TextProps> = ({
  title,
  description,
  file,
  fileLabel,
  cta,
  sectionIndex,
}) => {
  const splitTitle = title.split("#");
  return (
    <div
      className={cn(
        "relative pb-12 lg:pb-16 2xl:pb-24 px-5 md:px-16 bg-bsi-pure-black",
        sectionIndex !== 0 ? "pt-12 lg:pt-16 2xl:pt-24" : ""
      )}
    >
      <div className="flex flex-col w-full items-center max-w-[1440px] mx-auto">
        {sectionIndex === 0 ? (
          <h1 className="heading-2 text-bsi-white text-2xl lg:text-4xl font-bold mb-5 w-full text-center">
            {splitTitle.map((titlePart, index) => (
              <span
                key={index}
                className={cn(
                  "heading-2 text-bsi-white text-2xl lg:text-4xl font-bold mb-4 w-full",
                  index === 1 ? "text-bsi-red" : "text-bsi-grey"
                )}
              >
                {titlePart}
              </span>
            ))}
          </h1>
        ) : (
          <h2 className="heading-2 text-bsi-white text-2xl lg:text-4xl font-bold mb-5 w-full text-center">
            {splitTitle.map((titlePart, index) => (
              <span
                key={index}
                className={cn(
                  "heading-2 text-bsi-white text-2xl lg:text-4xl font-bold mb-4 w-full",
                  index === 1 ? "text-bsi-red" : "text-bsi-grey"
                )}
              >
                {titlePart}
              </span>
            ))}
          </h2>
        )}
        {description && (
          <p className="text-bsi-white px-4 md:px-10 lg:px-16 mb-8 w-full">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default Text;
