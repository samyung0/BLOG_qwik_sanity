import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schema} from './sanity/schemas'
import {codeInput} from '@sanity/code-input'
import {table} from '@sanity/table'
import {media} from 'sanity-plugin-media'

import {SetAndPublishAction} from "./sanity/util/readingTime";

export default defineConfig({
  name: 'default',
  title: 'personal-website',

  projectId: 'ywfq98mg',
  dataset: 'production',

  plugins: [
    codeInput(),
    deskTool(),
    visionTool(),
    table(),
    media(),
  ],
  document: {
    actions: (prev) =>{
      return prev.map((originalAction) => (originalAction.action === 'publish' ? SetAndPublishAction : originalAction)) as any}
  },

  schema,
})
