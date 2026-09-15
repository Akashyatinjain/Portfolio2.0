import React from 'react';
import { Briefcase, Users, Trophy } from 'lucide-react';
import { experience } from '../data/portfolio';

const getExperienceIcon = (role) => {
  if (role.toLowerCase().includes('freelance')) return <Briefcase size={16} aria-hidden="true" />;
  if (role.toLowerCase().includes('ieee') || role.toLowerCase().includes('executive')) return <Users size={16} aria-hidden="true" />;
  if (role.toLowerCase().includes('hackathon') || role.toLowerCase().includes('runner-up')) return <Trophy size={16} aria-hidden="true" />;
  return <Briefcase size={16} aria-hidden="true" />;
};

const Experience = () => {
  return (
    <section className="section" id="experience" aria-label="Experience and Leadership">
      <div className="section-header-wrap">
        <h2 className="section-title">Experience & Leadership</h2>
        <p className="section-subtitle">
          Professional freelance client delivery, technical student leadership, and competitive hackathon execution.
        </p>
      </div>

      <div className="experience-list">
        {experience.map((item, index) => (
          <article key={index} className="experience-item">
            <div className="experience-logo-box" aria-hidden="true">
              {getExperienceIcon(item.role)}
            </div>
            <div className="experience-details">
              <div className="experience-header">
                <div className="experience-title-wrap">
                  <h3 className="experience-role-title">{item.role}</h3>
                  <span className="experience-org-name">{item.organization}</span>
                </div>
                <time className="experience-period-badge">{item.period}</time>
              </div>

              {item.description && <p className="experience-desc">{item.description}</p>}

              {item.tags && (
                <div className="experience-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="exp-tag">
                      {tag}
                    </span>
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
