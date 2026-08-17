import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Projects from '../../components/Projects';

export const metadata = {
  title: 'Projects — Akash Yatin Jain',
  description: 'A complete archive of full-stack systems, frontend interfaces, and hackathon prototypes built by Akash Jain.',
};

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      <div className="projects-page-nav">
        <Link
          href="/"
          className="btn btn-outline btn-sm"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          Back to Home
        </Link>
      </div>

      <Projects isHomePreview={false} />
    </div>
  );
}
