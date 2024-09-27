import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'settingsMaintenance',
  title: 'Maintenance Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      codegen: {required: true},
      initialValue: 'Maintenance Mode',
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
      initialValue: 'The website is currently undergoing maintenance. Please check back later.',
    }),
    defineField({
      name: 'maintenanceMode',
      title: 'Maintenance Mode',
      type: 'boolean',
    }),
    defineField({
      name: 'password',
      title: 'Password',
      type: 'string',
      initialValue: 'password',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
