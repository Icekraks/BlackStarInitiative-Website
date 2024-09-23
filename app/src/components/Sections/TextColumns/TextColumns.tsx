import { ObjectTextColumns } from "@app/types/schema";
import { cn } from "@app/utils/utils";

export type TextColumnProps = ObjectTextColumns & {
  sectionIndex: number;
};

const TextColumns: React.FC<TextColumnProps> = ({
  title,
  columns,
  background,
  sectionIndex,
}) => {
  const splitTitle = title.split("#");
  const backgroundColour = `var(--bsi-${background?.colour || "pure-black"})`;
  return (
    <div
      style={{ background: backgroundColour }}
      className={cn(
        "relative pb-12 lg:pb-16 2xl:pb-24 px-4 md:px-16",
        sectionIndex !== 0 ? "pt-12 lg:pt-16 2xl:pt-24" : ""
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
                  index === 1 ? "text-bsi-red" : "text-bsi-white"
                )}
              >
                {titlePart}
              </span>
            ))}
          </h2>
        )}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-6">
          {columns?.map((column, index) => {
            const splitColumnTitle = column.title.split("#");
            return (
              <div key={index}>
                <h3 className="heading-2 text-bsi-red text-xl lg:text-2xl font-bold mb-4 w-full">
                  {splitColumnTitle.map((titlePart, index) => (
                    <span
                      key={index}
                      className={cn(
                        "heading-2",
                        index === 1 ? "text-bsi-red" : "text-bsi-white"
                      )}
                    >
                      {titlePart}
                    </span>
                  ))}
                </h3>
                <p className="text-bsi-white text-base lg:text-lg">
                  {column.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TextColumns;
