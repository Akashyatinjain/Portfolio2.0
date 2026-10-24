'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import FloatingDock from './FloatingDock';

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export default function ClientProviders({ children }) {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio_theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('portfolio_theme', nextTheme);
  };

  // Scroll reveal observer
  useEffect(() => {
    const sections = document.querySelectorAll('.section[id]');
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    sections.forEach((s) => {
      s.classList.add('reveal');
      observer.observe(s);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="page-container">
        <main id="main-content">{children}</main>
        <FloatingDock theme={theme} toggleTheme={toggleTheme} />
      </div>
    </ThemeContext.Provider>
  );
}
