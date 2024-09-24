import page from './page'
import home from './home'

import linkObject from './Objects/LinkObject'
import FlexibleLink from './Objects/flexibleLink'
import BrandColours from './Objects/BrandColours'

import objectSections from './Objects/objectSections'
import objectHero from './Objects/Sections/objectHero'
import objectText from './Objects/Sections/objectText'
import objectTextColumns from './Objects/Sections/objectTextColumns'
import objectTags from './Objects/Sections/objectTags'
import objectFeatured from './Objects/Sections/objectFeatured'
import featuredObject from './Objects/Sections/objectFeaturedObject'
import objectFeaturedCarousel from './Objects/Sections/objectFeaturedCarousel'
import objectContact from './Objects/Sections/objectContact'
import carouselObject from './Objects/Sections/objectCarouselObject'
import objectInternal from './Objects/InternalObject'

import objectTextColumn from './Objects/objectTextColumn'
import objectSocialSection from './Objects/Sections/objectSocialSection'
import objectFeaturedBrands from './Objects/Sections/objectFeaturedBrands'

import navigation from './Navigation'
import settingsMenus from './Settings/SettingsMenus'
import settingsSocial from './Settings/SettingsSocial'
import settingsNotFound from './Settings/SettingsNotFound'

const pages = [page, home]

const settings = [navigation, settingsMenus, settingsSocial, settingsNotFound]

const objects = [
  objectFeatured,
  featuredObject,
  objectFeaturedCarousel,
  objectSections,
  linkObject,
  objectTags,
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
]

export const schemaTypes = [...pages, ...sections, ...settings, ...objects]

export default schemaTypes
