import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, Sun, Moon } from 'lucide-react';
import { profile } from '../data/portfolio';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="desktop-top-header">
      <div className="desktop-header-inner">
        <Link to="/" className="desktop-logo-link">
          <span>{profile.shortName}</span>
        </Link>

        <nav className="desktop-nav-links" aria-label="Main Navigation">
          <Link
            to="/"
            className={`desktop-nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={() => scrollToSection('about')}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={`desktop-nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
          >
            Projects
          </Link>
          <a
            href="/#experience"
            className="desktop-nav-link"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                scrollToSection('experience');
              }
            }}
          >
            Experience
          </a>
          <a
            href="/#developer-activity"
            className="desktop-nav-link"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                scrollToSection('developer-activity');
              }
            }}
          >
            DSA & Activity
          </a>
          <a
            href="/#contact"
            className="desktop-nav-link"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                scrollToSection('contact');
              }
            }}
          >
            Contact
          </a>
        </nav>

        <div className="desktop-header-actions">
          <button
            type="button"
            onClick={toggleTheme}
            className="btn btn-outline btn-sm"
            aria-label="Toggle Theme"
            style={{ padding: '0.4rem 0.6rem' }}
          >
            {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
          </button>
          <a
            href="/resume/Resume.pdf?v=latest"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark btn-sm"
          >
            <FileText size={14} />
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
