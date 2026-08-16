import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Projects from '../components/Projects';
import './ProjectsPage.css';

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="projects-page">
      <div className="projects-page-nav">
        <Link
          to="/"
          className="btn btn-outline btn-sm"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          Back to Home
        </Link>
      </div>

      <Projects isHomePreview={false} />
    </div>
  );
};

export default ProjectsPage;
