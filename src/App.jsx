import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import FloatingDock from './components/FloatingDock';
import './App.css';

function ScrollRevealProvider({ children }) {
  const location = useLocation();

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
  }, [location.pathname]);

  return children;
}

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio_theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <BrowserRouter>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <ScrollRevealProvider>
        <div className="page-container">
          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
          </main>
          <FloatingDock theme={theme} toggleTheme={toggleTheme} />
        </div>
      </ScrollRevealProvider>
    </BrowserRouter>
  );
}

export default App;
