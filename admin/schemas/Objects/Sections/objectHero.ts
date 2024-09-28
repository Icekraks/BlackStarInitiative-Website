import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'objectHero',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      codegen: {required: true},
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          title: 'Image',
          type: 'image',
          description:
            'PNG, JPG, GIF or WEBP. Max Size 1MB, 1920x1080px, Prefer WEBP for better performance.',
        },
        {title: 'Video', type: 'file'},
      ],
    }),
    defineField({
      name: 'autoplay',
      title: 'Autoplay Delay',
      type: 'number',
      description: 'Delay in milliseconds',
      initialValue: 5000,
    }),
    defineField({
      name: 'showScrollDown',
      title: 'Show Scroll Down',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'homeHero',
      title: 'Home Hero?',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
