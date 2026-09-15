'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, FolderGit2, User, Briefcase, Mail, FileText, Sun, Moon } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { profile } from '../data/portfolio';

const FloatingDock = ({ theme, toggleTheme }) => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setIsVisible(true);
        setActiveSection('home');
        lastScrollY.current = currentScrollY;
        return;
      }

      // Check which section is in view on the home page
      if (pathname === '/') {
        const sections = ['contact', 'experience', 'about', 'projects'];
        for (const secId of sections) {
          const el = document.getElementById(secId);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.45) {
              setActiveSection(secId);
              break;
            }
          }
        }
      }

      const isBottom = window.innerHeight + currentScrollY >= document.documentElement.scrollHeight - 60;
      if (isBottom) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Scroll up/down logic
      if (currentScrollY > lastScrollY.current + 10) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current - 10) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const isHome = pathname === '/';

  return (
    <nav
      className={`floating-dock-container ${isVisible ? 'dock-visible' : 'dock-hidden'}`}
      aria-label="Quick site navigation and links"
    >
      <div className="dock-nav-group" role="menubar">
        <Link
          href="/"
          className={`dock-item ${isHome && activeSection === 'home' ? 'active' : ''}`}
          aria-label="Home section"
          role="menuitem"
        >
          <Home size={17} aria-hidden="true" />
          <span className="dock-tooltip">Home</span>
        </Link>

        <a
          href={isHome ? '#projects' : '/#projects'}
          className={`dock-item ${isHome && activeSection === 'projects' ? 'active' : ''}`}
          aria-label="Featured Projects section"
          role="menuitem"
        >
          <FolderGit2 size={17} aria-hidden="true" />
          <span className="dock-tooltip">Projects</span>
        </a>

        <a
          href={isHome ? '#about' : '/#about'}
          className={`dock-item ${isHome && activeSection === 'about' ? 'active' : ''}`}
          aria-label="About section"
          role="menuitem"
        >
          <User size={17} aria-hidden="true" />
          <span className="dock-tooltip">About</span>
        </a>

        <a
          href={isHome ? '#experience' : '/#experience'}
          className={`dock-item ${isHome && activeSection === 'experience' ? 'active' : ''}`}
          aria-label="Experience & Leadership section"
          role="menuitem"
        >
          <Briefcase size={17} aria-hidden="true" />
          <span className="dock-tooltip">Experience</span>
        </a>

        <a
          href={isHome ? '#contact' : '/#contact'}
          className={`dock-item ${isHome && activeSection === 'contact' ? 'active' : ''}`}
          aria-label="Contact section"
          role="menuitem"
        >
          <Mail size={17} aria-hidden="true" />
          <span className="dock-tooltip">Contact</span>
        </a>
      </div>

      <div className="dock-divider" aria-hidden="true" />

      <div className="dock-actions-group">
        <a
          href="/resume/Resume.pdf?v=latest"
          target="_blank"
          rel="noopener noreferrer"
          className="dock-item"
          aria-label="Download Resume PDF (opens in new tab)"
        >
          <FileText size={17} aria-hidden="true" />
          <span className="dock-tooltip">Resume</span>
        </a>

        <a
          href={profile.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="dock-item dock-external-item"
          aria-label="GitHub profile (opens in new tab)"
        >
          <Github size={17} aria-hidden="true" />
          <span className="dock-tooltip">GitHub</span>
        </a>

        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="dock-item dock-external-item"
          aria-label="LinkedIn profile (opens in new tab)"
        >
          <Linkedin size={17} aria-hidden="true" />
          <span className="dock-tooltip">LinkedIn</span>
        </a>

        <button
          type="button"
          onClick={toggleTheme}
          className="dock-item theme-toggle-btn"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? <Moon size={17} aria-hidden="true" /> : <Sun size={17} aria-hidden="true" />}
          <span className="dock-tooltip">{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
        </button>
      </div>
    </nav>
  );
};

export default FloatingDock;
