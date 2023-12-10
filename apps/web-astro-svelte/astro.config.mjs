import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import partytown from '@astrojs/partytown'
import svelte from '@astrojs/svelte'
import compress from 'astro-compress'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    partytown(),
    svelte(),
    compress({
      minifyCSS: true,
      minifyJS: true,
      removeComments: true,
      removeScriptTypeAttributes: true
    })
  ]
})
