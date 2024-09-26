import { SectionsTypes } from "@app/types/global";
import { ObjectSections } from "@app/types/schema";
import Hero from "@app/components/Sections/Hero/Hero";
import Text from "@app/components/Sections/Text/Text";
import Contact from "@app/components/Sections/Contact/Contact";
import { cn } from "@app/utils/utils";
import TextColumns from "@app/components/Sections/TextColumns/TextColumns";
import SocialSection from "@app/components/Sections/SocialSection/SocialSection";
import FeaturedBrands from "@app/components/Sections/FeaturedBrands/FeaturedBrands";
import CTA from "@app/components/Sections/CTA/CTA";

type Props = {
  sections: ObjectSections;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sectionsComponents: any = {
  Hero,
  Text,
  Contact,
  TextColumns,
  SocialSection,
  FeaturedBrands,
  CTA,
};

//This component is responsible for rendering the sections of the page
const Sections: React.FC<Props> = ({ sections }) => {
  return sections ? (
    <>
      {sections?.map((section: SectionsTypes, index: number) => {
        const SectionName: string = section._type.replace("object", "");
        const SectionComponent = sectionsComponents[SectionName];

        if (!SectionComponent) return null;
        return (
          <section
            key={section._key}
            id={`section-${index}`}
            data-section-name={SectionName?.toLowerCase()}
            className={cn(index !== 0 && "scroll-mt-10 md:scroll-mt-0")}
          >
            <SectionComponent
              name={SectionName}
              {...section}
              sectionIndex={index}
            />
          </section>
        );
      })}
    </>
  ) : null;
};

export default Sections;
