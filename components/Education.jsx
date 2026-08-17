import React from 'react';
import { education } from '../data/portfolio';

const getInitials = (name) => {
  if (!name) return 'ED';
  if (name.includes('Francis') || name.includes('SFIT')) return 'SFIT';
  const parts = name.split(' ');
  if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`;
  return name.slice(0, 2).toUpperCase();
};

const Education = () => {
  return (
    <section className="section" id="education" aria-label="Education">
      <h2 className="section-title">Education</h2>
      <div className="education-list">
        {education.map((item, index) => (
          <article key={index} className="education-item">
            <div className="education-logo" aria-hidden="true">
              {getInitials(item.school)}
            </div>
            <div className="education-details">
              <div className="education-header">
                <h3 className="education-school">{item.school}</h3>
                <time className="education-period">{item.period}</time>
              </div>
              <div className="education-degree">{item.degree}</div>
              {item.note && <div className="education-note">{item.note}</div>}
              {item.detail && <p className="education-detail">{item.detail}</p>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
