<script setup lang="ts">
import type { Movie } from "~/types";

interface Props {
  movies: Movie[];
  loading?: boolean;
  title?: string;
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  title: "",
});
</script>

<template>
  <div class="space-y-4">
    <h2 v-if="title" class="text-2xl font-bold border-l-4 border-primary pl-4">
      {{ title }}
    </h2>

    <div
      v-if="loading"
      class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
    >
      <div v-for="i in 10" :key="i" class="space-y-3">
        <div class="aspect-[2/3] bg-card rounded-lg animate-shimmer" />
        <div class="h-4 bg-card rounded animate-shimmer" />
        <div class="h-3 bg-card rounded w-1/2 animate-shimmer" />
      </div>
    </div>

    <div
      v-else-if="movies.length > 0"
      class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
    >
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>

    <div
      v-else
      class="flex flex-col items-center justify-center py-20 text-center"
    >
      <p class="text-muted-foreground text-lg">No movies found</p>
      <p class="text-sm text-muted-foreground mt-2">Try a different category</p>
    </div>
  </div>
</template>
