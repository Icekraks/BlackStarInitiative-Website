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
      name: 'sections',
      title: 'Sections',
      type: 'objectSections',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
