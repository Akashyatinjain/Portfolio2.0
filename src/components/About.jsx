import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="section" id="about" aria-label="About Me">
      <h2 className="section-title">About</h2>
      <div className="about-content">
        <p className="about-text">
          I'm an Information Technology student at <strong>St. Francis Institute of Technology (SFIT), Mumbai</strong>, building end-to-end full-stack web applications with modern, resilient architectures.
        </p>
        <p className="about-text">
          As <strong>IEEE Technical Executive</strong>, I conduct hands-on workshops and bootcamps on full-stack web development. I love tackling algorithmic problem solving in <strong>Java</strong>, designing relational database schemas in <strong>PostgreSQL</strong>, and engineering clean, accessible user interfaces in <strong>React</strong>.
        </p>
      </div>
    </section>
  );
};

export default About;
