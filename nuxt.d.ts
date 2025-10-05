declare module "nuxt/schema" {
  interface NuxtConfig {
    shadcn?: {
      /**
       * Prefix for all the imported component
       */
      prefix?: string;
      /**
       * Directory that the component lives in.
       * @default "./components/ui"
       */
      componentDir?: string;
    };
  }
}

export {};
