import React from 'react';
import { FileText, ArrowRight, MapPin, GraduationCap, Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { profile } from '../data/portfolio';

const Hero = () => {
  return (
    <section className="hero-container" aria-label="Introduction">
      <div className="hero-text-content">
        <div className="hero-status-badge animate-in">
          <span className="status-dot-pulse" aria-hidden="true" />
          <span>{profile.available}</span>
        </div>

        <h1 className="hero-title animate-in animate-in-delay-1">
          Hi, I'm Akash Jain <span className="wave-hand" role="img" aria-label="Waving hand">👋</span>
        </h1>
        <p className="hero-tagline animate-in animate-in-delay-2">{profile.tagline}</p>
        <p className="hero-subbio animate-in animate-in-delay-2">{profile.heroBio}</p>

        <div className="hero-meta-row animate-in animate-in-delay-3">
          <span className="hero-meta-item">
            <MapPin size={13} aria-hidden="true" />
            <span>{profile.location}</span>
          </span>
          <span className="hero-meta-divider" aria-hidden="true">·</span>
          <span className="hero-meta-item">
            <GraduationCap size={14} aria-hidden="true" />
            <span>{profile.educationMeta}</span>
          </span>
        </div>

        <div className="hero-actions-row animate-in animate-in-delay-4">
          <a href="#projects" className="btn btn-dark" aria-label="View featured projects">
            View Projects
            <ArrowRight size={14} aria-hidden="true" />
          </a>
          <a href="#contact" className="btn btn-outline" aria-label="Start a freelance project or discuss an opportunity">
            Start a Project
          </a>
          <a
            href="/resume/Resume.pdf?v=latest"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
            aria-label="Download Akash Jain's Resume PDF (opens in new tab)"
          >
            <FileText size={14} aria-hidden="true" />
            Resume
          </a>
        </div>

        <div className="hero-social-links animate-in animate-in-delay-4">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
            aria-label="GitHub profile (opens in new tab)"
          >
            <Github size={15} aria-hidden="true" />
            <span>GitHub</span>
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
            aria-label="LinkedIn profile (opens in new tab)"
          >
            <Linkedin size={15} aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hero-social-link"
            aria-label={`Send email to ${profile.email}`}
          >
            <Mail size={15} aria-hidden="true" />
            <span>Email</span>
          </a>
        </div>
      </div>

      <div className="hero-avatar-wrapper animate-in animate-in-delay-1">
        <div className="hero-avatar-ring">
          <img
            src={profile.avatar || '/avatar.png'}
            alt={`${profile.name} — Full-Stack Developer & Freelancer`}
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
