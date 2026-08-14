import React from 'react';
import { skillTiers } from '../data/portfolio';
import './Skills.css';

const Skills = () => {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">Technical Skills & Proficiency</h2>
      <div className="skills-grid-layout">
        {/* Core Primary Stack */}
        <div className="skill-tier-card primary-stack">
          <div className="skill-tier-header">
            <span className="skill-tier-title">🚀 Core Full-Stack (Primary Proficiency)</span>
            <span className="skill-tier-badge">Primary Stack</span>
          </div>
          <div className="skill-pills-wrap">
            {skillTiers.coreStack.map((item) => (
              <span key={item} className="skill-pill-item">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Databases & ORM */}
        <div className="skill-tier-card">
          <div className="skill-tier-header">
            <span className="skill-tier-title">🗄️ Databases & ORM</span>
          </div>
          <div className="skill-pills-wrap">
            {skillTiers.databasesAndOrm.map((item) => (
              <span key={item} className="skill-pill-item">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Deployment & DevOps */}
        <div className="skill-tier-card">
          <div className="skill-tier-header">
            <span className="skill-tier-title">☁️ Deployment & DevOps</span>
          </div>
          <div className="skill-pills-wrap">
            {skillTiers.devopsAndCloud.map((item) => (
              <span key={item} className="skill-pill-item">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Languages & DSA */}
        <div className="skill-tier-card">
          <div className="skill-tier-header">
            <span className="skill-tier-title">💻 Languages & DSA</span>
          </div>
          <div className="skill-pills-wrap">
            {skillTiers.languagesAndDsa.map((item) => (
              <span key={item} className="skill-pill-item">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Security & Tools */}
        <div className="skill-tier-card">
          <div className="skill-tier-header">
            <span className="skill-tier-title">🔐 Security & Ecosystem</span>
          </div>
          <div className="skill-pills-wrap">
            {skillTiers.securityAndTools.map((item) => (
              <span key={item} className="skill-pill-item">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
