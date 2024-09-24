import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Brand Colours',
  name: 'brandColours',
  type: 'object',
  fields: [
    defineField({
      title: 'Colour',
      name: 'colour',
      type: 'string',
      validation: (Rule) => Rule.required(),
      codegen: {required: true},
      options: {
        list: [
          {title: 'Black', value: 'black'},
          {title: 'Pure Black', value: 'pure-black'},
          {title: 'White', value: 'white'},
          {title: 'Pure White', value: 'pure-white'},
          {title: 'Grey', value: 'grey'},
          {title: 'Red', value: 'red'},
        ],
      },
      initialValue: 'black',
    }),
  ],
  preview: {
    select: {
      title: 'colour',
    },
  },
})
