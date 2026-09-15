import React from 'react';
import { Award } from 'lucide-react';
import { certifications } from '../data/portfolio';

const Certifications = () => {
  return (
    <section className="section" id="certifications" aria-label="Certifications and Learning Programs">
      <div className="section-header-wrap">
        <h2 className="section-title">Certifications & Learning</h2>
        <p className="section-subtitle">
          Structured programs completed in modern full-stack and frontend software development.
        </p>
      </div>

      <div className="certifications-grid">
        {certifications.map((item, idx) => (
          <article key={idx} className="cert-card">
            <div className="cert-icon-wrap" aria-hidden="true">
              <Award size={18} />
            </div>
            <div className="cert-info">
              <h3 className="cert-title">{item.title}</h3>
              <p className="cert-program">{item.program}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
