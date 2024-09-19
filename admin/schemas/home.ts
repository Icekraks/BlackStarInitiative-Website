import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageHomepage',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'pretitle',
      title: 'Pretitle',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
    }),

    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
