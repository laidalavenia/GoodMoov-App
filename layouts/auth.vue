<template>
  <div
    class="min-h-screen flex items-center justify-center bg-matcha-gradient relative overflow-hidden"
  >
    <!-- Animated background -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-10 left-10 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"
      />
      <div
        class="absolute bottom-10 right-10 w-96 h-96 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"
      />
    </div>

    <div class="w-full max-w-md p-6 relative z-10">
      <div class="glass rounded-2xl p-8">
        <slot />
      </div>
    </div>
  </div>
</template>
