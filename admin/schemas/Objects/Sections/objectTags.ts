import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'objectTags',
  title: 'Text Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Text',
              name: 'text',
              type: 'string',
            },
            {
              title: 'Tags',
              name: 'tags',
              type: 'array',
              of: [
                {
                  type: 'string',
                },
              ],
            },
          ],
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
