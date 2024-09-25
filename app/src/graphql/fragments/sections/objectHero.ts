import { IMAGE_FRAGMENT } from "../imageFragment";

export const HERO_SECTION_FRAGMENT = `
  _type,
  _key,
  title,
  subtitle,
  image {
    ${IMAGE_FRAGMENT}
  },
  showScrollDown,
  homeHero,
`;
