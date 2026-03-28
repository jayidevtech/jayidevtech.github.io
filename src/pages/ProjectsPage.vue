<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { projects } from '../data/projects';
import { RouterLink } from 'vue-router';
import { getTranslation, setupLocalization } from '../composables/useLocalization';

onMounted(() => {
  setupLocalization();
});

const projectList = computed(() =>
  projects.map((project) => ({
    ...project,
    displayDescription: getTranslation(project.descriptionKey),
    displayCategory: getTranslation(
      project.category === 'mobile' ? 'portfolio_category_mobile' : 'portfolio_category_website'
    )
  }))
);
</script>

<template>
  <main class="min-h-screen py-10 bg-gray-50 dark:bg-gray-900">
    <section class="max-w-7xl px-4 mx-auto lg:px-6">
      <div class="flex flex-col gap-4 mb-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p class="text-sm font-semibold tracking-wide text-[#00890D] uppercase">JAYIDEVTECH</p>
          <h1 class="text-3xl font-extrabold text-gray-900 dark:text-white">{{ getTranslation('projects_page_title') }}</h1>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {{ getTranslation('projects_showing_prefix') }} {{ projectList.length }}
            {{ getTranslation('projects_showing_suffix') }}
          </p>
        </div>
        <div class="flex items-center gap-3">
          <div
            class="inline-flex items-center p-1 border border-gray-200 rounded-lg dark:border-gray-700"
            role="group"
            :aria-label="getTranslation('language_switcher_aria')"
          >
            <button type="button" data-lang-switch="id" class="px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer" aria-pressed="false">ID</button>
            <button type="button" data-lang-switch="en" class="px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer" aria-pressed="false">EN</button>
          </div>
          <RouterLink
            to="/"
            class="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#00890D] rounded-lg hover:bg-[#006B0A] focus:ring-4 focus:ring-[#00890D]/30"
          >
            {{ getTranslation('projects_back_to_landing') }}
          </RouterLink>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <article
          v-for="project in projectList"
          :key="project.id"
          class="overflow-hidden bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700"
        >
          <img
            :src="project.image"
            :alt="project.imageAlt"
            class="object-cover object-top w-full h-48"
            loading="lazy"
            decoding="async"
          />
          <div class="p-5 border-t-4 border-[#EFC000]">
            <h2 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">{{ project.title }}</h2>
            <p class="mb-4 text-sm text-gray-600 dark:text-gray-300">{{ project.displayDescription }}</p>

            <div class="space-y-1 mb-5 text-sm text-gray-700 dark:text-gray-300">
              <p>
                <span class="font-semibold">{{ getTranslation('portfolio_category_label') }}</span>
                <span class="ml-1">{{ project.displayCategory }}</span>
              </p>
              <p>
                <span class="font-semibold">{{ getTranslation('portfolio_period_start_label') }}</span>
                <span class="ml-1">{{ project.periodStart }}</span>
              </p>
              <p>
                <span class="font-semibold">{{ getTranslation('portfolio_period_end_label') }}</span>
                <span class="ml-1">{{ project.periodEnd }}</span>
              </p>
            </div>

            <RouterLink
              :to="project.detailHref"
              class="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-[#00890D] rounded-lg hover:bg-[#006B0A] focus:ring-4 focus:ring-[#00890D]/30"
            >
              {{ getTranslation('portfolio_view_detail') }}
            </RouterLink>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>
