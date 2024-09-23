import { LINK_FRAGMENT } from "./link";

export const NAVIGATION_FRAGMENT = `
  links[] {
    type,
    internal {
      title,
      document->{
        _id,
        slug {
          current
        }
      }
    },
    external {
      ${LINK_FRAGMENT}
    }
  }
`;
