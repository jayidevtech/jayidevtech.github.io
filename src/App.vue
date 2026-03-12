<script setup lang="ts">
import { nextTick, onMounted } from 'vue';
import { initFlowbite } from 'flowbite';
import LandingContent from './components/LandingContent.vue';

type AnalyticsEventParams = Record<string, string | number | boolean>;

function setupLandingInteractions() {
  const analyticsConfig = window.JDT_ANALYTICS_CONFIG || {};
  const measurementId = analyticsConfig.measurementId || '';
  const form = document.getElementById('contact-form') as HTMLFormElement | null;
  const successMessage = document.getElementById('success-message') as HTMLElement | null;
  const mobileMenu = document.getElementById('mobile-menu-2') as HTMLElement | null;
  const mobileMenuToggle = document.querySelector('[data-collapse-toggle="mobile-menu-2"]');
  const navAnchorLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
  const trackedElements = document.querySelectorAll<HTMLElement>('[data-track]');

  function trackEvent(eventName: string, eventParams?: AnalyticsEventParams): void {
    const canTrack =
      typeof window.gtag === 'function' && measurementId && measurementId !== 'G-XXXXXXXXXX';
    if (!canTrack) {
      return;
    }
    const gtag = window.gtag;
    if (!gtag) {
      return;
    }
    gtag('event', eventName, eventParams || {});
  }

  trackedElements.forEach((element) => {
    element.addEventListener('click', () => {
      const ctaName = element.getAttribute('data-track') || 'unknown_cta';
      trackEvent('cta_click', {
        cta_name: ctaName,
        page_location: window.location.href,
        link_target: element.getAttribute('href') || ''
      });
    });
  });

  navAnchorLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 1024 && mobileMenu && mobileMenuToggle) {
        mobileMenu.classList.add('hidden');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  if (form && successMessage) {
    let formStartTracked = false;
    const formFields = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
      'input, textarea'
    );

    formFields.forEach((field) => {
      field.addEventListener('focus', () => {
        if (!formStartTracked) {
          trackEvent('form_start', {
            form_id: 'contact-form',
            page_location: window.location.href
          });
          formStartTracked = true;
        }
      });
    });

    form.addEventListener('submit', function onSubmit(this: HTMLFormElement, event: SubmitEvent) {
      const action = this.action || '';
      const isFormspreeEndpoint = action.includes('formspree.io/f/');
      const isPlaceholderEndpoint = action.includes('YOUR_FORM_ID');

      if (isPlaceholderEndpoint) {
        trackEvent('generate_lead', {
          form_id: 'contact-form',
          submission_type: 'demo_mode',
          submission_status: 'success'
        });
        event.preventDefault();
        successMessage.classList.remove('hidden');
        form.reset();
        setTimeout(() => {
          successMessage.classList.add('hidden');
        }, 5000);
        successMessage.scrollIntoView({ behavior: 'smooth' });
        return false;
      }

      if (!isFormspreeEndpoint) {
        trackEvent('generate_lead', {
          form_id: 'contact-form',
          submission_type: 'custom_endpoint',
          submission_status: 'success'
        });
        event.preventDefault();
        successMessage.classList.remove('hidden');
        form.reset();
        setTimeout(() => {
          successMessage.classList.add('hidden');
        }, 5000);
        successMessage.scrollIntoView({ behavior: 'smooth' });
        return false;
      }

      trackEvent('generate_lead', {
        form_id: 'contact-form',
        submission_type: 'formspree',
        submission_status: 'submitted'
      });

      return true;
    });
  }
}

onMounted(async () => {
  await nextTick();

  if (typeof initFlowbite === 'function') {
    initFlowbite();
  }

  setupLandingInteractions();
});
</script>

<template>
  <LandingContent />
</template>
