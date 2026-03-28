<script setup lang="ts">
import { projects } from '../../data/projects';

import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { getTranslation } from '../../composables/useLocalization';

const landingProjects = computed(() =>
  projects.slice(0, 6).map((project) => ({
    ...project,
    displayDescription: getTranslation(project.descriptionKey)
  }))
);
</script>

<template>
  <section id="portfolio" class="bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl px-4 py-10 mx-auto lg:py-24 lg:px-6">
      <div class="max-w-3xl mx-auto mb-10 text-center lg:mb-12">
        <h2
          class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          data-i18n="portfolio_title"
        >
          Projects We Build and Grow
        </h2>
        <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400" data-i18n="portfolio_desc">
          Explore selected projects that are completed and currently in progress across website and
          mobile product categories.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <article
          v-for="project in landingProjects"
          :key="project.id"
          class="overflow-hidden bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-900 dark:border-gray-700"
        >
          <img
            :src="project.image"
            :alt="project.imageAlt"
            class="object-cover object-top w-full h-48"
            loading="lazy"
            decoding="async"
          />
          <div class="p-5 border-t-4 border-[#EFC000]">
            <h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              {{ project.title }}
            </h3>
            <p class="mb-4 text-sm font-light text-gray-600 dark:text-gray-300">
              {{ project.displayDescription }}
            </p>

            <div class="space-y-2 mb-5 text-sm text-gray-700 dark:text-gray-300">
              <p>
                <span class="font-semibold" data-i18n="portfolio_category_label">Category:</span>
                <span class="ml-1" :data-i18n="project.category === 'mobile' ? 'portfolio_category_mobile' : 'portfolio_category_website'">
                  {{ project.category }}
                </span>
              </p>
              <p>
                <span class="font-semibold" data-i18n="portfolio_period_start_label">Start:</span>
                <span class="ml-1">{{ project.periodStart }}</span>
              </p>
              <p>
                <span class="font-semibold" data-i18n="portfolio_period_end_label">End:</span>
                <span class="ml-1">{{ project.periodEnd }}</span>
              </p>
            </div>

            <RouterLink
              :to="project.detailHref"
              data-track="portfolio_view_detail"
              class="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 mt-auto"
              data-i18n="portfolio_view_detail"
              >View Project Detail</RouterLink
            >
          </div>
        </article>
      </div>

      <div class="flex justify-center mt-10">
        <RouterLink
          to="/projects"
          data-track="portfolio_view_all"
          class="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
          data-i18n="portfolio_view_all"
          >View All Projects</RouterLink
        >
      </div>
    </div>
  </section>
</template>
