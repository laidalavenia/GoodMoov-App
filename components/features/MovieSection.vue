<script setup lang="ts">
import type { Movie } from "~/types";

interface Props {
  title: string;
  movies: Movie[];
  loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
});
</script>

<template>
  <div class="space-y-4">
    <h2 class="text-2xl font-bold border-l-4 border-primary pl-4">{{ title }}</h2>

    <div v-if="loading" class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      <div v-for="i in 6" :key="i" class="space-y-3">
        <div class="aspect-[2/3] bg-card rounded-lg animate-shimmer" />
        <div class="h-4 bg-card rounded animate-shimmer" />
        <div class="h-3 bg-card rounded w-1/2 animate-shimmer" />
      </div>
    </div>

    <div v-else class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>ƒ