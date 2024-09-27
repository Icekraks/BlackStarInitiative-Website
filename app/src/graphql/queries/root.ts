import { HEADER_FRAGMENT } from "../fragments/header";
import { PASSWORD_PAGE_QUERY } from "./password";

export const ROOT_QUERY = `
  {
    "navigation": *[_type == "settingsMenus"][0] {
      ${HEADER_FRAGMENT}
    },
    "social": *[_type == "settingsSocial"][0] {
      twitter,
      patreon,
      discord,
      youtube 
    },
    "notFound": *[_type == "settingsNotFound"][0] {
      title,
      description
    },
    "footer": *[_type == "settingsFooter"][0] {
      disclaimer
    },
    "maintenance": ${PASSWORD_PAGE_QUERY}
  }
`;
