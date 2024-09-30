import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'objectContact',
  title: 'Contact Section',
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
      name: 'contactCard',
      title: 'Contact Card',
      type: 'array',
      of: [{type: 'contactCard'}],
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
    prepare(selection) {
      const {title} = selection

      return {
        title: title || 'Contact Section',
      }
    },
  },
})
