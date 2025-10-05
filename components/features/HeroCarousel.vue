<script setup lang="ts">
import type { Movie } from "~/types";

interface Props {
  movies: Movie[];
}

const props = defineProps<Props>();

const currentIndex = ref(0);
const intervalId = ref<NodeJS.Timeout | null>(null);

const currentMovie = computed(() => props.movies[currentIndex.value]);

const startAutoplay = () => {
  intervalId.value = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % props.movies.length;
  }, 5000);
};

const stopAutoplay = () => {
  if (intervalId.value) {
    clearInterval(intervalId.value);
    intervalId.value = null;
  }
};

const goToSlide = (index: number) => {
  currentIndex.value = index;
  stopAutoplay();
  startAutoplay();
};

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});
</script>

<template>
  <div
    class="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl group bg-card"
  >
    <div
      v-for="(movie, index) in movies"
      :key="movie.id"
      class="absolute inset-0 transition-opacity duration-500"
      :class="index === currentIndex ? 'opacity-100' : 'opacity-0'"
    >
      <img
        :src="getImageUrl(movie.backdrop_path, 'original')"
        :alt="movie.title"
        class="w-full h-full object-cover"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"
      />
      <div
        class="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent"
      />
    </div>

    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
      <button
        v-for="(movie, index) in movies"
        :key="movie.id"
        class="h-2 rounded-full transition-all"
        :class="index === currentIndex ? 'bg-primary w-8' : 'bg-white/50 w-2'"
        @click="goToSlide(index)"
      />
    </div>
  </div>
</template>
