import React from 'react';
import { Cloud, Code2, Database, Rocket, ShieldCheck } from 'lucide-react';
import { skillTiers } from '../data/portfolio';

const skillSections = [
  {
    key: 'coreStack',
    title: 'Core Full-Stack',
    badge: 'Primary Stack',
    icon: Rocket,
    featured: true,
  },
  {
    key: 'databasesAndOrm',
    title: 'Databases & ORM',
    icon: Database,
  },
  {
    key: 'devopsAndCloud',
    title: 'Deployment & DevOps',
    icon: Cloud,
  },
  {
    key: 'languagesAndDsa',
    title: 'Languages & DSA',
    icon: Code2,
  },
  {
    key: 'securityAndTools',
    title: 'Security & Ecosystem',
    icon: ShieldCheck,
  },
];

const Skills = () => {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">Technical Skills & Proficiency</h2>
      <div className="skills-grid-layout">
        {skillSections.map(({ key, title, badge, icon: Icon, featured }) => (
          <div key={key} className={`skill-tier-card ${featured ? 'primary-stack' : ''}`}>
            <div className="skill-tier-header">
              <span className="skill-tier-title">
                <span className="skill-tier-icon" aria-hidden="true">
                  <Icon size={15} />
                </span>
                {title}
              </span>
              {badge && <span className="skill-tier-badge">{badge}</span>}
            </div>
            <div className="skill-pills-wrap">
              {skillTiers[key].map((item) => (
                <span key={item} className="skill-pill-item">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
