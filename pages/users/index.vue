<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});

useSeoMeta({
  title: "Users",
  description: "Manage users",
});
</script>

<template>
  <UserList />
</template>
