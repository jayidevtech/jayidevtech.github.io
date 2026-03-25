<script setup lang="ts">
import { projects } from '../data/projects';

const projectList = projects;
</script>

<template>
  <main class="min-h-screen py-10 bg-gray-50 dark:bg-gray-900">
    <section class="max-w-7xl px-4 mx-auto lg:px-6">
      <div class="flex flex-col gap-4 mb-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p class="text-sm font-semibold tracking-wide text-[#00890D] uppercase">JAYIDEVTECH</p>
          <h1 class="text-3xl font-extrabold text-gray-900 dark:text-white">All Projects</h1>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Showing {{ projectList.length }} ongoing and completed projects.
          </p>
        </div>
        <RouterLink
          to="/"
          class="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#00890D] rounded-lg hover:bg-[#006B0A] focus:ring-4 focus:ring-[#00890D]/30"
        >
          Back to Landing
        </RouterLink>
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
            class="object-cover w-full h-48"
            loading="lazy"
            decoding="async"
          />
          <div class="p-5 border-t-4 border-[#EFC000]">
            <h2 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">{{ project.title }}</h2>
            <p class="mb-4 text-sm text-gray-600 dark:text-gray-300">{{ project.description }}</p>

            <div class="space-y-1 mb-5 text-sm text-gray-700 dark:text-gray-300">
              <p>
                <span class="font-semibold">Category:</span>
                <span class="ml-1 capitalize">{{ project.category }}</span>
              </p>
              <p>
                <span class="font-semibold">Start:</span>
                <span class="ml-1">{{ project.periodStart }}</span>
              </p>
              <p>
                <span class="font-semibold">End:</span>
                <span class="ml-1">{{ project.periodEnd }}</span>
              </p>
            </div>

            <a
              :href="project.detailHref"
              class="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-[#00890D] rounded-lg hover:bg-[#006B0A] focus:ring-4 focus:ring-[#00890D]/30"
            >
              View Project Detail
            </a>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>
