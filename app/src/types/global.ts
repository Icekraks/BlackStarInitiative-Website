import {
  FlexibleLink,
  ObjectSections,
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
  SettingsFooter,
  SettingsMaintenance,
  SettingsSocial,
} from "@app/types/schema";

export type RootLoaderData = {
  navigation: {
    headerTitle: string;
    header: Navigation;
    footer: Navigation;
  };
  social: SettingsSocial;
  notFound: NotFound;
  footer: SettingsFooter;
  maintenance: SettingsMaintenance;
  passwordEnabled: boolean;
};

export type NotFound = {
  title: string;
  description: string;
};

export type Navigation = {
  title: string;
  links: FlexibleLink[];
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

export type File = {
  _type: "file";
  asset: SanityReference<SanityImageAsset>;
};

export type IconProps = {
  className?: string;
  width?: string | number;
  height?: string | number;
  fill?: string;
};

export type LogoProps = {
  stacked?: boolean;
};

export type ExtractType<T> = T extends Array<infer U> ? U : never;

export type SectionsTypes = ExtractType<ObjectSections>;
