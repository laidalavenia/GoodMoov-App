<script setup lang="ts">
import { Github, Twitter, Linkedin, Leaf } from "lucide-vue-next";

const currentYear = new Date().getFullYear();

const footerLinks = {
  product: [
    { label: "Features", to: "/#features" },
    { label: "Components", to: "/components" },
    { label: "Documentation", to: "/docs" },
  ],
  company: [
    { label: "About", to: "/about" },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
  ],
  legal: [
    { label: "Privacy", to: "/privacy" },
    { label: "Terms", to: "/terms" },
    { label: "License", to: "/license" },
  ],
};

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];
</script>

<template>
  <footer class="border-t border-border/40 glass-dark mt-20">
    <div class="container py-12">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        <!-- Brand -->
        <div class="col-span-2 md:col-span-1">
          <div class="flex items-center gap-2 mb-4">
            <div
              class="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center"
            >
              <Leaf class="h-6 w-6 text-white" />
            </div>
            <span
              class="font-bold text-xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
            >
              MyApp
            </span>
          </div>
          <p class="text-sm text-muted-foreground mb-4">
            Building the future with modern web technologies and clean design.
          </p>
          <div class="flex gap-2">
            <Button
              v-for="social in socialLinks"
              :key="social.label"
              variant="outline"
              size="icon"
              :href="social.href"
              target="_blank"
              :aria-label="social.label"
              class="hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all"
            >
              <component :is="social.icon" class="h-4 w-4" />
            </Button>
          </div>
        </div>

        <!-- Links -->
        <div>
          <h3 class="font-semibold mb-4 text-primary">Product</h3>
          <ul class="space-y-2">
            <li v-for="link in footerLinks.product" :key="link.to">
              <NuxtLink
                :to="link.to"
                class="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold mb-4 text-primary">Company</h3>
          <ul class="space-y-2">
            <li v-for="link in footerLinks.company" :key="link.to">
              <NuxtLink
                :to="link.to"
                class="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold mb-4 text-primary">Legal</h3>
          <ul class="space-y-2">
            <li v-for="link in footerLinks.legal" :key="link.to">
              <NuxtLink
                :to="link.to"
                class="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="pt-8 border-t border-border/40">
        <p class="text-sm text-muted-foreground text-center">
          © {{ currentYear }} MyApp. Built with 💚 using Nuxt 4 & Matcha Green
          Theme.
        </p>
      </div>
    </div>
  </footer>
</template>
