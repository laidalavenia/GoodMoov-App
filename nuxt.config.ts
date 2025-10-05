// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
  ],

  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },

  typescript: {
    strict: true,
    typeCheck: false,
  },

  css: ["~/assets/css/main.css"],
  plugins: ["~/plugins/vue-query"],

  runtimeConfig: {
    public: {
      apiBase:
        process.env.NUXT_PUBLIC_API_BASE ||
        "https://jsonplaceholder.typicode.com",
    },
  },
});
