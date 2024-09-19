import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'linksNew',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  {title: 'About', value: 'about'},
                  {title: 'Contact', value: 'contact'},
                  {title: 'Components', value: 'components'},
                  {title: 'Other', value: 'other'},
                ],
              },
            },
            {
              name: 'link',
              title: 'Link',
              type: 'link',
            },
          ],
          preview: {
            select: {
              title: 'link.title',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
