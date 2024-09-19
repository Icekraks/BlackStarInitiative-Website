import { IMAGE_FRAGMENT } from "@app/graphql/fragments/imageFragment";

export const FEATURED_SECTION_FRAGMENT = `
title,
description,
featuredSites[] {
  title,
  description,
  image {
    ${IMAGE_FRAGMENT}
  },
  url
}
`;
