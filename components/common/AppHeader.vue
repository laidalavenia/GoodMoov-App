<script setup lang="ts">
import { Menu, X, Leaf } from "lucide-vue-next";

const route = useRoute();
const isMobileMenuOpen = ref(false);

const navigation = [
  { label: "Home", to: "/" },
  { label: "Components", to: "/components" },
  { label: "Users", to: "/users" },
  { label: "About", to: "/about" },
];

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
  <header class="sticky top-0 z-50 w-full glass border-b border-border/40">
    <div class="container flex h-16 items-center justify-between">
      <div class="flex items-center gap-6">
        <NuxtLink to="/" class="flex items-center space-x-2 group">
          <div
            class="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform"
          >
            <Leaf class="h-6 w-6 text-white" />
          </div>
          <span
            class="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
          >
            MyApp
          </span>
        </NuxtLink>

        <nav class="hidden md:flex gap-1">
          <NuxtLink
            v-for="item in navigation"
            :key="item.to"
            :to="item.to"
            class="px-4 py-2 text-sm font-medium rounded-lg transition-all hover:bg-primary/10"
            :class="[
              route.path === item.to
                ? 'bg-primary/10 text-primary'
                : 'text-foreground/70 hover:text-foreground',
            ]"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
      </div>

      <div class="flex items-center gap-4">
        <Button variant="outline" to="/login" class="hidden md:flex">
          Login
        </Button>

        <Button
          variant="ghost"
          size="icon"
          class="md:hidden"
          @click="toggleMobileMenu"
        >
          <Menu v-if="!isMobileMenuOpen" class="h-5 w-5" />
          <X v-else class="h-5 w-5" />
        </Button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden border-t border-border/40 glass-dark"
      >
        <nav class="container py-4 space-y-1">
          <NuxtLink
            v-for="item in navigation"
            :key="item.to"
            :to="item.to"
            class="block px-4 py-2 text-sm font-medium rounded-lg transition-all"
            :class="[
              route.path === item.to
                ? 'bg-primary/10 text-primary'
                : 'text-foreground/70 hover:bg-primary/5 hover:text-foreground',
            ]"
            @click="isMobileMenuOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>
