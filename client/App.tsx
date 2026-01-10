import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useAutoScheduleTheme } from "./hooks/useAutoScheduleTheme";

const queryClient = new QueryClient();

const AppContent = () => {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first
    const saved = localStorage.getItem("theme");
    if (saved) {
      return saved === "dark";
    }
    // Check system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Auto-schedule dark mode from 6 PM to 6 AM
  useAutoScheduleTheme({
    isDark,
    setIsDark,
    startHour: 18, // 6 PM
    endHour: 6, // 6 AM
  });

  useEffect(() => {
    // Update localStorage and DOM
    localStorage.setItem("theme", isDark ? "dark" : "light");
    // Record manual switch timestamp
    localStorage.setItem("lastManualThemeSwitch", Date.now().toString());
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const handleThemeToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index isDark={isDark} onThemeToggle={handleThemeToggle} />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppContent />
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
