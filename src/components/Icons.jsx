import React from 'react';

export const Github = ({ size = 20, className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export const Linkedin = ({ size = 20, className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Leetcode = ({ size = 20, className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.618 5.884 5.884 0 0 0 3.343-.728 5.68 5.68 0 0 0 2.072-2.141 5.727 5.727 0 0 0 .524-1.077 5.626 5.626 0 0 0 .19-1.025l.006-.09a5.57 5.57 0 0 0-.17-1.392 5.556 5.556 0 0 0-.583-1.42 5.485 5.485 0 0 0-1.002-1.344l-4.14-4.14 3.73-3.73a1.374 1.374 0 0 0-.97-2.348zM9.467 8.354l3.856 3.856c.74.74.966 1.83.565 2.766a2.84 2.84 0 0 1-1.037 1.258 2.875 2.875 0 0 1-1.63.355 2.915 2.915 0 0 1-2.36-1.77 2.705 2.705 0 0 1-.17-.502 2.8 2.8 0 0 1-.03-.505 2.71 2.71 0 0 1 .59-1.685l.266-.328 2.22-2.378-2.27-2.067zm6.757 6.446a1.374 1.374 0 0 0-.972 2.345l3.856 3.856a1.374 1.374 0 1 0 1.944-1.944l-3.856-3.856a1.374 1.374 0 0 0-.972-.401z" />
  </svg>
);

export const TUF = ({ size = 20, className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M4 15h16" />
    <path d="M4 9h16" />
    <path d="M14 4l5 5-5 5" />
    <path d="M8 10l5 5-5 5" />
  </svg>
);
