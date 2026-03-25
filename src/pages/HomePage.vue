<script setup lang="ts">
import { nextTick, onMounted, onUnmounted } from 'vue';
import { initFlowbite } from 'flowbite';
import LandingContent from '../components/LandingContent.vue';
import { setupLocalization } from '../composables/useLocalization';
import { setupLandingInteractions } from '../composables/useLandingInteractions';

let cleanupLandingInteractions: (() => void) | undefined;

onMounted(async () => {
  await nextTick();

  setupLocalization();

  if (typeof initFlowbite === 'function') {
    initFlowbite();
  }

  cleanupLandingInteractions = setupLandingInteractions();
});

onUnmounted(() => {
  cleanupLandingInteractions?.();
  cleanupLandingInteractions = undefined;
});
</script>

<template>
  <LandingContent />
</template>
