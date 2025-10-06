<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";

const movieApi = useMovieApi();
const selectedGenre = ref<number | null>(null);
const currentPage = ref(1);

// Fetch genres 
const { data: genresData } = useQuery({
  queryKey: ["genres"],
  queryFn: () => movieApi.getGenres(),
});

// Fetch hero movies
const { data: heroMoviesData } = useQuery({
  queryKey: ["heroMovies"],
  queryFn: () => movieApi.getPopularMovies(1),
});

// Fetch popular movies (static for homepage)
const { data: popularMoviesData, isLoading: popularLoading } = useQuery({
  queryKey: ["popularMovies"],
  queryFn: () => movieApi.getPopularMovies(1),
});

// Fetch latest movies (static for homepage)
const { data: latestMoviesData, isLoading: latestLoading } = useQuery({
  queryKey: ["latestMovies"],
  queryFn: () => movieApi.getNowPlayingMovies(1),
});

// Fetch movies by genre (dynamic based on selection)
const {
  data: genreMoviesData,
  isLoading: genreMoviesLoading,
  refetch: refetchGenreMovies,
} = useQuery({
  queryKey: ["genreMovies", selectedGenre, currentPage],
  queryFn: () => {
    if (selectedGenre.value) {
      return movieApi.getMoviesByGenre(selectedGenre.value, currentPage.value);
    }
    return movieApi.getPopularMovies(currentPage.value);
  },
  enabled: computed(() => selectedGenre.value !== null),
});

const genres = computed(() => genresData.value?.genres || []);
const heroMovies = computed(
  () => heroMoviesData.value?.results.slice(0, 5) || []
);
const popularMovies = computed(
  () => popularMoviesData.value?.results.slice(0, 12) || []
);
const latestMovies = computed(
  () => latestMoviesData.value?.results.slice(0, 12) || []
);

// Movies to display (either filtered by genre or all sections)
const displayMovies = computed(() => {
  if (selectedGenre.value) {
    return genreMoviesData.value?.results || [];
  }
  return [];
});

const showGenreSections = computed(() => selectedGenre.value !== null);
const selectedGenreName = computed(() => {
  if (!selectedGenre.value) return "";
  const genre = genres.value.find((g) => g.id === selectedGenre.value);
  return genre?.name || "Movies";
});

const handleGenreSelect = (genreId: number | null) => {
  selectedGenre.value = genreId;
  currentPage.value = 1;

  // Scroll to top when genre changes
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const loadMore = () => {
  currentPage.value++;
};

const hasMore = computed(() => {
  if (!genreMoviesData.value) return false;
  return currentPage.value < genreMoviesData.value.total_pages;
});

useHead({
  title: "goodmoov - Discover Your Next Favorite Movie",
  meta: [
    {
      name: "description",
      content:
        "Discover and explore thousands of movies. Find your next favorite film.",
    },
  ],
});
</script>

<template>
  <div class="container mx-auto px-4 py-6 space-y-12">
    <!-- Hero Carousel - Only show when no genre selected -->
    <HeroCarousel
      v-if="!showGenreSections && heroMovies.length > 0"
      :movies="heroMovies"
    />

    <!-- Genre Carousel -->
    <GenreCarousel
      :genres="genres"
      :selected-genre="selectedGenre"
      @select-genre="handleGenreSelect"
    />

    <!-- Show filtered movies when genre is selected -->
    <div v-if="showGenreSections" class="space-y-8">
      <MovieGrid
        :title="selectedGenreName"
        :movies="displayMovies"
        :loading="genreMoviesLoading"
      />

      <div v-if="hasMore && !genreMoviesLoading" class="flex justify-center">
        <Button size="lg" variant="outline" @click="loadMore">
          Load More
        </Button>
      </div>
    </div>

    <!-- Show all sections when no genre selected -->
    <template v-else>
      <!-- Popular Section -->
      <MovieSection
        title="Popular"
        :movies="popularMovies"
        :loading="popularLoading"
      />

      <!-- Latest Section -->
      <MovieSection
        title="Latest"
        :movies="latestMovies"
        :loading="latestLoading"
      />
    </template>
  </div>
</template>
