import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'objectHero',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {title: 'Image', type: 'image'},
        {title: 'Video', type: 'file'},
      ],
    }),
    defineField({
      name: 'showScrollDown',
      title: 'Show Scroll Down',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'homeHero',
      title: 'Home Hero?',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
