<script setup lang="ts">
const movieApi = useMovieApi();

const selectedGenre = ref<number | null>(null);

// Fetch all data
const { data: genresData } = await useAsyncData("genres", () =>
  movieApi.getGenres()
);

const { data: heroMoviesData } = await useAsyncData("heroMovies", () =>
  movieApi.getPopularMovies(1)
);

const { data: popularMoviesData } = await useAsyncData("popularMovies", () =>
  movieApi.getPopularMovies(1)
);

const { data: latestMoviesData } = await useAsyncData("latestMovies", () =>
  movieApi.getNowPlayingMovies(1)
);

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

const handleGenreSelect = (genreId: number | null) => {
  selectedGenre.value = genreId;
  if (genreId) {
    // Navigate to category page or filter
    navigateTo(`/?genre=${genreId}`);
  } else {
    navigateTo("/");
  }
};

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
    <!-- Hero Carousel -->
    <HeroCarousel v-if="heroMovies.length > 0" :movies="heroMovies" />

    <!-- Genre Carousel -->
    <GenreCarousel
      :genres="genres"
      :selected-genre="selectedGenre"
      @select-genre="handleGenreSelect"
    />

    <!-- Popular Section -->
    <MovieSection
      title="Popular"
      :movies="popularMovies"
      :loading="!popularMoviesData"
    />

    <!-- Latest Section -->
    <MovieSection
      title="Latest"
      :movies="latestMovies"
      :loading="!latestMoviesData"
    />
  </div>
</template>
