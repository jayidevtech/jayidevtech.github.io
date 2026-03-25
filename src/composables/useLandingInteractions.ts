import { setupActiveNav } from './useActiveNav';
import { setupFormTracking } from './useFormTracking';
import { setupMenuState } from './useMenuState';

export function setupLandingInteractions() {
  setupMenuState();
  const cleanupActiveNav = setupActiveNav();
  setupFormTracking();

  return () => {
    cleanupActiveNav?.();
  };
}
