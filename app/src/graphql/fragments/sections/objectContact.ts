import { IMAGE_FRAGMENT } from "../imageFragment";

export const TEXT_SECTION_FRAGMENT = `
  _type,
  _key,
  title,
  description,
  image {
    ${IMAGE_FRAGMENT}
  },
`;
