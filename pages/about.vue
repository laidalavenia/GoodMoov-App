<script setup lang="ts">
import { Code, Layers, Zap, Shield } from "lucide-vue-next";

useSeoMeta({
  title: "About",
  description: "Learn more about MyApp",
});

const techStack = [
  {
    category: "Frontend",
    items: ["Nuxt 4", "Vue 3", "TypeScript", "Tailwind CSS", "shadcn-vue"],
  },
  {
    category: "State Management",
    items: ["TanStack Query", "Pinia", "Composables"],
  },
  {
    category: "Developer Tools",
    items: ["ESLint", "Prettier", "vue-tsc", "Hot Module Replacement"],
  },
  {
    category: "Build & Deploy",
    items: ["Vite", "Nitro", "Static Generation", "SSR"],
  },
];

const features = [
  {
    icon: Code,
    title: "Clean Architecture",
    description:
      "Service layer, composables pattern, and feature-based structure",
  },
  {
    icon: Layers,
    title: "Reusable Components",
    description: "shadcn-vue components with full customization",
  },
  {
    icon: Zap,
    title: "Optimized Performance",
    description: "SSR, code splitting, and optimized bundle size",
  },
  {
    icon: Shield,
    title: "Type Safety",
    description: "End-to-end type safety with TypeScript",
  },
];
</script>

<template>
  <div class="space-y-12">
    <!-- Header -->
    <section class="text-center space-y-4">
      <h1 class="text-4xl md:text-5xl font-bold">About MyApp</h1>
      <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
        A production-ready Nuxt 4 starter template with modern best practices
      </p>
    </section>

    <!-- Description -->
    <section class="max-w-3xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>What is MyApp?</CardTitle>
          <CardDescription>
            MyApp is a comprehensive starter template built with Nuxt 4,
            designed to help developers kickstart their projects with a solid
            foundation. It includes everything you need to build modern,
            scalable web applications.
          </CardDescription>
        </CardHeader>
        <CardContent class="space-y-4">
          <p class="text-muted-foreground">
            This template follows industry best practices and includes a
            well-organized file structure, type-safe API integration with
            TanStack Query, beautiful UI components powered by shadcn-vue, and
            comprehensive examples to get you started quickly.
          </p>
          <p class="text-muted-foreground">
            Whether you're building a small personal project or a large-scale
            application, this starter provides the tools and patterns you need
            to succeed.
          </p>
        </CardContent>
      </Card>
    </section>

    <!-- Features -->
    <section>
      <h2 class="text-3xl font-bold text-center mb-8">Key Features</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <Card v-for="feature in features" :key="feature.title">
          <CardHeader>
            <div
              class="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
            >
              <component :is="feature.icon" class="h-6 w-6 text-primary" />
            </div>
            <CardTitle>{{ feature.title }}</CardTitle>
            <CardDescription>{{ feature.description }}</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>

    <!-- Tech Stack -->
    <section>
      <h2 class="text-3xl font-bold text-center mb-8">Tech Stack</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <Card v-for="stack in techStack" :key="stack.category">
          <CardHeader>
            <CardTitle>{{ stack.category }}</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="flex flex-wrap gap-2">
              <Badge
                v-for="item in stack.items"
                :key="item"
                variant="secondary"
              >
                {{ item }}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>

    <!-- CTA -->
    <section class="text-center py-12">
      <Card class="bg-gradient-to-br from-primary/10 to-primary/5">
        <CardHeader>
          <CardTitle class="text-2xl">Ready to explore?</CardTitle>
          <CardDescription>
            Check out the components showcase or browse the user list
          </CardDescription>
          <div class="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" to="/components"> View Components </Button>
            <Button size="lg" variant="outline" to="/users">
              Browse Users
            </Button>
          </div>
        </CardHeader>
      </Card>
    </section>
  </div>
</template>
