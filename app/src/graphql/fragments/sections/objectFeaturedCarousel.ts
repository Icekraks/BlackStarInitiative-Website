import { IMAGE_FRAGMENT } from "@app/graphql/fragments/imageFragment";

export const FEATURED_CAROUSEL_SECTION_FRAGMENT = `
title,
description,
numberOfColumns,
carouselSlides[] {
  title,
  image {
    ${IMAGE_FRAGMENT}
  },
  url
}
`;
