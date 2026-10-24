import React from 'react';
import { Trophy, Code2, Brain, GitFork, Briefcase } from 'lucide-react';
import { proofAchievements } from '../data/portfolio';

const getIcon = (type) => {
  switch (type) {
    case 'trophy':
      return <Briefcase size={18} aria-hidden="true" />;
    case 'code':
      return <Code2 size={18} aria-hidden="true" />;
    case 'brain':
      return <Brain size={18} aria-hidden="true" />;
    case 'git':
      return <GitFork size={18} aria-hidden="true" />;
    default:
      return <Trophy size={18} aria-hidden="true" />;
  }
};

const ProofAchievements = () => {
  return (
    <section className="section" id="achievements" aria-label="Key Highlights and Achievements">
      <div className="section-header-wrap">
        <h2 className="section-title">Key Highlights & Proof</h2>
        <p className="section-subtitle">
          Tangible engineering outcomes across competition, deployed applications, algorithms, and open source.
        </p>
      </div>

      <div className="proof-grid">
        {proofAchievements.map((item, idx) => (
          <div key={idx} className="proof-card">
            <div className="proof-icon-box" aria-hidden="true">
              {getIcon(item.type)}
            </div>
            <div className="proof-content">
              <span className="proof-title">{item.title}</span>
              <span className="proof-subtitle">{item.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProofAchievements;
