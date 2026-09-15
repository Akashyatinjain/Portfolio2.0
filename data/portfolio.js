export const profile = {
  name: 'Akash Yatin Jain',
  shortName: 'Akash Jain',
  title: 'Full-Stack Developer & Freelancer',
  primaryIdentity: 'Full-Stack Developer & Freelancer',
  tagline: 'Full-Stack Developer & Freelancer',
  secondaryPositioning: 'B.Tech IT student building production-ready web applications and digital products.',
  heroBio: 'B.Tech IT student building production-ready web applications and digital products.',
  avatar: '/avatar.png',
  location: 'Mumbai, Maharashtra',
  educationMeta: 'B.Tech in Information Technology',
  email: 'aj0881871@gmail.com',
  studentEmail: 'aj0881871@student.sfit.ac.in',
  phone: '+91 7710926977',
  available: 'Open to Software Engineering Internships & Select Freelance Projects',
  links: {
    github: 'https://github.com/Akashyatinjain',
    linkedin: 'https://www.linkedin.com/in/akash-yatin-jain',
    leetcode: 'https://leetcode.com/u/Akashyatinjain/',
    portfolio: 'https://akash-jain.vercel.app/',
  },
};

export const proofAchievements = [
  { title: 'Active Freelancer', subtitle: 'Working on client projects since Jul 2026', type: 'trophy' },
  { title: '5+ Deployed Projects', subtitle: 'Production-ready web applications', type: 'code' },
  { title: '212+ DSA Completed', subtitle: '84 LeetCode + 128 Striver A2Z (Java)', type: 'brain' },
  { title: '40+ Public Repos', subtitle: 'Active GitHub Contributor', type: 'git' },
];

export const whatIBuild = [
  {
    title: 'Full-Stack Web Applications',
    description: 'Responsive, production-ready applications built end-to-end using React, Node.js, Express, and PostgreSQL.',
    icon: 'Layers',
  },
  {
    title: 'Business Websites',
    description: 'Modern, fast, and accessible digital presence for businesses, portfolios, and community organizations.',
    icon: 'Monitor',
  },
  {
    title: 'Backend & APIs',
    description: 'Scalable REST APIs, relational schemas with Prisma ORM, multi-method authentication, and secure integrations.',
    icon: 'Server',
  },
  {
    title: 'Deployment & CI/CD',
    description: 'Containerized environments with Docker, automated GitHub Actions pipelines, and cloud hosting on Vercel & Render.',
    icon: 'Rocket',
  },
];

export const howIWork = [
  {
    step: '01',
    title: 'Understand',
    description: 'Requirements, project goals, technical constraints, references, and architecture planning.',
  },
  {
    step: '02',
    title: 'Build',
    description: 'Clean UI implementation, REST API design, database schemas, authentication, and integrations.',
  },
  {
    step: '03',
    title: 'Deploy',
    description: 'Testing, production deployment, performance optimization, and clear documentation handoff.',
  },
];

export const certifications = [
  {
    title: 'The Complete Full-Stack Web Development Bootcamp',
    program: 'Full-Stack Development Program',
  },
  {
    title: '2nd Runner-Up — SFIT Colloquium Hackathon 2026',
    program: 'Certificate of Achievement · Technical Exhibition',
  },
];

export const skillTiers = {
  languages: ['JavaScript', 'Java', 'C', 'Python (fundamentals)'],
  frontend: ['React.js', 'Next.js', 'Tailwind CSS'],
  backend: ['Node.js', 'Express.js', 'REST APIs', 'Socket.io'],
  databasesAndOrm: ['PostgreSQL', 'MongoDB', 'Prisma ORM', 'SQL', 'pgAdmin'],
  authAndSecurity: ['JWT Authentication', 'OAuth', 'Email OTP verification'],
  devopsAndDeployment: ['Docker', 'GitHub Actions (CI/CD)', 'Vercel', 'Render'],
  tools: ['Git', 'GitHub', 'Postman', 'VS Code', 'Figma', 'Canva', 'Draw.io'],
};

export const education = [
  {
    school: 'St. Francis Institute of Technology',
    degree: 'B.Tech in Information Technology',
    period: '2024 – 2028',
    note: 'Expected Mar 2028 · Current GPA: 8.50 / 10',
    detail:
      'Core engineering coursework in Data Structures & Algorithms, Database Management Systems, and Software Engineering. Building full-stack projects alongside academic coursework.',
  },
  {
    school: 'Sudarshan Jr. College of Commerce, Science and Arts',
    degree: 'Class XII HSC (Science)',
    period: '2022 – 2024',
    note: 'Percentage: 76.2%',
    detail: 'Science stream with focus on mathematics and computer fundamentals.',
  },
];

export const experience = [
  {
    role: 'Freelance Full-Stack Developer',
    organization: 'Self-Employed / Client Projects',
    period: 'Jul 2026 – Present',
    description:
      'Design, build, and deploy responsive websites and full-stack web applications for clients, working across Next.js and React frontend development, REST APIs, database architecture, authentication, and cloud deployment.',
    tags: ['Freelance', 'Full-Stack', 'Client Delivery', 'Next.js', 'React', 'Node.js', 'PostgreSQL'],
  },
  {
    role: 'Technical Executive',
    organization: 'IEEE Student Branch, St. Francis Institute of Technology',
    period: 'Jul 2026 – Present',
    description:
      'Organized and coordinated technical workshops, coding events, and hackathons for students. Collaborated with the IEEE committee on technical activities, campus logistics, participant engagement, and cross-functional team support.',
    tags: ['Technical Leadership', 'Hackathons', 'Event Logistics', 'Collaboration'],
  },
];

export const flagshipProjects = [
  {
    title: 'DataStock',
    category: 'fullstack',
    featured: true,
    isPrimary: true,
    date: 'Mar 2026',
    description:
      'Secure cloud storage with 3-method auth (JWT, Google OAuth, email OTP), folder hierarchy, Cloudinary CDN uploads to 100 MB, and 6 interactive storage analytics charts.',
    tech: ['React', 'Express', 'PostgreSQL', 'Prisma', 'Cloudinary', 'OAuth'],
    liveUrl: 'https://data-stock.vercel.app/',
    githubUrl: 'https://github.com/Akashyatinjain/DataStock',
    accent: '#2563EB',
    image: '/projects/datastock-light.png',
    imageLight: '/projects/datastock-light.png',
    imageDark: '/projects/datastock-dark.png',
  },
  {
    title: 'Finance Tracker',
    category: 'fullstack',
    featured: true,
    date: 'Oct 2025',
    description:
      'Budget automation app with Indian bank CSV import, custom spending thresholds, category-level trend charts, and automated notification alerts.',
    tech: ['React', 'Express', 'PostgreSQL', 'Prisma', 'JWT', 'CSV Parser'],
    liveUrl: 'https://budget-tracker-no3.vercel.app/',
    githubUrl: 'https://github.com/Akashyatinjain/Budget-tracker-no3',
    accent: '#10B981',
    image: '/projects/finance-tracker-light.png',
    imageLight: '/projects/finance-tracker-light.png',
    imageDark: '/projects/finance-tracker-dark.png',
  },
  {
    title: 'MiniGPT',
    category: 'fullstack',
    featured: true,
    date: 'Feb 2026',
    description:
      'AI assistant with dynamic intent router dispatching between chat, RAG document search (pgvector + AWS S3), and real-time API tools — multi-LLM abstraction with SSE streaming.',
    tech: ['React', 'Express', 'pgvector', 'AWS S3', 'OpenAI', 'Gemini', 'SSE'],
    liveUrl: 'https://miniakashagent.vercel.app/',
    githubUrl: 'https://github.com/Akashyatinjain/Agent',
    accent: '#8B5CF6',
    image: '/projects/minigpt-light.png',
    imageLight: '/projects/minigpt-light.png',
    imageDark: '/projects/minigpt-dark.png',
  },
];

export const secondaryProjects = [
  {
    title: 'Keeper Notes',
    category: 'frontend',
    date: 'Aug 2025',
    description:
      'Sticky note application supporting full CRUD tasks, tag grouping, search, and local storage retention.',
    tech: ['React.js', 'JavaScript', 'CSS Modules'],
    liveUrl: 'https://keeper-not-app.vercel.app/',
    githubUrl: 'https://github.com/Akashyatinjain',
    accent: '#8B5CF6',
    image: '/projects/keeper.png',
  },
  {
    title: 'World Tracker',
    category: 'frontend',
    date: '2025',
    description:
      'Interactive world explorer application using the REST Countries API to search, filter, and fetch details of countries globally.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://world-tracker-dusky.vercel.app/',
    githubUrl: 'https://github.com/Akashyatinjain/World-tracker-',
    accent: '#3B82F6',
    image: '/projects/world-tracker.png',
  },
  {
    title: 'World Capital Quiz',
    category: 'frontend',
    date: '2025',
    description:
      'Interactive geographic quiz game testing players on world capitals with score tracking and card animations.',
    tech: ['React.js', 'CSS Modules', 'JavaScript'],
    liveUrl: 'https://world-capital-quiz-vgnj.vercel.app/',
    githubUrl: 'https://github.com/Akashyatinjain/world-capital-quiz',
    accent: '#10B981',
    image: '/projects/capital-quiz.png',
  },
  {
    title: 'C++ Website Redesign',
    category: 'frontend',
    date: '2025',
    description:
      'Modern, clean, and responsive redesign of the C++ reference website, optimizing layout, navigation, and code readability.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://redesign-off-cplus-plus.vercel.app/',
    githubUrl: 'https://github.com/Akashyatinjain/Redesign-off-Cplus-plus-',
    accent: '#EF4444',
    image: '/projects/cpp-redesign.png',
  },
  {
    title: 'Simon Game',
    category: 'others',
    date: '2025',
    description:
      'Retro audio-visual memory game with sequence patterns, score histories, and level-up CSS animations.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://akashyatinjain.github.io/Simon-Game/',
    githubUrl: 'https://github.com/Akashyatinjain/Simon-Game',
    accent: '#EF4444',
    image: '/projects/simon.png',
  },
  {
    title: 'Drum Kit',
    category: 'others',
    date: '2025',
    description:
      'Interactive virtual drum kit web application that plays corresponding sound samples on key presses or clicks with active pad animations.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://akashyatinjain.github.io/Drums/',
    githubUrl: 'https://github.com/Akashyatinjain/Drums',
    accent: '#EC4899',
    image: '/projects/drums.png',
  },
];

export const projects = flagshipProjects;
export const miniProjects = secondaryProjects;
