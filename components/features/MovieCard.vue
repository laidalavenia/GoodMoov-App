<script setup lang="ts">
import type { Movie } from "~/types";
import { Star } from "lucide-vue-next";

interface Props {
  movie: Movie;
}

const props = defineProps<Props>();

const posterUrl = computed(() => getImageUrl(props.movie.poster_path, "w300"));
const year = computed(() => {
  if (!props.movie.release_date) return "N/A";
  return new Date(props.movie.release_date).getFullYear();
});

const rating = computed(() => props.movie.vote_average.toFixed(1));
</script>

<template>
  <NuxtLink :to="`/movie/${movie.id}`" class="group block">
    <div class="relative overflow-hidden rounded-lg movie-card-hover">
      <div class="aspect-[2/3] relative bg-card">
        <img
          :src="posterUrl"
          :alt="movie.title"
          class="w-full h-full object-cover"
          loading="lazy"
        />

        <div
          class="absolute top-2 left-2 bg-red-600 px-2 py-1 rounded text-xs font-bold"
        >
          N
        </div>

        <div
          v-if="movie.vote_average > 0"
          class="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1"
        >
          <Star class="h-3 w-3 text-yellow-500 fill-yellow-500" />
          <span class="text-xs font-semibold">{{ rating }}</span>
        </div>

        <div
          class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </div>

      <div class="p-3 space-y-1">
        <h3
          class="font-semibold text-sm line-clamp-1 group-hover:text-primary transition-colors"
        >
          {{ movie.title }}
        </h3>
        <p class="text-xs text-muted-foreground">{{ year }}</p>
      </div>
    </div>
  </NuxtLink>
</template>
