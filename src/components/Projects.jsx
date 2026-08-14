import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, ArrowRight } from 'lucide-react';
import { Github } from './Icons';
import { flagshipProjects, secondaryProjects } from '../data/portfolio';
import './Projects.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-img-wrap">
        <img
          src={project.image}
          alt={project.title}
          className="project-img"
          loading="lazy"
        />
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        
        {project.tech && (
          <div className="project-tags">
            {project.tech.map((t) => (
              <span key={t} className="project-tag-pill">
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="project-links">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-btn"
            >
              <Globe size={14} />
              Website
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-btn"
            >
              <Github size={14} />
              Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'others', label: 'Others' },
];

const Projects = ({ isHomePreview = false }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  if (isHomePreview) {
    // Show the 2 flagship full-stack projects prominently
    return (
      <section className="section" id="projects">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Flagship full-stack applications with production architecture</p>
        
        <div className="projects-grid">
          {flagshipProjects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

        <div className="view-all-projects-wrap">
          <Link to="/projects" className="btn btn-outline">
            <span>Explore all projects & experiments ({flagshipProjects.length + secondaryProjects.length})</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    );
  }

  // Full projects page with all projects
  const allProjects = [...flagshipProjects, ...secondaryProjects];
  const filtered = activeFilter === 'all'
    ? allProjects
    : allProjects.filter((p) => (p.category || 'frontend').toLowerCase() === activeFilter.toLowerCase());

  return (
    <section className="section">
      <h1 className="section-title" style={{ fontSize: '1.85rem', marginBottom: '0.5rem' }}>
        Projects & Work
      </h1>
      <p className="section-subtitle">
        A complete archive of full-stack systems, frontend interfaces, and hackathon prototypes.
      </p>

      <div className="project-filters-bar">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            className={`filter-tab ${activeFilter === f.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
