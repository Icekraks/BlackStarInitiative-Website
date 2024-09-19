import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'objectTextColumns',
  title: 'Text Columns Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'array',
      of: [
        {
          title: 'Text',
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
