<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { Search } from "lucide-vue-next";

const route = useRoute();
const router = useRouter();
const movieApi = useMovieApi();

const searchQuery = ref(route.query.q?.toString() || "");
const currentPage = ref(1);

const { data: searchResults, isLoading: pending } = useQuery({
  queryKey: ["searchMovies", searchQuery, currentPage],
  queryFn: () => {
    if (!searchQuery.value.trim()) return null;
    return movieApi.searchMovies(searchQuery.value, currentPage.value);
  },
  enabled: computed(() => searchQuery.value.trim().length > 0),
});

const movies = computed(() => searchResults.value?.results || []);
const hasMore = computed(() => {
  if (!searchResults.value) return false;
  return currentPage.value < searchResults.value.total_pages;
});

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    router.push(`/search?q=${encodeURIComponent(searchQuery.value)}`);
    currentPage.value = 1;
  }
};

const loadMore = () => {
  if (!hasMore.value) return;
  currentPage.value++;
};

watch(
  () => route.query.q,
  (newQuery) => {
    if (newQuery) {
      searchQuery.value = newQuery.toString();
      currentPage.value = 1;
    }
  }
);

useHead({
  title: computed(() => `Search: ${searchQuery.value} - goodmoov`),
});
</script>

<template>
  <div class="container mx-auto px-4 py-8 space-y-8">
    <div class="max-w-2xl mx-auto space-y-4">
      <h1 class="text-3xl font-bold text-center">Search Movies</h1>

      <div class="flex gap-2">
        <Input
          v-model="searchQuery"
          type="text"
          placeholder="Search for movies..."
          class="flex-1"
          @keyup.enter="handleSearch"
        />
        <Button @click="handleSearch" size="icon">
          <Search class="h-5 w-5" />
        </Button>
      </div>

      <p
        v-if="searchQuery && searchResults"
        class="text-center text-muted-foreground"
      >
        Found {{ searchResults.total_results }} results for "{{ searchQuery }}"
      </p>
    </div>

    <div v-if="searchQuery">
      <MovieGrid :movies="movies" :loading="pending" />

      <div v-if="hasMore && !pending" class="flex justify-center pt-8">
        <Button size="lg" variant="outline" @click="loadMore">
          Load More
        </Button>
      </div>
    </div>

    <div
      v-else
      class="flex flex-col items-center justify-center py-20 text-center"
    >
      <Search class="h-16 w-16 text-muted-foreground mb-4" />
      <h2 class="text-2xl font-semibold mb-2">Search for Movies</h2>
      <p class="text-muted-foreground">Enter a movie title to get started</p>
    </div>
  </div>
</template>
