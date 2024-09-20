import { SECTIONS_FRAGMENT } from "../fragments/sections";

export const INDEX_QUERY = `
  *[_type == "pageHomepage"][0] {
    title,
    sections[] {
      ${SECTIONS_FRAGMENT}
    }
  }
`;
