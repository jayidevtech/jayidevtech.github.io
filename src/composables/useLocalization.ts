import { ref } from 'vue';
import { LOCAL_STORAGE_LANG_KEY, translations, type Locale } from '../localization/translations';

let currentLocale = ref<Locale>('en');

function getSystemLocale(): Locale {
  const browserLocales = navigator.languages && navigator.languages.length > 0
    ? navigator.languages
    : [navigator.language];

  return browserLocales.some((locale) => locale.toLowerCase().startsWith('id')) ? 'id' : 'en';
}

function resolveInitialLocale(): Locale {
  const savedLocale = localStorage.getItem(LOCAL_STORAGE_LANG_KEY);
  if (savedLocale === 'id' || savedLocale === 'en') {
    return savedLocale;
  }

  return getSystemLocale();
}

function applyLocalization(locale: Locale): void {
  const dict = translations[locale];

  document.documentElement.lang = locale;

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (!key || !Object.prototype.hasOwnProperty.call(dict, key)) {
      return;
    }
    element.textContent = dict[key];
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-html]').forEach((element) => {
    const key = element.dataset.i18nHtml;
    if (!key || !Object.prototype.hasOwnProperty.call(dict, key)) {
      return;
    }
    element.innerHTML = dict[key];
  });

  document
    .querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[data-i18n-placeholder]')
    .forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      if (!key || !Object.prototype.hasOwnProperty.call(dict, key)) {
        return;
      }
      element.placeholder = dict[key];
    });

  document.querySelectorAll<HTMLButtonElement>('[data-lang-switch]').forEach((button) => {
    const buttonLocale = button.dataset.langSwitch;
    const isActive = buttonLocale === locale;
    button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    button.classList.toggle('bg-gray-900', isActive);
    button.classList.toggle('text-white', isActive);
    button.classList.toggle('dark:bg-white', isActive);
    button.classList.toggle('dark:text-gray-900', isActive);
    button.classList.toggle('bg-transparent', !isActive);
    button.classList.toggle('text-gray-600', !isActive);
    button.classList.toggle('dark:text-gray-300', !isActive);
  });
}

export function setupLocalization(): void {
  const initialLocale = resolveInitialLocale();
  currentLocale.value = initialLocale;
  applyLocalization(initialLocale);

  document.querySelectorAll<HTMLButtonElement>('[data-lang-switch]').forEach((button) => {
    button.addEventListener('click', () => {
      const locale = button.dataset.langSwitch;
      if (locale !== 'id' && locale !== 'en') {
        return;
      }
      currentLocale.value = locale;
      localStorage.setItem(LOCAL_STORAGE_LANG_KEY, locale);
      applyLocalization(locale);
    });
  });
}

export function getTranslation(key: string): string {
  const locale = currentLocale.value;
  const dict = translations[locale];
  return Object.prototype.hasOwnProperty.call(dict, key)
    ? (dict as Record<string, string>)[key]
    : key;
}
