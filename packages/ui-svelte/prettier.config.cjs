/** @type {import("prettier").Config} */
module.exports = {
  ...require('prettier-config-standard'),
  plugins: [
    require.resolve('prettier-plugin-svelte'),
    require.resolve('prettier-plugin-tailwindcss')
  ],
  overrides: [
    {
      files: '*.svelte',
      options: {
        parser: 'svelte'
      }
    }
  ]
}
