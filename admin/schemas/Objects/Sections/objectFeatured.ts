import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'objectFeatured',
  title: 'Featured Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'featuredSites',
      title: 'Featured Sites',
      type: 'array',
      of: [
        {
          type: 'featuredObject',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
