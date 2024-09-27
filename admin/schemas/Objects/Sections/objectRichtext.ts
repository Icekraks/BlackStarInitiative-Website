import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'objectRichtext',
  title: 'Rich Text Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Use a pair # to colour the text red.',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'content',
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
