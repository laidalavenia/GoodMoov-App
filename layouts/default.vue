<template>
  <div class="min-h-screen bg-matcha-gradient-subtle">
    <!-- Animated background blobs -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div
        class="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
      />
      <div
        class="absolute top-0 -right-4 w-72 h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
      />
      <div
        class="absolute -bottom-8 left-20 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
      />
    </div>

    <AppHeader />

    <main class="container py-8 relative">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
