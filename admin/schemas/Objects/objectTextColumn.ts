import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Text Column',
  name: 'objectTextColumn',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      codegen: {required: true},
      description: 'Use a pair # to colour the text red.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
