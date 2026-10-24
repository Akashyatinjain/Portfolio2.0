import React from 'react';
import Hero from '../components/Hero';
import ProofAchievements from '../components/ProofAchievements';
import WhatIBuild from '../components/WhatIBuild';
import Projects from '../components/Projects';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import DeveloperActivity from '../components/DeveloperActivity';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import HowIWork from '../components/HowIWork';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <ProofAchievements />
      <WhatIBuild />
      <Projects isHomePreview={true} />
      <About />
      <Experience />
      <Skills />
      <DeveloperActivity />
      <Education />
      <Certifications />
      <HowIWork />
      <Contact />
    </div>
  );
}
