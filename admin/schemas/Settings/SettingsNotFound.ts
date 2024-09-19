import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'settingsNotFound',
  title: '404 Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Thank you Mario...',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      initialValue: 'But this page is in another castle!',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
