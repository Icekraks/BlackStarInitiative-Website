import { HERO_SECTION_FRAGMENT } from "./sections/objectHero";
import { TEXT_SECTION_FRAGMENT } from "./sections/objectText";
import { TEXT_COLUMNS_SECTION_FRAGMENT } from "./sections/objectTextColumns";
import { SOCIAL_SECTION_FRAGMENT } from "./sections/objectSocialSection";
import { FEATURED_BRANDS_SECTION_FRAGMENT } from "./sections/objectFeaturedBrands";

// This is where all the section queries are combined to be used in the section builder
export const SECTIONS_FRAGMENT = `
  _type,
  _key,
  _type == 'objectHero' => { ${HERO_SECTION_FRAGMENT} },
  _type == 'objectText' => { ${TEXT_SECTION_FRAGMENT} },
  _type == 'objectTextColumns' => { ${TEXT_COLUMNS_SECTION_FRAGMENT} },
  _type == 'objectSocialSection' => { ${SOCIAL_SECTION_FRAGMENT} },
  _type == 'objectFeaturedBrands' => { ${FEATURED_BRANDS_SECTION_FRAGMENT} },
`;
/*
  _type == 'objectContact' => { ${TEXT_SECTION_FRAGMENT} }*/
