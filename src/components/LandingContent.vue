<script setup lang="ts">
import LandingHeaderHero from './sections/LandingHeaderHero.vue';
import LandingServicesAbout from './sections/LandingServicesAbout.vue';
import LandingPortfolioProjects from './sections/LandingPortfolioProjects.vue';
import LandingPricingFaq from './sections/LandingPricingFaq.vue';
import LandingContactFooter from './sections/LandingContactFooter.vue';
</script>

<template>
  <LandingHeaderHero />
  <LandingServicesAbout />
  <LandingPortfolioProjects />
  <LandingPricingFaq />
  <LandingContactFooter />
</template>

<style>
:root {
  --color-primary: #00890d;
  --color-primary-dark: #006b0a;
  --color-primary-ring: rgba(0, 137, 13, 0.18);
  --color-secondary: #efc000;
  --color-secondary-dark: #d2a900;
  --color-secondary-ring: rgba(239, 192, 0, 0.22);
}

header nav [data-track='nav_get_started'],
#home [data-track='hero_get_started'],
#pricing [data-track='pricing_get_started'],
#contact [data-track='contact_submit_click'] {
  background-color: var(--color-primary) !important;
  border-color: var(--color-primary) !important;
  color: #fff !important;
}

header nav [data-track='nav_get_started']:hover,
header nav [data-track='nav_get_started']:focus-visible,
#home [data-track='hero_get_started']:hover,
#home [data-track='hero_get_started']:focus-visible,
#pricing [data-track='pricing_get_started']:hover,
#pricing [data-track='pricing_get_started']:focus-visible,
#contact [data-track='contact_submit_click']:hover,
#contact [data-track='contact_submit_click']:focus-visible {
  background-color: var(--color-primary-dark) !important;
  border-color: var(--color-primary-dark) !important;
  box-shadow: 0 0 0 4px var(--color-primary-ring) !important;
}

header nav a[aria-current='page'] {
  background-color: var(--color-primary) !important;
}

header nav ul a:hover,
header nav ul a:focus-visible,
[aria-label='Breadcrumb'] a:hover,
[aria-label='Breadcrumb'] a:focus-visible {
  color: var(--color-primary) !important;
}

#home [data-track='hero_view_work'],
#contact button[type='reset'] {
  background-color: var(--color-secondary) !important;
  border-color: var(--color-secondary) !important;
  color: #ffffff !important;
}

#home [data-track='hero_view_work']:hover,
#home [data-track='hero_view_work']:focus-visible,
#contact button[type='reset']:hover,
#contact button[type='reset']:focus-visible {
  background-color: var(--color-secondary-dark) !important;
  border-color: var(--color-secondary-dark) !important;
  box-shadow: 0 0 0 4px var(--color-secondary-ring) !important;
}

#services .shrink-0,
#about p.text-lg.font-medium,
#about a.inline-flex,
#about .w-10.h-10 {
  color: var(--color-secondary) !important;
}

#about a.inline-flex:hover,
#about a.inline-flex:focus-visible {
  color: var(--color-secondary-dark) !important;
}

#contact input:focus,
#contact textarea:focus {
  border-color: var(--color-primary) !important;
  box-shadow: 0 0 0 4px var(--color-primary-ring) !important;
  outline: none !important;
}

@media (min-width: 1024px) {
  header nav a[aria-current='page'] {
    background-color: transparent !important;
    color: var(--color-primary) !important;
  }
}
</style>
