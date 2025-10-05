<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { Users } from "lucide-vue-next";
import { useApi } from "../composables/useApi";

interface User {
  id: number;
  name: string;
  email: string;
}

const { apiFetch } = useApi();

const {
  data: users,
  isLoading,
  isError,
  error,
} = useQuery({
  queryKey: ["users"],
  queryFn: () => apiFetch<User[]>("/users"),
});
</script>

<template>
  <div class="container mx-auto p-6">
    <div class="flex items-center gap-2 mb-6">
      <Users class="w-6 h-6" />
      <h1 class="text-2xl font-bold">Users</h1>
    </div>

    <div v-if="isLoading" class="text-muted-foreground">Loading users...</div>

    <div v-else-if="isError" class="text-destructive">
      Error: {{ error?.message }}
    </div>

    <div v-else class="grid gap-4">
      <div
        v-for="user in users"
        :key="user.id"
        class="p-4 border rounded-lg hover:bg-accent transition-colors"
      >
        <h3 class="font-semibold">{{ user.name }}</h3>
        <p class="text-sm text-muted-foreground">{{ user.email }}</p>
      </div>
    </div>
  </div>
</template>
