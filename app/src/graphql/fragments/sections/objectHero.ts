import { IMAGE_FRAGMENT } from "../imageFragment";
import { VIDEO_FRAGMENT } from "../videoFragment";

export const HERO_SECTION_FRAGMENT = `
  _type,
  _key,
  title,
  subtitle,
  content [] {
    _type == 'image' => {${IMAGE_FRAGMENT}},
    _type == 'file' => {${VIDEO_FRAGMENT}}
  },
  showScrollDown,
  homeHero,
`;
