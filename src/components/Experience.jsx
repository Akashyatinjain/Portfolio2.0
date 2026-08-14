import React from 'react';
import { experience } from '../data/portfolio';
import './Experience.css';

const getInitials = (name) => {
  if (!name) return 'EX';
  const parts = name.split(' ');
  if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`;
  return name.slice(0, 2).toUpperCase();
};

const Experience = () => {
  return (
    <section className="section" id="experience">
      <h2 className="section-title">Experience & Leadership</h2>
      <div className="experience-list">
        {experience.map((item, index) => (
          <div key={index} className="experience-item">
            <div className="experience-logo">
              {getInitials(item.organization)}
            </div>
            <div className="experience-details">
              <div className="experience-header">
                <span className="experience-org">{item.organization}</span>
                <span className="experience-period">{item.period}</span>
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
