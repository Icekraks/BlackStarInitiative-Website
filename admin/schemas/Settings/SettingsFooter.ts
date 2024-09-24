import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'settingsFooter',
  title: 'Footer Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'disclaimer',
      title: 'Disclaimer Text',
      type: 'text',
      initialValue:
        'Black Star Initiative. Star Citizen®, Roberts Space Industries® and Cloud Imperium® are registered trademarks of Cloud Imperium Rights LLC. This project is a fansite and not affiliated with Cloud Imperium Games in any way.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
