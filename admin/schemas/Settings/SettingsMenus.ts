import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'settingsMenus',
  title: 'Menu Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'headerTitle',
      title: 'Header Title',
      type: 'string',
      initialValue: 'Black Star Initiative',
    }),
    defineField({
      name: 'header',
      title: 'Header',
      type: 'reference',
      to: [{type: 'navigation'}],
      weak: true,
      hidden: true, // This field is hidden, please enable when submenus are needed.
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'reference',
      to: [{type: 'navigation'}],
      weak: true,
      hidden: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
