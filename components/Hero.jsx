import React from 'react';
import { FileText, ArrowRight, MapPin, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { profile } from '../data/portfolio';

const Hero = () => {
  return (
    <section className="hero-container" aria-label="Introduction">
      <div className="hero-text-content">
        <div className="hero-status-badge animate-in">
          <span className="status-dot-pulse" aria-hidden="true" />
          <span>{profile.available || 'Open to internships · 2026'}</span>
        </div>

        <h1 className="hero-title animate-in animate-in-delay-1">
          Hi, I'm Akash Jain <span className="wave-hand" role="img" aria-label="Waving hand">👋</span>
        </h1>
        <p className="hero-tagline animate-in animate-in-delay-2">{profile.tagline}</p>
        <p className="hero-subbio animate-in animate-in-delay-2">{profile.heroBio}</p>

        <div className="hero-meta-row animate-in animate-in-delay-3">
          <span className="hero-meta-item">
            <MapPin size={13} aria-hidden="true" />
            <span>Mumbai, India (IST)</span>
          </span>
          <span className="hero-meta-divider" aria-hidden="true">·</span>
          <span className="hero-meta-item">
            <Sparkles size={13} aria-hidden="true" />
            <span>SFIT IT Undergrad · 8.50 CGPA</span>
          </span>
        </div>

        <div className="hero-actions-row animate-in animate-in-delay-4">
          <a
            href="/resume/Resume.pdf?v=latest"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark"
            aria-label="Download Akash Jain's Resume PDF (opens in new tab)"
          >
            <FileText size={15} aria-hidden="true" />
            Download Resume
          </a>
          <Link href="/projects" className="btn btn-outline" aria-label="View all projects">
            View Projects
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="hero-avatar-wrapper animate-in animate-in-delay-1">
        <div className="hero-avatar-ring">
          <img
            src={profile.avatar || '/avatar.png'}
            alt={profile.name}
            className="hero-avatar-img"
            width="130"
            height="130"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
