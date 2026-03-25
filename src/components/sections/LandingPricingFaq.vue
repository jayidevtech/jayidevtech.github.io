<script setup lang="ts">
import FaqItem from './FaqItem.vue';
import PricingCard from './PricingCard.vue';

const pricingPlans = [
  {
    title: 'Starter',
    descriptionKey: 'pricing_starter_desc',
    price: '$29',
    featureKeys: [
      'pricing_feature_1',
      'pricing_feature_2',
      'pricing_feature_team_1',
      'pricing_feature_support_6',
      'pricing_feature_updates_6'
    ]
  },
  {
    title: 'Company',
    descriptionKey: 'pricing_company_desc',
    price: '$99',
    featureKeys: [
      'pricing_feature_1',
      'pricing_feature_2',
      'pricing_feature_team_10',
      'pricing_feature_support_24',
      'pricing_feature_updates_24'
    ]
  },
  {
    title: 'Enterprise',
    descriptionKey: 'pricing_enterprise_desc',
    price: '$499',
    featureKeys: [
      'pricing_feature_1',
      'pricing_feature_2',
      'pricing_feature_team_100',
      'pricing_feature_support_36',
      'pricing_feature_updates_36'
    ]
  }
] as const;

const faqItems = [
  {
    id: '1',
    questionKey: 'faq_q1',
    answerKeys: ['faq_a1_1', 'faq_a1_2'],
    expanded: true
  },
  {
    id: '2',
    questionKey: 'faq_q2',
    answerKeys: ['faq_a2'],
    expanded: false
  },
  {
    id: '3',
    questionKey: 'faq_q3',
    answerKeys: ['faq_a3'],
    expanded: false
  },
  {
    id: '4',
    questionKey: 'faq_q4',
    answerKeys: ['faq_a4'],
    expanded: false
  }
] as const;
</script>

<template>
  <section id="pricing" class="bg-white dark:bg-gray-900">
    <div class="max-w-7xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
      <div class="max-w-3xl mx-auto mb-8 text-center lg:mb-12">
        <h2
          class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          data-i18n="pricing_title"
        >
          Flexible Pricing for Your Needs
        </h2>
        <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400" data-i18n="pricing_desc">
          Whether you're a startup or an enterprise, we have the right solution for you. All plans
          include dedicated support and modern technology stack.
        </p>
      </div>
      <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        <PricingCard
          v-for="plan in pricingPlans"
          :key="plan.title"
          :title="plan.title"
          :description-key="plan.descriptionKey"
          :price="plan.price"
          :feature-keys="plan.featureKeys"
        />
      </div>
    </div>
  </section>

  <section id="faq" class="bg-white dark:bg-gray-900">
    <div class="max-w-7xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6">
      <h2
        class="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white"
        data-i18n="faq_title"
      >
        Frequently asked questions
      </h2>
      <div class="max-w-3xl mx-auto">
        <div
          id="accordion-flush"
          data-accordion="collapse"
          data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          data-inactive-classes="text-gray-500 dark:text-gray-400"
        >
          <FaqItem
            v-for="item in faqItems"
            :key="item.id"
            :id="item.id"
            :question-key="item.questionKey"
            :answer-keys="item.answerKeys"
            :expanded="item.expanded"
          />
        </div>
      </div>
    </div>
  </section>
</template>
