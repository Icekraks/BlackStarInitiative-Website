import { IMAGE_FRAGMENT } from "../fragments/imageFragment";

export const INDEX_QUERY = `
  *[_type == "pageHomepage"][0] {
    title,
    subtitle,
    description,
    file {
      asset->{
        ...
      }
    },
    image {
      ${IMAGE_FRAGMENT}
    },
  }
`;
