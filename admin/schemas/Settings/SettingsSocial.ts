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
