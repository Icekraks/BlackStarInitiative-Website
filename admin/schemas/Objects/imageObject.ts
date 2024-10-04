import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Image',
  name: 'imageObject',
  type: 'object',
  fields: [
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
    }),
    defineField({
      title: 'Alt Text',
      name: 'alt',
      type: 'string',
    }),
  ],
})
