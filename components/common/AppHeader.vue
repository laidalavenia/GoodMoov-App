<script setup lang="ts">
import { Search, ChevronLeft } from "lucide-vue-next";

const route = useRoute();
const router = useRouter();
const showSearch = ref(false);
const searchQuery = ref("");

const isDetailPage = computed(() => route.path.includes("/movie/"));

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    router.push(`/search?q=${encodeURIComponent(searchQuery.value)}`);
    showSearch.value = false;
    searchQuery.value = "";
  }
};

const goBack = () => {
  router.back();
};
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full bg-background/95 backdrop-blur border-b border-border/40"
  >
    <div class="container mx-auto px-4">
      <div class="flex h-16 items-center justify-between">
        <div v-if="isDetailPage" class="flex items-center gap-4">
          <Button variant="ghost" size="icon" @click="goBack">
            <ChevronLeft class="h-5 w-5" />
          </Button>
        </div>

        <NuxtLink v-else to="/" class="flex items-center space-x-1 group">
          <span class="text-2xl font-bold">
            <span class="gradient-text">good</span
            ><span class="text-primary">moov</span>
          </span>
        </NuxtLink>

        <div v-if="isDetailPage" class="flex-1" />

        <div class="flex items-center gap-2">
          <div v-if="showSearch" class="flex items-center gap-2 animate-fadeIn">
            <Input
              v-model="searchQuery"
              type="text"
              placeholder="Search movies..."
              class="w-48 md:w-64"
              @keyup.enter="handleSearch"
              autofocus
            />
            <Button variant="ghost" size="sm" @click="showSearch = false">
              Cancel
            </Button>
          </div>
          <Button v-else variant="ghost" size="icon" @click="showSearch = true">
            <Search class="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  </header>
</template>
