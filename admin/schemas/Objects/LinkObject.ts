import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Link',
  name: 'link',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Link',
      name: 'link',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['https', 'http', 'mailto', 'tel', '#'],
          allowRelative: true,
        }),
    }),
    defineField({
      title: 'New window',
      name: 'external',
      type: 'boolean',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
