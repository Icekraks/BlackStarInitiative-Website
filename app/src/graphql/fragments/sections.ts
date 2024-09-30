import { HERO_SECTION_FRAGMENT } from "./sections/objectHero";
import { TEXT_SECTION_FRAGMENT } from "./sections/objectText";
import { TEXT_COLUMNS_SECTION_FRAGMENT } from "./sections/objectTextColumns";
import { SOCIAL_SECTION_FRAGMENT } from "./sections/objectSocialSection";
import { FEATURED_BRANDS_SECTION_FRAGMENT } from "./sections/objectFeaturedBrands";
import { CTA_SECTION_FRAGMENT } from "./sections/objectCTA";
import { RICHTEXT_SECTION_FRAGMENT } from "./sections/objectRichtext";
import { CONTACT_SECTION_FRAGMENT } from "./sections/objectContact";

// This is where all the section queries are combined to be used in the section builder
export const SECTIONS_FRAGMENT = `
  _type,
  _key,
  _type == 'objectHero' => { ${HERO_SECTION_FRAGMENT} },
  _type == 'objectText' => { ${TEXT_SECTION_FRAGMENT} },
  _type == 'objectTextColumns' => { ${TEXT_COLUMNS_SECTION_FRAGMENT} },
  _type == 'objectSocialSection' => { ${SOCIAL_SECTION_FRAGMENT} },
  _type == 'objectFeaturedBrands' => { ${FEATURED_BRANDS_SECTION_FRAGMENT} },
  _type == 'objectCTA' => { ${CTA_SECTION_FRAGMENT} },
  _type == 'objectRichtext' => { ${RICHTEXT_SECTION_FRAGMENT} },
  _type == 'objectContact' => { ${CONTACT_SECTION_FRAGMENT} }
`;
