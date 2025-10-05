<script setup lang="ts">
import { Film, Users, Heart } from "lucide-vue-next";

useHead({
  title: "About - goodmoov",
  meta: [
    {
      name: "description",
      content:
        "Learn more about goodmoov - your destination for discovering amazing movies.",
    },
  ],
});
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <div class="max-w-4xl mx-auto space-y-12">
      <div class="text-center space-y-4">
        <h1 class="text-4xl md:text-5xl font-bold">
          About <span class="gradient-text">good</span
          ><span class="text-primary">moov</span>
        </h1>
        <p class="text-xl text-muted-foreground">
          Your destination for discovering amazing movies
        </p>
      </div>

      <div class="glass rounded-xl p-8 space-y-4">
        <div class="flex items-center gap-3 mb-4">
          <div
            class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center"
          >
            <Film class="h-6 w-6 text-primary" />
          </div>
          <h2 class="text-2xl font-semibold">Our Mission</h2>
        </div>
        <p class="text-foreground/80 leading-relaxed">
          goodmoov is dedicated to helping movie enthusiasts discover their next
          favorite film. We believe that great movies have the power to inspire,
          entertain, and bring people together. Our platform makes it easy to
          explore thousands of films across all genres and find exactly what
          you're looking for.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <div class="glass rounded-xl p-6 space-y-3">
          <div
            class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center"
          >
            <Film class="h-6 w-6 text-primary" />
          </div>
          <h3 class="text-xl font-semibold">Vast Collection</h3>
          <p class="text-sm text-muted-foreground">
            Access thousands of movies from various genres, eras, and countries
            all in one place.
          </p>
        </div>

        <div class="glass rounded-xl p-6 space-y-3">
          <div
            class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center"
          >
            <Users class="h-6 w-6 text-primary" />
          </div>
          <h3 class="text-xl font-semibold">Community Driven</h3>
          <p class="text-sm text-muted-foreground">
            Powered by ratings and reviews from millions of movie lovers
            worldwide.
          </p>
        </div>

        <div class="glass rounded-xl p-6 space-y-3">
          <div
            class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center"
          >
            <Heart class="h-6 w-6 text-primary" />
          </div>
          <h3 class="text-xl font-semibold">Personalized</h3>
          <p class="text-sm text-muted-foreground">
            Get recommendations based on your interests and discover hidden
            gems.
          </p>
        </div>
      </div>

      <div class="glass rounded-xl p-8 space-y-4">
        <h2 class="text-2xl font-semibold">Powered by TMDB</h2>
        <p class="text-foreground/80 leading-relaxed">
          goodmoov uses The Movie Database (TMDB) API to bring you the most
          comprehensive and up-to-date movie information. TMDB is a community
          built movie and TV database that has been supporting developers and
          media centers since 2008.
        </p>
      </div>

      <div class="glass rounded-xl p-8 space-y-4">
        <h2 class="text-2xl font-semibold">Built With</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="text-center p-4 bg-card rounded-lg">
            <p class="font-semibold text-primary">Nuxt 4</p>
            <p class="text-xs text-muted-foreground">Framework</p>
          </div>
          <div class="text-center p-4 bg-card rounded-lg">
            <p class="font-semibold text-primary">Vue 3</p>
            <p class="text-xs text-muted-foreground">UI Library</p>
          </div>
          <div class="text-center p-4 bg-card rounded-lg">
            <p class="font-semibold text-primary">TypeScript</p>
            <p class="text-xs text-muted-foreground">Language</p>
          </div>
          <div class="text-center p-4 bg-card rounded-lg">
            <p class="font-semibold text-primary">Tailwind CSS</p>
            <p class="text-xs text-muted-foreground">Styling</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
