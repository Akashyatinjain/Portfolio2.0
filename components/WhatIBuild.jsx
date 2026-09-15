import React from 'react';
import { Layers, Monitor, Server, Rocket } from 'lucide-react';
import { whatIBuild } from '../data/portfolio';

const iconMap = {
  Layers,
  Monitor,
  Server,
  Rocket,
};

const WhatIBuild = () => {
  return (
    <section className="section" id="services" aria-label="What I Build">
      <div className="section-header-wrap">
        <h2 className="section-title">What I Build</h2>
        <p className="section-subtitle">
          Full-cycle development from database schema design and APIs to responsive frontends and cloud deployment.
        </p>
      </div>

      <div className="services-grid">
        {whatIBuild.map((item) => {
          const Icon = iconMap[item.icon] || Layers;
          return (
            <article key={item.title} className="service-card">
              <div className="service-icon-wrap" aria-hidden="true">
                <Icon size={18} />
              </div>
              <h3 className="service-title">{item.title}</h3>
              <p className="service-desc">{item.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default WhatIBuild;
