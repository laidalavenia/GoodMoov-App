<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="border-t border-border/40 bg-card/50 mt-20">
    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="flex flex-col items-center md:items-start gap-2">
          <span class="text-xl font-bold">
            <span class="gradient-text">good</span
            ><span class="text-primary">moov</span>
          </span>
          <p class="text-sm text-muted-foreground">
            © {{ currentYear }} goodmoov
          </p>
          <p class="text-xs text-muted-foreground">All right reserved</p>
        </div>

        <div class="flex flex-col items-center md:items-end gap-2">
          <div class="flex gap-6 text-sm">
            <NuxtLink
              to="#"
              class="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </NuxtLink>
            <NuxtLink
              to="#"
              class="text-muted-foreground hover:text-primary transition-colors"
            >
              Legal Information
            </NuxtLink>
            <NuxtLink
              to="/about"
              class="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
