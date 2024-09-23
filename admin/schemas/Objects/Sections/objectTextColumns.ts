import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'objectTextColumns',
  title: 'Text Columns Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Use a pair # to colour the text red.',
    }),
    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'array',
      of: [{type: 'objectTextColumn'}],
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
