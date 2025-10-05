export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
  ],

  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  typescript: {
    strict: true,
    typeCheck: false,
  },

  css: ["~/assets/css/main.css"],

  runtimeConfig: {
    public: {
      tmdbApiKey:
        process.env.NUXT_PUBLIC_TMDB_API_KEY,
      tmdbAccessToken: process.env.NUXT_PUBLIC_TMDB_ACCESS_TOKEN,
      tmdbBaseUrl: "https://api.themoviedb.org/3",
      tmdbImageBaseUrl: "https://image.tmdb.org/t/p",
    },
  },

  app: {
    head: {
      title: "goodmoov",
      meta: [
        { name: "description", content: "Discover your next favorite movie" },
      ],
    },
  },
});
