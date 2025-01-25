// lib/analytics.ts
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Initialize GA
export const initGA = () => {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', GA_TRACKING_ID);
};

// Log page views
export const logPageView = (url: string) => {
  if (typeof window === 'undefined') return;
  
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Log events
export const logEvent = (action: string, category: string, label: string, value?: number) => {
  if (typeof window === 'undefined') return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Log user identification
export const identifyUser = (userId: string) => {
  if (typeof window === 'undefined') return;

  window.gtag('set', { user_id: userId });
};

// Declare types for window object
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
