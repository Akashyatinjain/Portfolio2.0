import React from 'react';
import { experience } from '../data/portfolio';

const getInitials = (name) => {
  if (!name) return 'EX';
  if (name.includes('IEEE')) return 'IEEE';
  const parts = name.split(' ');
  if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`;
  return name.slice(0, 2).toUpperCase();
};

const Experience = () => {
  return (
    <section className="section" id="experience" aria-label="Experience & Leadership">
      <h2 className="section-title">Experience & Leadership</h2>
      <div className="experience-list">
        {experience.map((item, index) => (
          <article key={index} className="experience-item">
            <div className="experience-logo" aria-hidden="true">
              {getInitials(item.organization)}
            </div>
            <div className="experience-details">
              <div className="experience-header">
                <h3 className="experience-org">{item.organization}</h3>
                <time className="experience-period">{item.period}</time>
              </div>
              <div className="experience-role">{item.role}</div>
              {item.description && (
                <p className="experience-desc">{item.description}</p>
              )}
              {item.tags && (
                <div className="experience-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="exp-tag">{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
