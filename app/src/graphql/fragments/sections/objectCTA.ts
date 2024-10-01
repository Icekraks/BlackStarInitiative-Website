import { IMAGE_FRAGMENT } from "../imageFragment";
import { FLEXIBLE_LINK_FRAGMENT } from "../flexibleLink";

export const CTA_SECTION_FRAGMENT = `
  title,
  description,
  leftImage,
  image {
    ${IMAGE_FRAGMENT}
  },
  callToAction {
    ${FLEXIBLE_LINK_FRAGMENT}
  },
  background {
    colour
  }
`;
