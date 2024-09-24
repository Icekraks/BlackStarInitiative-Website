import {defineType} from 'sanity'

export default defineType({
  name: 'objectSections',
  title: 'Object Sections',
  type: 'array',
  of: [
    {
      title: 'Hero',
      type: 'objectHero',
    },
    {
      title: 'Text',
      type: 'objectText',
    },
    {
      title: 'Text Columns',
      type: 'objectTextColumns',
    },
    {
      title: 'Social Media',
      type: 'objectSocialSection',
    },
    {
      title: 'Featured Brands',
      type: 'objectFeaturedBrands',
    },
    // {
    //   title: 'Tags',
    //   type: 'objectTags',
    // },
    // {
    //   title: 'Featured Sites',
    //   type: 'objectFeatured',
    // },
    // {
    //   title: 'Featured Carousel',
    //   type: 'objectFeaturedCarousel',
    // },
    // {
    //   title: 'Contact Section',
    //   type: 'objectContact',
    // },
  ],
})
