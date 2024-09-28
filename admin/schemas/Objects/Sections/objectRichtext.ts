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
      name: 'hideTitle',
      title: 'Hide Title',
      type: 'boolean',
      description: 'Hides the title from the section.',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
