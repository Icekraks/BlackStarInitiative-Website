import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'objectCTA',
  title: 'Call To Action Section',
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
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'callToAction',
      title: 'Call to Action',
      type: 'flexibleLink',
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
