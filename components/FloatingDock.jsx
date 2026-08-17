'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, FolderGit2, FileText, Sun, Moon } from 'lucide-react';
import { Github, Linkedin, Leetcode } from './Icons';
import { profile } from '../data/portfolio';

const FloatingDock = ({ theme, toggleTheme }) => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // If at or near top of the page, keep it visible
      if (currentScrollY < 40) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // If user reaches near the bottom of the page, show it
      const isBottom = window.innerHeight + currentScrollY >= document.documentElement.scrollHeight - 50;
      if (isBottom) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Scrolling down -> hide dock to avoid covering content
      if (currentScrollY > lastScrollY.current + 8) {
        setIsVisible(false);
      } 
      // Scrolling up -> reveal dock for navigation
      else if (currentScrollY < lastScrollY.current - 8) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`floating-dock-container ${isVisible ? 'dock-visible' : 'dock-hidden'}`}
      aria-label="Floating Quick Navigation"
    >
      <Link
        href="/"
        className={`dock-item ${pathname === '/' ? 'active' : ''}`}
        aria-label="Home"
      >
        <Home size={18} />
        <span className="dock-tooltip">Home</span>
      </Link>

      <Link
        href="/projects"
        className={`dock-item ${pathname === '/projects' ? 'active' : ''}`}
        aria-label="Projects"
      >
        <FolderGit2 size={18} />
        <span className="dock-tooltip">Projects</span>
      </Link>

      <a
        href="/resume/Resume.pdf?v=latest"
        target="_blank"
        rel="noopener noreferrer"
        className="dock-item"
        aria-label="Resume"
      >
        <FileText size={18} />
        <span className="dock-tooltip">Resume</span>
      </a>

      <div className="dock-divider" />

      <a
        href={profile.links.github}
        target="_blank"
        rel="noopener noreferrer"
        className="dock-item"
        aria-label="GitHub"
      >
        <Github size={18} />
        <span className="dock-tooltip">GitHub</span>
      </a>

      <a
        href={profile.links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="dock-item"
        aria-label="LinkedIn"
      >
        <Linkedin size={18} />
        <span className="dock-tooltip">LinkedIn</span>
      </a>

      <a
        href={profile.links.leetcode}
        target="_blank"
        rel="noopener noreferrer"
        className="dock-item"
        aria-label="LeetCode"
      >
        <Leetcode size={18} />
        <span className="dock-tooltip">LeetCode</span>
      </a>

      <div className="dock-divider" />

      <button
        type="button"
        onClick={toggleTheme}
        className="dock-item"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      >
        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        <span className="dock-tooltip">{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
      </button>
    </nav>
  );
};

export default FloatingDock;
