export function setupMenuState() {
  const mobileMenu = document.getElementById('mobile-menu-2') as HTMLElement | null;
  const mobileMenuToggle = document.querySelector('[data-collapse-toggle="mobile-menu-2"]');
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"], a[href="/"]');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 1024 && mobileMenu && mobileMenuToggle) {
        mobileMenu.classList.add('hidden');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}
