import {
  Internal,
  ObjectSections,
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
} from "./schema";

export type RootLoaderData = {
  navigation: {
    headerTitle: string;
    header: Navigation;
    footer: Navigation;
  };
  social: SocialMedia;
  notFound: NotFound;
};

export type NotFound = {
  title: string;
  description: string;
};

export type SocialMedia = {
  twitter: string;
  patreon: string;
  discord: string;
  youtube: string;
};

export type Navigation = {
  title: string;
  links: LinkObject[];
};

export type LinkObject = {
  type: boolean;
  internal?: Internal;
  external?: Link;
};

export type Link = {
  title: string;
  link: string;
  external: boolean;
};

export type Image = {
  _type: "image";
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;
};

export type IconProps = {
  className?: string;
  width?: string | number;
  height?: string | number;
  fill?: string;
};

export type ExtractType<T> = T extends Array<infer U> ? U : never;

export type SectionsTypes = ExtractType<ObjectSections>;
