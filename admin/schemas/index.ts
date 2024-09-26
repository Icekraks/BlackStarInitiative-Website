import page from './page'
import home from './home'

import linkObject from './Objects/LinkObject'
import FlexibleLink from './Objects/flexibleLink'
import BrandColours from './Objects/BrandColours'

import objectSections from './Objects/objectSections'

// Objects
import featuredObject from './Objects/Sections/objectFeaturedObject'
import objectContact from './Objects/Sections/objectContact'
import carouselObject from './Objects/Sections/objectCarouselObject'
import objectInternal from './Objects/InternalObject'
import objectTextColumn from './Objects/objectTextColumn'

// Sections
import objectHero from './Objects/Sections/objectHero'
import objectText from './Objects/Sections/objectText'
import objectTextColumns from './Objects/Sections/objectTextColumns'
import objectSocialSection from './Objects/Sections/objectSocialSection'
import objectFeaturedBrands from './Objects/Sections/objectFeaturedBrands'
import objectCTA from './Objects/Sections/objectCTA'

// Settings
import navigation from './Navigation'
import settingsMenus from './Settings/SettingsMenus'
import settingsSocial from './Settings/SettingsSocial'
import settingsNotFound from './Settings/SettingsNotFound'
import settingsFooter from './Settings/SettingsFooter'

const pages = [page, home]

const settings = [navigation, settingsMenus, settingsSocial, settingsNotFound, settingsFooter]

const objects = [
  featuredObject,
  objectSections,
  linkObject,
  objectContact,
  carouselObject,
  objectInternal,
  FlexibleLink,
  BrandColours,
]

const sections = [
  objectHero,
  objectText,
  objectTextColumns,
  objectTextColumn,
  objectSocialSection,
  objectFeaturedBrands,
  objectCTA,
]

export const schemaTypes = [...pages, ...sections, ...settings, ...objects]

export default schemaTypes
