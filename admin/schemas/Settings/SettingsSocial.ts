import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'settingsSocial',
  title: 'Social Media Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'twitter',
      title: 'Twitter',
      type: 'string',
      initialValue: 'https://x.com/BSI_SC',
    }),
    defineField({
      name: 'patreon',
      title: 'Patreon',
      type: 'string',
      initialValue: 'https://www.patreon.com/bsi',
    }),
    defineField({
      name: 'discord',
      title: 'Discord',
      type: 'string',
      initialValue: 'https://discord.com/invite/hM47S3q',
    }),

    defineField({
      name: 'youtube',
      title: 'YouTube',
      type: 'string',
      initialValue: 'https://www.youtube.com/channel/UCMHZsqaouoPa-Udzbj_2b9Q',
    }),
  ],
})
