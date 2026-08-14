import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, FolderGit2, FileText, Sun, Moon } from 'lucide-react';
import { Github, Linkedin, Leetcode } from './Icons';
import { profile } from '../data/portfolio';
import './FloatingDock.css';

const FloatingDock = ({ theme, toggleTheme }) => {
  const location = useLocation();

  return (
    <nav className="floating-dock-container" aria-label="Floating Quick Navigation">
      <Link
        to="/"
        className={`dock-item ${location.pathname === '/' ? 'active' : ''}`}
        aria-label="Home"
      >
        <Home size={18} />
        <span className="dock-tooltip">Home</span>
      </Link>

      <Link
        to="/projects"
        className={`dock-item ${location.pathname === '/projects' ? 'active' : ''}`}
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
