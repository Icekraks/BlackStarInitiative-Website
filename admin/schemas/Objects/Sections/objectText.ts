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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'background',
      title: 'Background',
      type: 'brandColours',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
