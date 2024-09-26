import { SECTIONS_FRAGMENT } from "../fragments/sections";

export const INDEX_QUERY = `
  *[_type == "pageHomepage"][0] {
    sections[] {
      ${SECTIONS_FRAGMENT}
    }
  }
`;
