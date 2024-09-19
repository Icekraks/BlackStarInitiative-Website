import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'objectFeaturedCarousel',
  title: 'Featured Carousel Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'numberOfColumns',
      title: 'Number of Columns',
      type: 'number',
      options: {
        list: [1, 2],
      },
      initialValue: 1,
    }),
    defineField({
      name: 'carouselSlides',
      title: 'Carousel Slides',
      type: 'array',
      of: [
        {
          type: 'carouselObject',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
