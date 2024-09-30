import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Social Media',
  name: 'socialMediaObject',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      options: {
        list: [
          {title: 'Facebook', value: 'facebook'},
          {title: 'Instagram', value: 'instagram'},
          {title: 'TikTok', value: 'tiktok'},
          {title: 'Twitter', value: 'twitter'},
          {title: 'Patreon', value: 'patreon'},
          {title: 'Discord', value: 'discord'},
          {title: 'YouTube', value: 'youtube'},
        ],
      },
      validation: (Rule) => Rule.required(),
      codegen: {required: true},
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['https', 'http', 'mailto', 'tel', '#'],
          allowRelative: true,
        }),
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})
