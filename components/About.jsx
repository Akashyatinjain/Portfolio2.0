import React from 'react';

const About = () => {
  return (
    <section className="section" id="about" aria-label="About Akash">
      <div className="section-header-wrap">
        <h2 className="section-title">About Me</h2>
      </div>
      <div className="about-editorial-wrap">
        <p className="about-text-lead">
          I'm an Information Technology undergraduate at <strong>St. Francis Institute of Technology (SFIT), Mumbai</strong>, and an active freelance full-stack developer focused on engineering reliable, production-ready web applications.
        </p>
        <p className="about-text">
          I work comfortably across the entire application lifecycle — designing clean <strong>React</strong> interfaces, architecting secure <strong>Express</strong> REST APIs, structuring relational databases in <strong>PostgreSQL</strong> with <strong>Prisma ORM</strong>, and managing deployments using <strong>Docker</strong>, <strong>Render</strong>, and <strong>Vercel</strong>.
        </p>
        <p className="about-text">
          Beyond freelance client work and independent full-stack builds, I actively sharpen my algorithmic problem-solving in <strong>Java</strong> (over 210 problems solved across LeetCode and Striver's A2Z Sheet) and organize campus coding events and hackathons as a <strong>Technical Executive with the IEEE Student Branch at SFIT</strong>.
        </p>
        <p className="about-text">
          I am currently open to <strong>Software Engineering Internships</strong> where I can contribute to production systems, as well as select <strong>freelance web development projects</strong> with teams looking for practical, well-engineered digital solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
