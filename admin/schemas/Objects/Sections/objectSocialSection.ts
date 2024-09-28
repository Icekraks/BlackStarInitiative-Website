import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'objectSocialSection',
  title: 'Social Media Section',
  type: 'object',
  description:
    'A section for social media links. Social Media links are displayed as buttons and is pulled from Settings > Social Media.',
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
