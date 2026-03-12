/// <reference types="vite/client" />

declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params?: Record<string, string | number | boolean>
    ) => void;
    JDT_ANALYTICS_CONFIG?: {
      measurementId?: string;
    };
  }
}

export {};
