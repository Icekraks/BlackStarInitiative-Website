import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {table} from '@sanity/table'
import {schemaTypes} from './schemas'
import {structure} from './structure'

export default defineConfig({
  name: 'default',
  title: 'admin',

  projectId: 'f3je6yf6',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool(), table()],

  schema: {
    types: schemaTypes,
  },
})
