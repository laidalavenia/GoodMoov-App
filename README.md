# Nuxt 4 Starter Project

A modern, production-ready Nuxt 4 starter template with TypeScript, Tailwind CSS, shadcn-vue components, and TanStack Query for API integration.

## 🚀 Tech Stack

| Technology | Version | Description |
|------------|---------|-------------|
| [Nuxt](https://nuxt.com/) | ^4.1.2 | The Intuitive Vue Framework (v4) |
| [Vue](https://vuejs.org/) | ^3.5.22 | Progressive JavaScript Framework |
| [TypeScript](https://www.typescriptlang.org/) | ^5.9.3 | Typed JavaScript |
| [Tailwind CSS](https://tailwindcss.com/) | ^3.4.18 | Utility-first CSS Framework |
| [shadcn-nuxt](https://www.shadcn-vue.com/) | ^2.2.0 | Re-usable components built with Reka UI |
| [Reka UI](https://reka-ui.com/) | ^2.5.1 | Unstyled, accessible components for Vue |
| [TanStack Query](https://tanstack.com/query) | ^5.90.2 | Powerful data synchronization for Vue |
| [Lucide Vue Next](https://lucide.dev/) | ^0.544.0 | Beautiful & consistent icon toolkit |
| [Nuxt Content](https://content.nuxt.com/) | ^3.7.1 | File-based CMS for Nuxt |
| [Nuxt Image](https://image.nuxt.com/) | ^1.11.0 | Optimized image component |

### Additional Tools & Libraries

- **@nuxt/eslint** (^1.9.0) - ESLint configuration for Nuxt
- **@nuxt/scripts** (^0.12.1) - Third-party script management
- **@googlemaps/markerclusterer** (^2.6.2) - Google Maps marker clustering
- **@unhead/vue** (^2.0.17) - Document head manager
- **better-sqlite3** (^12.4.1) - SQLite3 bindings
- **class-variance-authority** (^0.7.1) - CSS variant management
- **clsx** (^2.1.1) & **tailwind-merge** (^3.3.1) - Utility for constructing className strings
- **tailwindcss-animate** (^1.0.7) - Tailwind CSS plugin for animations
- **vue-tsc** (^3.1.0) - TypeScript type checker for Vue
- **vue-router** (^4.5.1) - Official router for Vue.js

## 📁 Project Structure

```
nuxt4-starter/
├── assets/
│   └── css/
│       └── main.css           # Global CSS with Tailwind directives
├── components/
│   ├── ui/                    # shadcn-vue components (auto-generated)
│   │   └── button/
│   │       ├── Button.vue
│   │       └── index.ts
│   └── UserList.vue           # Example component with TanStack Query
├── composables/
│   └── useApi.ts              # API fetch composable
├── lib/
│   └── utils.ts               # Utility functions (cn helper)
├── pages/
│   └── index.vue              # Home page
├── plugins/
│   └── vue-query.ts           # TanStack Query setup with SSR
├── public/                    # Static files
├── app.vue                    # Root component
├── components.json            # shadcn-vue configuration
├── nuxt.config.ts             # Nuxt configuration
├── nuxt.d.ts                  # Type definitions for Nuxt config
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Dependencies and scripts
└── README.md                  
```

## 🛠️ Setup

### Prerequisites

- Node.js >= 18.14.0 or >= 20.0.0 or >= 22.0.0
- npm >= 9.0.0 or yarn or pnpm

**Note**: Nuxt 4 requires Node.js v18.14+ or newer.

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd nuxt4-starter
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (optional):
```bash
cp .env.example .env
```

4. Start development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run generate     # Generate static site
npm run preview      # Preview production build

# Code Quality
npm run typecheck    # Run TypeScript type checking
npm run postinstall  # Prepare Nuxt (runs automatically after install)
```

## 🎨 Adding shadcn-vue Components

This project uses shadcn-vue for UI components. To add new components:

```bash
# Add a specific component
npx shadcn-vue@latest add button
npx shadcn-vue@latest add card
npx shadcn-vue@latest add input
npx shadcn-vue@latest add dialog
npx shadcn-vue@latest add dropdown-menu

# View all available components
npx shadcn-vue@latest add
```

Components will be automatically added to `components/ui/` directory.

## 🔌 API Integration with TanStack Query

Example usage in components:

```vue
<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'

const { apiFetch } = useApi()

const { data, isLoading, isError, error } = useQuery({
  queryKey: ['users'],
  queryFn: () => apiFetch('/users'),
})
</script>
```

### Configure API Base URL

Set your API base URL in `.env`:

```bash
NUXT_PUBLIC_API_BASE=https://api.example.com
```

Or modify `nuxt.config.ts`:

```typescript
runtimeConfig: {
  public: {
    apiBase: 'https://api.example.com'
  }
}
```

## 🎯 Features

- ✅ **Nuxt 4** - Latest version with improved performance
- ✅ **TypeScript** - Full type safety with vue-tsc v3
- ✅ **Auto-imports** - Components, composables, and utilities
- ✅ **TanStack Query** - Powerful data fetching with SSR support
- ✅ **shadcn-vue** - Beautiful, accessible UI components
- ✅ **Tailwind CSS** - Utility-first styling with CSS variables
- ✅ **Dark Mode** - Built-in dark mode support
- ✅ **Lucide Icons** - 1000+ beautiful icons
- ✅ **SEO Ready** - Meta tags and SSR support with @unhead/vue
- ✅ **ESLint** - Code linting with @nuxt/eslint
- ✅ **Type Checking** - vue-tsc v3 integration
- ✅ **Google Maps** - Ready for map integration
- ✅ **SQLite** - Database support with better-sqlite3
- ✅ **Content Management** - File-based CMS with Nuxt Content
- ✅ **Image Optimization** - Automatic image optimization with Nuxt Image

## 🌙 Dark Mode

Dark mode is supported out of the box. Toggle dark mode by adding the `dark` class to the `<html>` element:

```typescript
// Add to your layout or component
const colorMode = useColorMode()

// Toggle dark mode
colorMode.preference = 'dark'
```

## 📚 Resources

- [Nuxt Documentation](https://nuxt.com/docs)
- [Vue Documentation](https://vuejs.org/guide)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn-vue Documentation](https://www.shadcn-vue.com/docs)
- [TanStack Query Documentation](https://tanstack.com/query/latest/docs/vue/overview)
- [Lucide Icons](https://lucide.dev/icons/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🙏 Acknowledgments

- [shadcn](https://twitter.com/shadcn) for the amazing component system
- [Nuxt Team](https://nuxt.com/team) for the fantastic framework
- [TanStack](https://tanstack.com/) for the powerful query library

---

Made with ❤️ using Nuxt 4