import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'settingsSocial',
  title: 'Social Media Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      initialValue: 'felix.hu847@gmail.com.au',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'string',
      initialValue: 'https://www.linkedin.com/in/felixhu847/',
    }),
    defineField({
      name: 'github',
      title: 'GitHub',
      type: 'string',
      initialValue: 'https://github.com/Icekraks',
    }),
    defineField({
      name: 'youtube',
      title: 'YouTube',
      type: 'string',
      initialValue: 'https://www.youtube.com/@IcekraksOfficial',
    }),
  ],
})
