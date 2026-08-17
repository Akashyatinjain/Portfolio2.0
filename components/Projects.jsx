'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Globe, ArrowRight } from 'lucide-react';
import { Github } from './Icons';
import { flagshipProjects, secondaryProjects } from '../data/portfolio';

const ProjectCard = ({ project }) => {
  return (
    <article className="project-card">
      <div className="project-img-wrap">
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          className="project-img"
          loading="lazy"
          decoding="async"
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
              className="project-link-btn project-link-primary"
              aria-label={`View ${project.title} live demo (opens in new tab)`}
            >
              <Globe size={14} aria-hidden="true" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-btn"
              aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
            >
              <Github size={14} aria-hidden="true" />
              Source
            </a>
          )}
        </div>
      </div>
    </article>
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
          <Link href="/projects" className="btn btn-outline" aria-label="Explore all projects">
            <span>Explore all projects ({flagshipProjects.length + secondaryProjects.length})</span>
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
    );
  }

  const allProjects = [...flagshipProjects, ...secondaryProjects];
  const filtered = activeFilter === 'all'
    ? allProjects
    : allProjects.filter((p) => (p.category || 'frontend').toLowerCase() === activeFilter.toLowerCase());

  return (
    <section className="section">
      <h1 className="projects-page-title">Projects & Work</h1>
      <p className="section-subtitle">
        A complete archive of full-stack systems, frontend interfaces, and hackathon prototypes.
      </p>

      <div className="project-filters-bar" role="tablist" aria-label="Filter projects by category">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            role="tab"
            aria-selected={activeFilter === f.id}
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
