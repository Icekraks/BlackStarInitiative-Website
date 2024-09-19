export const TEXT_SECTION_FRAGMENT = `
  _type,
  _key,
  title,
  description,
  file {
    asset->{
      ...
    }
  },
  cta {
    title,
    link,
    external,
  },
`;
