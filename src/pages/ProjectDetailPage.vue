<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { projects } from '../data/projects';
import { getTranslation, setupLocalization } from '../composables/useLocalization';

onMounted(() => {
  setupLocalization();
});

const route = useRoute();
const router = useRouter();

const projectId = computed(() => route.params.id as string);

const project = computed(() => {
  const staticId = 'project-';
  return projects.find((p) => p.id === `${staticId}${projectId.value}`);
});

const projectDescription = computed(() => {
  return project.value ? getTranslation(project.value.descriptionKey) : '';
});

const projectFeatures = computed(() => {
  return project.value?.features?.map((featureKey) => getTranslation(featureKey)) ?? [];
});

const projectCategory = computed(() => {
  if (!project.value) {
    return '';
  }
  return getTranslation(project.value.category === 'mobile' ? 'portfolio_category_mobile' : 'portfolio_category_website');
});

const handleBack = () => {
  router.push('/projects');
};
</script>

<template>
  <main class="min-h-screen py-10 bg-gray-50 dark:bg-gray-900">
    <section class="max-w-4xl px-4 mx-auto lg:px-6">
      <div class="flex items-center justify-between mb-8">
        <!-- Back button -->
        <button
          @click="handleBack"
          class="inline-flex items-center text-sm font-medium text-[#00890D] hover:text-[#006B0A] cursor-pointer"
        >
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          {{ getTranslation('project_detail_back_to_projects') }}
        </button>

        <div
          class="inline-flex items-center p-1 border border-gray-200 rounded-lg dark:border-gray-700"
          role="group"
          :aria-label="getTranslation('language_switcher_aria')"
        >
          <button type="button" data-lang-switch="id" class="px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer" aria-pressed="false">ID</button>
          <button type="button" data-lang-switch="en" class="px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer" aria-pressed="false">EN</button>
        </div>
      </div>

      <!-- Project not found -->
      <div v-if="!project" class="py-12 text-center">
        <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          {{ getTranslation('project_detail_not_found_title') }}
        </h1>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          {{ getTranslation('project_detail_not_found_prefix') }} "{{ projectId }}" {{ getTranslation('project_detail_not_found_suffix') }}
        </p>
        <button
          @click="handleBack"
          class="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-[#00890D] rounded-lg hover:bg-[#006B0A]"
        >
          {{ getTranslation('project_detail_back_to_projects') }}
        </button>
      </div>

      <!-- Project detail -->
      <template v-else>
        <!-- Header -->
        <div class="mb-8">
          <div class="mb-4">
            <span class="inline-block px-3 py-1 text-xs font-semibold text-white bg-[#00890D] rounded-full">
              {{ projectCategory }}
            </span>
          </div>
          <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            {{ project.title }}
          </h1>

          <!-- Meta info -->
          <div class="flex flex-col sm:flex-row gap-6 text-sm text-gray-600 dark:text-gray-300">
            <div>
              <span class="font-semibold text-gray-900 dark:text-white">{{ getTranslation('portfolio_category_label') }}</span>
              <span class="ml-2">{{ projectCategory }}</span>
            </div>
          </div>
        </div>

        <!-- Project image -->
        <div class="mb-12 rounded-lg overflow-hidden shadow-lg">
          <img
            :src="project.image"
            :alt="project.imageAlt"
            class="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        <!-- Full description -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 mb-8">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">{{ getTranslation('project_detail_about') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {{ projectDescription }}
          </p>

          <div v-if="project.features?.length" class="mb-6">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">{{ getTranslation('project_detail_features') }}</h3>
            <ul class="space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside">
              <li v-for="feature in projectFeatures" :key="feature">{{ feature }}</li>
            </ul>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div>
              <p class="text-sm font-semibold text-gray-500 dark:text-gray-400">{{ getTranslation('project_detail_id') }}</p>
              <p class="text-lg font-bold text-gray-900 dark:text-white">{{ project.id }}</p>
            </div>
            <div>
              <p class="text-sm font-semibold text-gray-500 dark:text-gray-400">{{ getTranslation('project_detail_duration') }}</p>
              <p class="text-lg font-bold text-gray-900 dark:text-white">
                {{ project.periodStart }} - {{ project.periodEnd }}
              </p>
            </div>
          </div>

          <!-- Landing page URL button -->
          <div v-if="project.landingPageUrl" class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <a
              :href="project.landingPageUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-[#00890D] rounded-lg hover:bg-[#006B0A] transition-colors"
            >
              {{ getTranslation('project_detail_visit_landing') }}
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        <!-- CTA section -->
        <div class="bg-[#00890D] rounded-lg shadow-lg p-8 text-center text-white">
          <h2 class="text-2xl font-bold mb-4">{{ getTranslation('project_detail_cta_title') }}</h2>
          <p class="mb-6 text-[#EFC000]">{{ getTranslation('project_detail_cta_desc') }}</p>
          <a
            href="/#contact"
            class="inline-flex items-center px-6 py-3 text-sm font-semibold text-[#00890D] bg-[#EFC000] rounded-lg hover:bg-yellow-400"
          >
            {{ getTranslation('project_detail_cta_button') }}
          </a>
        </div>
      </template>
    </section>
  </main>
</template>
