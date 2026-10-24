import React from 'react';
import { howIWork } from '../data/portfolio';

const HowIWork = () => {
  return (
    <section className="section" id="how-i-work" aria-label="How I Work & Engineering Process">
      <div className="how-i-work-wrap">
        <div className="how-i-work-header">
          <span className="how-i-work-tag">HOW I WORK</span>
          <h3 className="how-i-work-title">A Structured, Production-Focused Process</h3>
        </div>
        <div className="how-i-work-steps">
          {howIWork.map((step) => (
            <div key={step.step} className="work-step-item">
              <div className="work-step-num" aria-hidden="true">{step.step}</div>
              <div className="work-step-content">
                <h4 className="work-step-title">{step.title}</h4>
                <p className="work-step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
