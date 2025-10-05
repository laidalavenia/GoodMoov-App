<script setup lang="ts">
import type { Genre } from "~/types";

interface Props {
  genres: Genre[];
  selectedGenre: number | null;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  selectGenre: [genreId: number | null];
}>();

const scrollContainer = ref<HTMLElement | null>(null);

const handleGenreClick = (genreId: number) => {
  if (props.selectedGenre === genreId) {
    emit("selectGenre", null);
  } else {
    emit("selectGenre", genreId);
  }
};
</script>

<template>
  <div class="py-6">
    <div
      ref="scrollContainer"
      class="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth"
    >
      <Button
        variant="outline"
        size="lg"
        :class="[
          'shrink-0 rounded-xl px-8 py-6 transition-all min-w-[120px]',
          selectedGenre === null
            ? 'bg-primary text-primary-foreground border-primary hover:bg-primary/90'
            : 'bg-card hover:bg-primary/10 hover:border-primary/50',
        ]"
        @click="handleGenreClick(0)"
      >
        <span class="font-semibold">All</span>
      </Button>

      <Button
        v-for="genre in genres"
        :key="genre.id"
        variant="outline"
        size="lg"
        :class="[
          'shrink-0 rounded-xl px-8 py-6 transition-all min-w-[120px]',
          selectedGenre === genre.id
            ? 'bg-primary text-primary-foreground border-primary hover:bg-primary/90'
            : 'bg-card hover:bg-primary/10 hover:border-primary/50',
        ]"
        @click="handleGenreClick(genre.id)"
      >
        <span class="font-semibold">{{ genre.name }}</span>
      </Button>
    </div>
  </div>
</template>
