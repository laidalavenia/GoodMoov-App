<script setup lang="ts">
import { AlertTriangle } from "lucide-vue-next";

interface Props {
  error?: Error | null;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  retry: [];
}>();
</script>

<template>
  <div
    v-if="error"
    class="flex flex-col items-center justify-center p-8 text-center"
  >
    <AlertTriangle class="h-12 w-12 text-destructive mb-4" />
    <h3 class="text-lg font-semibold mb-2">Something went wrong</h3>
    <p class="text-sm text-muted-foreground mb-4">
      {{ error.message }}
    </p>
    <Button @click="emit('retry')"> Try Again </Button>
  </div>
  <slot v-else />
</template>
