type AnalyticsEventParams = Record<string, string | number | boolean>;

export function setupFormTracking() {
  const analyticsConfig = window.JDT_ANALYTICS_CONFIG || {};
  const measurementId = analyticsConfig.measurementId || '';
  const formEndpoint = (analyticsConfig.formEndpoint || '').trim();
  const form = document.getElementById('contact-form') as HTMLFormElement | null;
  const successMessage = document.getElementById('success-message') as HTMLElement | null;
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

  if (!form || !successMessage) {
    return;
  }

  if (formEndpoint && formEndpoint.includes('formspree.io/f/')) {
    form.action = formEndpoint;
  }

  let formStartTracked = false;
  const formFields = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea');

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
