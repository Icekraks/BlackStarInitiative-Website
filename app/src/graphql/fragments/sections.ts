import { HERO_SECTION_FRAGMENT } from "./sections/objectHero";
import { TEXT_SECTION_FRAGMENT } from "./sections/objectText";
import { TAGS_SECTION_FRAGMENT } from "./sections/objectTags";
import { FEATURED_SECTION_FRAGMENT } from "./sections/objectFeatured";
import { FEATURED_CAROUSEL_SECTION_FRAGMENT } from "./sections/objectFeaturedCarousel";

export const SECTIONS_FRAGMENT = `
  _type,
  _key,
  _type == 'objectHero' => { ${HERO_SECTION_FRAGMENT} },
  _type == 'objectText' => { ${TEXT_SECTION_FRAGMENT} },
  _type == 'objectTags' => { ${TAGS_SECTION_FRAGMENT} },
  _type == 'objectFeatured' => { ${FEATURED_SECTION_FRAGMENT} },
  _type == 'objectFeaturedCarousel' => { ${FEATURED_CAROUSEL_SECTION_FRAGMENT} },
  _type == 'objectContact' => { ${TEXT_SECTION_FRAGMENT} },
`;
