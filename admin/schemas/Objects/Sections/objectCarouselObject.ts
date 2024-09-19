import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'carouselObject',
  title: 'Carousel Object',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
