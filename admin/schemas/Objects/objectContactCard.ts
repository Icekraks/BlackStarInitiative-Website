import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Contact Card',
  name: 'contactCard',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
    }),

    defineField({
      title: 'Link',
      name: 'link',
      type: 'link',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
