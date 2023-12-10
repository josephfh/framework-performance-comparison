import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'
import partytown from '@astrojs/partytown'
import lit from '@astrojs/lit'
import compress from 'astro-compress'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), partytown(), lit(), compress()]
})
