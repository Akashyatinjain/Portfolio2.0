import React from 'react';
import { Code, Layout, Server, Database, ShieldCheck, Cloud, Wrench } from 'lucide-react';
import { skillTiers } from '../data/portfolio';

const categories = [
  { key: 'languages', title: 'Languages', icon: Code },
  { key: 'frontend', title: 'Frontend', icon: Layout },
  { key: 'backend', title: 'Backend', icon: Server },
  { key: 'databasesAndOrm', title: 'Databases & ORM', icon: Database },
  { key: 'authAndSecurity', title: 'Authentication & Security', icon: ShieldCheck },
  { key: 'devopsAndDeployment', title: 'DevOps & Deployment', icon: Cloud },
  { key: 'tools', title: 'Tools & Platforms', icon: Wrench },
];

const Skills = () => {
  return (
    <section className="section" id="skills" aria-label="Technical Skills">
      <div className="section-header-wrap">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          Technologies, runtimes, and engineering tools applied across production applications and client deliverables.
        </p>
      </div>

      <div className="skills-grid-layout">
        {categories.map(({ key, title, icon: Icon }) => (
          <div key={key} className="skill-tier-card">
            <div className="skill-tier-header">
              <span className="skill-tier-title">
                <span className="skill-tier-icon" aria-hidden="true">
                  <Icon size={15} />
                </span>
                {title}
              </span>
            </div>
            <div className="skill-pills-wrap">
              {(skillTiers[key] || []).map((item) => (
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
