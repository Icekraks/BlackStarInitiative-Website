import { SECTIONS_FRAGMENT } from "../fragments/sections";

export const PAGE_QUERY = `
  *[_type == "page" && slug.current == $handle][0] {
    title,
    slug,
    sections[] {
      ${SECTIONS_FRAGMENT}
    }
  }
`;
