import React from 'react';
import { education } from '../data/portfolio';
import './Education.css';

const getInitials = (name) => {
  if (!name) return 'ED';
  const parts = name.split(' ');
  if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`;
  return name.slice(0, 2).toUpperCase();
};

const Education = () => {
  return (
    <section className="section" id="education">
      <h2 className="section-title">Education</h2>
      <div className="education-list">
        {education.map((item, index) => (
          <div key={index} className="education-item">
            <div className="education-logo">
              {getInitials(item.school)}
            </div>
            <div className="education-details">
              <div className="education-header">
                <span className="education-school">{item.school}</span>
                <span className="education-period">{item.period}</span>
              </div>
              <div className="education-degree">{item.degree}</div>
              {item.note && <div className="education-note">{item.note}</div>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
