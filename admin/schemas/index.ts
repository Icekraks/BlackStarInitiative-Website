import page from './page'
import home from './home'

import linkObject from './Objects/LinkObject'
import FlexibleLink from './Objects/flexibleLink'
import BrandColours from './Objects/BrandColours'

import objectSections from './Objects/objectSections'

// Objects
import featuredObject from './Objects/Sections/objectFeaturedObject'
import carouselObject from './Objects/Sections/objectCarouselObject'
import objectInternal from './Objects/InternalObject'
import objectTextColumn from './Objects/objectTextColumn'
import objectContent from './Objects/objectContent'
import contactCard from './Objects/objectContactCard'
import featuredBrandObject from './Objects/featuredBrandObject'
import socialMediaObject from './Objects/socialMediaObject'

// Sections
import objectHero from './Objects/Sections/objectHero'
import objectText from './Objects/Sections/objectText'
import objectTextColumns from './Objects/Sections/objectTextColumns'
import objectSocialSection from './Objects/Sections/objectSocialSection'
import objectFeaturedBrands from './Objects/Sections/objectFeaturedBrands'
import objectCTA from './Objects/Sections/objectCTA'
import objectRichtext from './Objects/Sections/objectRichText'
import objectContact from './Objects/Sections/objectContact'

// Settings
import navigation from './Navigation'
import settingsMenus from './Settings/SettingsMenus'
import settingsSocial from './Settings/SettingsSocial'
import settingsNotFound from './Settings/SettingsNotFound'
import settingsFooter from './Settings/SettingsFooter'
import settingsMaintenance from './Settings/SettingsMaintenance'

const pages = [page, home]

const settings = [
  navigation,
  settingsMenus,
  settingsSocial,
  settingsNotFound,
  settingsFooter,
  settingsMaintenance,
]

const objects = [
  featuredObject,
  objectSections,
  linkObject,
  carouselObject,
  objectInternal,
  FlexibleLink,
  BrandColours,
  objectContent,
  contactCard,
  featuredBrandObject,
  socialMediaObject,
]

const sections = [
  objectHero,
  objectText,
  objectTextColumns,
  objectTextColumn,
  objectSocialSection,
  objectFeaturedBrands,
  objectCTA,
  objectRichtext,
  objectContact,
]

export const schemaTypes = [...pages, ...sections, ...settings, ...objects]

export default schemaTypes
