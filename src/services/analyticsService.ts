const DEFAULT_MEASUREMENT_ID = 'G-2L3M48JG71';

let initialized = false;

export function initAnalytics() {
  if (initialized || typeof window === 'undefined') return;

  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || DEFAULT_MEASUREMENT_ID;
  if (!measurementId) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args);
  };

  const existingScript = document.querySelector<HTMLScriptElement>('script[data-google-analytics]');
  if (!existingScript) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    script.dataset.googleAnalytics = 'true';
    document.head.appendChild(script);
  }

  window.gtag('js', new Date());
  window.gtag('config', measurementId);
  initialized = true;
}

export function trackEvent(name: string, parameters: Record<string, string | number | boolean> = {}) {
  window.gtag?.('event', name, parameters);
}

declare global {
  interface Window {
    dataLayer?: unknown[][];
    gtag?: (...args: unknown[]) => void;
  }
}
