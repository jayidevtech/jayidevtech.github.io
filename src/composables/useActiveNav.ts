const normalizeNavTarget = (value: string): string => {
  const normalized = (value || '').trim().toLowerCase();

  if (!normalized || normalized === '#' || normalized === '/' || normalized === '#home') {
    return '/';
  }

  if (normalized.startsWith('#')) {
    return normalized;
  }

  return `#${normalized.replace(/^\//, '')}`;
};

export function setupActiveNav() {
  const sectionNavLinks = document.querySelectorAll<HTMLAnchorElement>(
    '#mobile-menu-2 a[data-i18n^="nav_"]:not([data-i18n="nav_get_started"])'
  );

  const updateActiveNavByTarget = (
    targetValue = window.location.hash || window.location.pathname
  ): void => {
    if (sectionNavLinks.length === 0) {
      return;
    }

    const activeTarget = normalizeNavTarget(targetValue);
    let hasActiveLink = false;

    sectionNavLinks.forEach((link) => {
      const href = link.getAttribute('href') || '';
      const isActive = normalizeNavTarget(href) === activeTarget;

      if (isActive) {
        hasActiveLink = true;
      }

      link.setAttribute('aria-current', isActive ? 'page' : 'false');
    });

    if (!hasActiveLink) {
      sectionNavLinks.forEach((link) => {
        const href = link.getAttribute('href') || '';
        link.setAttribute('aria-current', normalizeNavTarget(href) === '/' ? 'page' : 'false');
      });
    }
  };

  const sectionHashes = Array.from(sectionNavLinks)
    .map((link) => normalizeNavTarget(link.getAttribute('href') || ''))
    .filter((target) => target !== '/')
    .filter((hash, index, arr) => arr.indexOf(hash) === index);

  const sectionElements = sectionHashes
    .map((hash) => {
      const element = document.querySelector<HTMLElement>(hash);
      return element ? { hash, element } : null;
    })
    .filter((entry): entry is { hash: string; element: HTMLElement } => entry !== null);

  const syncActiveSection = (targetValue: string, updateUrl: boolean): void => {
    const normalizedTarget = normalizeNavTarget(targetValue);
    updateActiveNavByTarget(normalizedTarget);

    if (!updateUrl) {
      return;
    }

    if (window.location.pathname !== '/') {
      return;
    }

    if (normalizedTarget === '/') {
      if (window.location.hash) {
        history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
      }
      return;
    }

    if (window.location.hash !== normalizedTarget) {
      history.replaceState(null, '', normalizedTarget);
    }
  };

  const updateActiveSectionFromScroll = (): void => {
    if (sectionElements.length === 0) {
      return;
    }

    const offsetFromTop = 140;
    const scrollMarker = window.scrollY + offsetFromTop;
    let activeHash = '/';

    sectionElements.forEach(({ hash, element }) => {
      if (element.offsetTop <= scrollMarker) {
        activeHash = hash;
      }
    });

    syncActiveSection(activeHash, true);
  };

  let isScrollTicking = false;
  const onScrollOrResize = (): void => {
    if (isScrollTicking) {
      return;
    }

    isScrollTicking = true;
    window.requestAnimationFrame(() => {
      updateActiveSectionFromScroll();
      isScrollTicking = false;
    });
  };

  const onHashChange = () => {
    syncActiveSection(window.location.hash || '/', false);
  };

  window.addEventListener('hashchange', onHashChange);
  window.addEventListener('scroll', onScrollOrResize, { passive: true });
  window.addEventListener('resize', onScrollOrResize);

  syncActiveSection(window.location.hash || window.location.pathname || '/', false);
  updateActiveSectionFromScroll();

  return () => {
    window.removeEventListener('hashchange', onHashChange);
    window.removeEventListener('scroll', onScrollOrResize);
    window.removeEventListener('resize', onScrollOrResize);
  };
}
