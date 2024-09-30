import { ObjectContact } from "@app/types/schema";
import { cn } from "@app/utils/utils";
import { SectionHeading } from "@app/components/SectionHeading";
import { ContactCard } from "@app/components/Sections/Contact/ContactCard";

export type ContactProps = ObjectContact & {
  sectionIndex: number;
};

const Contact: React.FC<ContactProps> = ({
  title,
  description,
  background,
  contactCard,
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

        <div className="flex flex-col max-w-[800px]">
          {description && (
            <p
              className={cn(
                "w-full",
                background?.colour === "black" ||
                  background?.colour === "pure-black" ||
                  background?.colour === "red" ||
                  background?.colour === "grey"
                  ? "text-bsi-white"
                  : "text-bsi-black"
              )}
            >
              {description}
            </p>
          )}
        </div>

        <div className="flex flex-col max-w-[800px] gap-4 mt-12">
          {contactCard &&
            contactCard.map((card, index) => {
              return <ContactCard key={index} {...card} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
