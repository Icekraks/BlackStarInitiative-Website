import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Featured Brand Object',
  name: 'featuredBrandObject',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      codegen: {required: true},
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'text',
      description: 'Image should be an SVG',
      validation: (Rule) => Rule.required(),
      codegen: {required: true},
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
