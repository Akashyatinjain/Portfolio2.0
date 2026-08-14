import React from 'react';
import { FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profile } from '../data/portfolio';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-text-content">
        <h1 className="hero-title">
          Hi, I'm Akash <span className="wave-hand">👋</span>
        </h1>
        <p className="hero-tagline">{profile.tagline}</p>
        <p className="hero-subbio">{profile.heroBio}</p>
        <div className="hero-actions-row">
          <a
            href="/resume/Resume.pdf?v=latest"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark"
          >
            <FileText size={16} />
            Download Resume
          </a>
          <Link to="/projects" className="btn btn-outline">
            View Projects
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      <div className="hero-avatar-wrapper">
        <img
          src={profile.avatar || '/avatar.png'}
          alt={profile.name}
          className="hero-avatar-img"
        />
      </div>
    </section>
  );
};

export default Hero;
