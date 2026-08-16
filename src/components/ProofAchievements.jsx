import React from 'react';
import { Trophy, Code2, Brain, GraduationCap } from 'lucide-react';
import { proofAchievements } from '../data/portfolio';
import './ProofAchievements.css';

const getIcon = (type) => {
  switch (type) {
    case 'trophy':
      return <Trophy size={17} aria-hidden="true" />;
    case 'code':
      return <Code2 size={17} aria-hidden="true" />;
    case 'brain':
      return <Brain size={17} aria-hidden="true" />;
    case 'graduation':
      return <GraduationCap size={17} aria-hidden="true" />;
    default:
      return <Trophy size={17} aria-hidden="true" />;
  }
};

const ProofAchievements = () => {
  return (
    <section className="section" id="achievements" aria-label="Key Highlights and Achievements">
      <h2 className="section-title">Key Highlights & Achievements</h2>
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
