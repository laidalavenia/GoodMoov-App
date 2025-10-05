<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});

const route = useRoute();
const userId = computed(() => route.params.id as string);

const { data: user, isLoading, error } = useUsers().useUser(userId);

useSeoMeta({
  title: () => user.value?.name || "User Details",
});
</script>

<template>
  <div class="max-w-2xl mx-auto">
    <LoadingSpinner v-if="isLoading" />
    <ErrorBoundary v-else-if="error" :error="error" />
    <UserCard v-else-if="user" :user="user" />
  </div>
</template>
