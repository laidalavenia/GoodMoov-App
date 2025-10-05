<script setup lang="ts">
import { Zap, Shield, Palette, Code, Rocket, Users } from "lucide-vue-next";

definePageMeta({
  layout: "default",
});

useSeoMeta({
  title: "Home - Modern Nuxt 4 Starter",
  description:
    "A production-ready Nuxt 4 starter with TypeScript, Tailwind CSS, and shadcn-vue",
});

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Built with Nuxt 4 for optimal performance and developer experience",
  },
  {
    icon: Shield,
    title: "Type Safe",
    description: "Full TypeScript support with end-to-end type safety",
  },
  {
    icon: Palette,
    title: "Beautiful UI",
    description: "Powered by shadcn-vue components and Tailwind CSS",
  },
  {
    icon: Code,
    title: "Best Practices",
    description:
      "Clean architecture with service layer and composables pattern",
  },
  {
    icon: Rocket,
    title: "Ready to Deploy",
    description: "Production-ready with SEO, SSR, and optimized builds",
  },
  {
    icon: Users,
    title: "Developer Friendly",
    description: "Well-documented with examples and reusable components",
  },
];

const stats = [
  { label: "Components", value: "30+" },
  { label: "TypeScript", value: "100%" },
  { label: "Performance", value: "A+" },
  { label: "Free & Open", value: "MIT" },
];
</script>

<template>
  <div class="space-y-20">
    <!-- Hero Section -->
    <section class="relative py-20 overflow-hidden">
      <!-- Background gradient -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 -z-10"
      />
      <div
        class="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-10"
      />

      <div class="container mx-auto text-center space-y-8">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-background/50 backdrop-blur-sm"
        >
          <span class="relative flex h-2 w-2">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"
            />
            <span
              class="relative inline-flex rounded-full h-2 w-2 bg-primary"
            />
          </span>
          <span class="text-sm font-medium">Nuxt 4 is here!</span>
        </div>

        <!-- Main heading -->
        <div class="space-y-4">
          <h1 class="text-5xl md:text-7xl font-bold tracking-tight">
            Welcome to
            <span
              class="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent"
            >
              MyApp
            </span>
          </h1>
          <p
            class="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
          >
            A modern Nuxt 4 application with best practices, TypeScript, and
            beautiful UI components
          </p>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap gap-4 justify-center pt-4">
          <Button size="lg" to="/users" class="gap-2">
            <Rocket class="h-4 w-4" />
            Get Started
          </Button>
          <Button size="lg" variant="outline" to="/about" class="gap-2">
            <Code class="h-4 w-4" />
            View Documentation
          </Button>
        </div>

        <!-- Stats -->
        <div
          class="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 max-w-3xl mx-auto"
        >
          <div v-for="stat in stats" :key="stat.label" class="space-y-2">
            <div class="text-3xl font-bold">{{ stat.value }}</div>
            <div class="text-sm text-muted-foreground">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="container mx-auto">
      <div class="text-center space-y-4 mb-12">
        <h2 class="text-3xl md:text-4xl font-bold">Everything you need</h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
          Built with modern technologies and best practices to help you ship
          faster
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          v-for="feature in features"
          :key="feature.title"
          class="relative overflow-hidden group hover:shadow-lg transition-shadow"
        >
          <CardHeader>
            <div
              class="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
            >
              <component :is="feature.icon" class="h-6 w-6 text-primary" />
            </div>
            <CardTitle>{{ feature.title }}</CardTitle>
            <CardDescription>
              {{ feature.description }}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section class="container mx-auto">
      <div class="text-center space-y-4 mb-12">
        <h2 class="text-3xl md:text-4xl font-bold">Built with the best</h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
          Powered by industry-leading technologies
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card class="text-center p-6 hover:shadow-md transition-shadow">
          <div class="text-4xl font-bold mb-2">Nuxt 4</div>
          <div class="text-sm text-muted-foreground">Framework</div>
        </Card>
        <Card class="text-center p-6 hover:shadow-md transition-shadow">
          <div class="text-4xl font-bold mb-2">Vue 3</div>
          <div class="text-sm text-muted-foreground">Progressive JS</div>
        </Card>
        <Card class="text-center p-6 hover:shadow-md transition-shadow">
          <div class="text-4xl font-bold mb-2">TypeScript</div>
          <div class="text-sm text-muted-foreground">Type Safety</div>
        </Card>
        <Card class="text-center p-6 hover:shadow-md transition-shadow">
          <div class="text-4xl font-bold mb-2">Tailwind</div>
          <div class="text-sm text-muted-foreground">Styling</div>
        </Card>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="container mx-auto">
      <Card class="relative overflow-hidden">
        <div
          class="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5"
        />
        <CardHeader class="relative text-center space-y-4 py-12">
          <CardTitle class="text-3xl md:text-4xl">
            Ready to get started?
          </CardTitle>
          <CardDescription class="text-lg">
            Start building your next project with this powerful starter template
          </CardDescription>
          <div class="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" to="/users"> Browse Users </Button>
            <Button size="lg" variant="outline" to="/about">
              Learn More
            </Button>
          </div>
        </CardHeader>
      </Card>
    </section>
  </div>
</template>
