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
    }),
    defineField({
      name: 'featuredBrand',
      title: 'Featured Brand',
      type: 'array',
      of: [
        {
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
