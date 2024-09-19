import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'objectText',
  title: 'Text Section',
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
      name: 'fileLabel',
      title: 'File Button Label',
      type: 'string',
    }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
    }),
    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'link',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
