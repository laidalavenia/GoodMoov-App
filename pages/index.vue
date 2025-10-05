<script setup lang="ts">
import { RefreshCw } from "lucide-vue-next";
import { useSeoMeta } from "nuxt/app";
import { Button } from '~/components/ui/button'

useSeoMeta({
  title: "Nuxt 3 Starter",
  description: "Nuxt 3 with Vue 3, Tailwind, shadcn-vue, and TanStack Query",
});
</script>

<template>
  <div class="min-h-screen bg-background">
    <header class="border-b">
      <div class="container mx-auto px-6 py-4">
        <h1 class="text-2xl font-bold">Nuxt 3 Starter</h1>
      </div>
    </header>

    <main class="container mx-auto px-6 py-8">
      <div class="mb-8">
        <h2 class="text-xl font-semibold mb-4">
          Welcome to Your Starter Project
        </h2>
        <div class="flex gap-2">
          <Button>
            <RefreshCw class="w-4 h-4 mr-2" />
            Primary Button
          </Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="secondary">Secondary Button</Button>
        </div>
      </div>

      <UserList />
    </main>
  </div>
</template>
