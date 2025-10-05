<script setup lang="ts">
import type { User } from "~/types/user.types";
import { Mail, Shield } from "lucide-vue-next";

interface Props {
  user: User;
}

defineProps<Props>();
defineEmits<{
  edit: [user: User];
  delete: [id: string];
}>();
</script>

<template>
  <Card>
    <CardHeader>
      <div class="flex items-center gap-4">
        <div
          class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center"
        >
          <span class="text-lg font-semibold">
            {{ user.name.charAt(0).toUpperCase() }}
          </span>
        </div>
        <div class="flex-1">
          <CardTitle>{{ user.name }}</CardTitle>
          <CardDescription class="flex items-center gap-2">
            <Mail class="h-3 w-3" />
            {{ user.email }}
          </CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <div class="flex items-center gap-2 text-sm text-muted-foreground">
        <Shield class="h-4 w-4" />
        <span class="capitalize">{{ user.role }}</span>
      </div>
    </CardContent>
    <CardFooter class="gap-2">
      <Button variant="outline" size="sm" @click="$emit('edit', user)">
        Edit
      </Button>
      <Button variant="destructive" size="sm" @click="$emit('delete', user.id)">
        Delete
      </Button>
    </CardFooter>
  </Card>
</template>
