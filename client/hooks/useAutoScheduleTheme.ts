import { useEffect } from 'react';

interface UseAutoScheduleThemeProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  startHour?: number; // Hour when dark mode starts (0-23)
  endHour?: number; // Hour when dark mode ends (0-23)
}

/**
 * Hook to automatically switch between light and dark themes based on time of day
 * Default: Dark mode from 6 PM (18:00) to 6 AM (06:00)
 */
export function useAutoScheduleTheme({
  isDark,
  setIsDark,
  startHour = 18, // 6 PM
  endHour = 6, // 6 AM
}: UseAutoScheduleThemeProps) {
  useEffect(() => {
    // Check if user has manually set a preference recently
    const lastManualSwitch = localStorage.getItem('lastManualThemeSwitch');
    const now = Date.now();
    const thirtyMinutesAgo = now - 30 * 60 * 1000;

    // If user manually switched theme in last 30 minutes, don't auto-switch
    if (lastManualSwitch && parseInt(lastManualSwitch) > thirtyMinutesAgo) {
      return;
    }

    const updateTheme = () => {
      const currentHour = new Date().getHours();

      // Determine if dark mode should be active
      const shouldBeDark =
        startHour < endHour
          ? currentHour >= startHour && currentHour < endHour
          : currentHour >= startHour || currentHour < endHour;

      if (shouldBeDark !== isDark) {
        setIsDark(shouldBeDark);
        localStorage.setItem('theme', shouldBeDark ? 'dark' : 'light');
      }
    };

    // Update immediately
    updateTheme();

    // Check every minute for theme changes
    const interval = setInterval(updateTheme, 60 * 1000);

    return () => clearInterval(interval);
  }, [isDark, setIsDark, startHour, endHour]);
}
