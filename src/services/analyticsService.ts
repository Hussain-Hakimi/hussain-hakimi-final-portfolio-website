export function trackEvent(name: string, parameters: Record<string, string | number | boolean> = {}) {
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  gtag?.('event', name, parameters);
}
