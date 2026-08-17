import React from 'react';
import Hero from '../components/Hero';
import ProofAchievements from '../components/ProofAchievements';
import About from '../components/About';
import Experience from '../components/Experience';
import DeveloperActivity from '../components/DeveloperActivity';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <ProofAchievements />
      <About />
      <Experience />
      <DeveloperActivity />
      <Education />
      <Skills />
      <Projects isHomePreview={true} />
      <Contact />
    </div>
  );
}
