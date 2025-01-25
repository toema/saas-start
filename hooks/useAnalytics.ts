import { logEvent, identifyUser } from '@/lib/analytics';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

export const useAnalytics = () => {
  const { data: session } = useSession();

  useEffect(() => {
    // Identify user when session changes
    if (session?.user?.id) {
      identifyUser(session.user.id);
    }
  }, [session]);

  return {
    trackEvent: (action: string, category: string, label: string, value?: number) => {
      logEvent(action, category, label, value);
    },
  };
};