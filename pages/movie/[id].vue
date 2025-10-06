<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { Star, Calendar, Clock, User } from "lucide-vue-next";
import type { MovieDetail, Credits } from "~/types";

const route = useRoute();
const movieApi = useMovieApi();
const movieId = computed(() => Number(route.params.id));

// Fetch movie details 
const { data: movie, isLoading: moviePending } = useQuery({
  queryKey: ["movie", movieId],
  queryFn: () => movieApi.getMovieDetails(movieId.value),
});

// Fetch credits
const { data: credits } = useQuery({
  queryKey: ["credits", movieId],
  queryFn: () => movieApi.getMovieCredits(movieId.value),
});

// Fetch similar movies
const { data: similarMoviesData } = useQuery({
  queryKey: ["similar", movieId],
  queryFn: () => movieApi.getSimilarMovies(movieId.value),
});

const backdropUrl = computed(() =>
  getImageUrl(movie.value?.backdrop_path, "original")
);
const posterUrl = computed(() => getImageUrl(movie.value?.poster_path, "w500"));

const year = computed(() => {
  if (!movie.value?.release_date) return "N/A";
  return new Date(movie.value.release_date).getFullYear();
});

const rating = computed(() => movie.value?.vote_average.toFixed(1) || "0");

const runtime = computed(() => {
  if (!movie.value?.runtime) return "N/A";
  const hours = Math.floor(movie.value.runtime / 60);
  const minutes = movie.value.runtime % 60;
  return `${hours}h ${minutes}m`;
});

const cast = computed(() => credits.value?.cast.slice(0, 8) || []);
const similarMovies = computed(
  () => similarMoviesData.value?.results.slice(0, 6) || []
);

useHead({
  title: computed(() => `${movie.value?.title || "Movie"} - goodmoov`),
  meta: [
    {
      name: "description",
      content: computed(() => movie.value?.overview || ""),
    },
  ],
});
</script>

<template>
  <div v-if="moviePending" class="min-h-screen">
    <div class="container mx-auto px-4 py-8">
      <div class="space-y-6">
        <div class="h-64 md:h-96 bg-card rounded-xl animate-shimmer" />
        <div class="grid md:grid-cols-3 gap-6">
          <div class="aspect-[2/3] bg-card rounded-xl animate-shimmer" />
          <div class="md:col-span-2 space-y-4">
            <div class="h-8 bg-card rounded animate-shimmer" />
            <div class="h-4 bg-card rounded animate-shimmer w-3/4" />
            <div class="h-20 bg-card rounded animate-shimmer" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else-if="movie" class="min-h-screen">
    <div class="relative w-full h-[300px] md:h-[500px]">
      <img
        :src="backdropUrl"
        :alt="movie.title"
        class="w-full h-full object-cover"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20"
      />
    </div>

    <div class="container mx-auto px-4 -mt-32 md:-mt-40 relative z-10">
      <div class="grid md:grid-cols-[300px,1fr] gap-6 md:gap-8">
        <div class="flex justify-center md:justify-start">
          <div class="w-48 md:w-full">
            <img
              :src="posterUrl"
              :alt="movie.title"
              class="w-full rounded-xl shadow-2xl"
            />
          </div>
        </div>

        <div class="space-y-6 pb-8">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="text-lg text-primary font-semibold">{{ year }}</span>
            </div>
            <h1 class="text-3xl md:text-5xl font-bold mb-3">
              {{ movie.title }}
            </h1>
            <p v-if="movie.tagline" class="text-muted-foreground italic">
              "{{ movie.tagline }}"
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-4 text-sm">
            <div class="flex items-center gap-2">
              <Star class="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span class="font-semibold">{{ rating }}</span>
              <span class="text-muted-foreground">/10</span>
            </div>
            <div class="flex items-center gap-2 text-muted-foreground">
              <Clock class="h-4 w-4" />
              <span>{{ runtime }}</span>
            </div>
            <div class="flex items-center gap-2 text-muted-foreground">
              <Calendar class="h-4 w-4" />
              <span>{{ movie.release_date }}</span>
            </div>
          </div>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="genre in movie.genres"
              :key="genre.id"
              class="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
            >
              {{ genre.name }}
            </span>
          </div>

          <div>
            <h2 class="text-xl font-semibold mb-3">Overview</h2>
            <p class="text-foreground/80 leading-relaxed">
              {{ movie.overview }}
            </p>
          </div>

          <div v-if="cast.length > 0">
            <h2 class="text-xl font-semibold mb-4">Cast</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div v-for="actor in cast" :key="actor.id" class="text-center">
                <div
                  class="aspect-square rounded-lg overflow-hidden mb-2 bg-card"
                >
                  <img
                    v-if="actor.profile_path"
                    :src="getImageUrl(actor.profile_path, 'w200')"
                    :alt="actor.name"
                    class="w-full h-full object-cover"
                  />
                  <div
                    v-else
                    class="w-full h-full flex items-center justify-center text-muted-foreground"
                  >
                    <User class="h-12 w-12" />
                  </div>
                </div>
                <p class="font-semibold text-sm">{{ actor.name }}</p>
                <p class="text-xs text-muted-foreground line-clamp-1">
                  {{ actor.character }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="similarMovies.length > 0" class="mt-12 pb-12">
        <h2 class="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">
          Recommended
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <MovieCard
            v-for="similarMovie in similarMovies"
            :key="similarMovie.id"
            :movie="similarMovie"
          />
        </div>
      </div>
    </div>
  </div>

  <div v-else class="container mx-auto px-4 py-20 text-center">
    <h1 class="text-2xl font-bold mb-4">Movie not found</h1>
    <Button to="/" variant="outline">Go Back Home</Button>
  </div>
</template>
