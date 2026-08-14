import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Projects from '../components/Projects';

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="projects-page">
      <div style={{ marginBottom: '1.5rem' }}>
        <Link
          to="/"
          className="btn btn-outline btn-sm"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>
      </div>

      <Projects isHomePreview={false} />
    </div>
  );
};

export default ProjectsPage;
