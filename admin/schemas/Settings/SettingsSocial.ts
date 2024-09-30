import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'settingsSocial',
  title: 'Social Media Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'socialMedia',
      title: 'Social Media Accounts',
      type: 'array',
      of: [
        {
          type: 'socialMediaObject',
        },
      ],
    }),
    defineField({
      name: 'discord',
      title: 'Discord Join Button URL',
      type: 'string',
      initialValue: 'https://discord.com/invite/hM47S3q',
    }),
  ],
})
