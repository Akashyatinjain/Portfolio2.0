import React from 'react';
import { Trophy, Code2, Brain, GraduationCap } from 'lucide-react';
import { proofAchievements } from '../data/portfolio';
import './ProofAchievements.css';

const getIcon = (type) => {
  switch (type) {
    case 'trophy':
      return <Trophy size={18} />;
    case 'code':
      return <Code2 size={18} />;
    case 'brain':
      return <Brain size={18} />;
    case 'graduation':
      return <GraduationCap size={18} />;
    default:
      return <Trophy size={18} />;
  }
};

const ProofAchievements = () => {
  return (
    <section className="section" id="achievements">
      <h2 className="section-title">Key Highlights & Achievements</h2>
      <div className="proof-grid">
        {proofAchievements.map((item, idx) => (
          <div key={idx} className="proof-card">
            <div className="proof-icon-box">{getIcon(item.type)}</div>
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
