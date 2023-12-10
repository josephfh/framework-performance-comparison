// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts", "@nuxtjs/tailwindcss"],
  typescript: {
    typeCheck: true,
  },
  googleFonts: {
    families: {
      Inter: {
        wght: [200, 400, 500, 700],
      },
    },
    subsets: "latin",
  },
});
