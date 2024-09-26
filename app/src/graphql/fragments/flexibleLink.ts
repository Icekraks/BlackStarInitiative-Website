import { LINK_FRAGMENT } from "./link";

export const FLEXIBLE_LINK_FRAGMENT = `
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
`;
