<script setup lang="ts">
import { Users } from "lucide-vue-next";

const { users, isLoading, error, deleteUser, isDeleting } = useUsers();
const { success, error: showError } = useToast();

const handleDelete = async (id: string) => {
  if (confirm("Are you sure you want to delete this user?")) {
    try {
      await deleteUser(id);
      success("User deleted successfully");
    } catch (err) {
      showError("Failed to delete user");
    }
  }
};
</script>

<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <Users class="h-6 w-6" />
        <h2 class="text-2xl font-bold">Users</h2>
      </div>
      <Button to="/users/create"> Add User </Button>
    </div>

    <LoadingSpinner v-if="isLoading" />
    <ErrorBoundary v-else-if="error" :error="error" />
    <div v-else class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <UserCard
        v-for="user in users"
        :key="user.id"
        :user="user"
        @delete="handleDelete"
      />
    </div>
  </div>
</template>
