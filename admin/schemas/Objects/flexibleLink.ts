import {defineType} from 'sanity'

export default defineType({
  name: 'flexibleLink',
  title: 'Flexible Link',
  type: 'object',
  fields: [
    {
      name: 'external',
      type: 'link',
      hidden: ({parent}: any) => !parent?.type,
    },
    {
      name: 'internal',
      type: 'internal',
      hidden: ({parent}: any) => parent?.type,
    },
    {
      name: 'type',
      title: 'External Link?',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => Rule.required(),
      codegen: {required: true},
    },
  ],
  preview: {
    select: {
      type: 'type',
      internal: 'internal',
      external: 'external',
    },
    prepare(selection) {
      const {type, internal, external} = selection
      const title =
        !type && internal?.title
          ? internal.title
          : type && external?.title
            ? external.title
            : 'Link'
      return {
        title: title || 'Link',
      }
    },
  },
})
