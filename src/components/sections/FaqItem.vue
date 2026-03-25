<script setup lang="ts">
const props = defineProps<{
  id: string;
  questionKey: string;
  answerKeys: readonly string[];
  expanded?: boolean;
}>();

const headingId = `accordion-flush-heading-${props.id}`;
const bodyId = `accordion-flush-body-${props.id}`;
const bodySelector = `#${bodyId}`;
</script>

<template>
  <h3 :id="headingId">
    <button
      type="button"
      class="flex items-center justify-between w-full py-5 font-medium text-left border-b border-gray-200 dark:border-gray-700"
      :class="
        expanded
          ? 'text-gray-900 bg-white dark:border-gray-700 dark:bg-gray-900 dark:text-white'
          : 'text-gray-500 dark:text-gray-400'
      "
      :data-accordion-target="bodySelector"
      :aria-expanded="expanded ? 'true' : 'false'"
      :aria-controls="bodyId"
    >
      <span :data-i18n="questionKey">&nbsp;</span>
      <svg
        data-accordion-icon=""
        class="w-6 h-6 shrink-0"
        :class="expanded ? 'rotate-180' : ''"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  </h3>
  <div :id="bodyId" :class="expanded ? '' : 'hidden'" :aria-labelledby="headingId">
    <div class="py-5 border-b border-gray-200 dark:border-gray-700">
      <p
        v-for="(answerKey, index) in answerKeys"
        :key="answerKey"
        :data-i18n="answerKey"
        class="text-gray-500 dark:text-gray-400"
        :class="index < answerKeys.length - 1 ? 'mb-2' : ''"
      >
        &nbsp;
      </p>
    </div>
  </div>
</template>
