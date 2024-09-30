import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'objectFeaturedBrands',
  title: 'Featured Brand Section',
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
      name: 'featuredBrand',
      title: 'Featured Brands',
      type: 'array',
      of: [
        {
          type: 'featuredBrandObject',
        },
      ],
      validation: (Rule) => Rule.max(4),
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
