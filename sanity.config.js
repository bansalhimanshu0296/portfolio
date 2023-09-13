import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/schema'

export default defineConfig({
  name: 'default',
  title: 'Portfolio Project',

  projectId: 'm1eozacq',
  dataset: 'production',
  useCdn: false,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
