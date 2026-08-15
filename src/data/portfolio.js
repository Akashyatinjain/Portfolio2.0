export const profile = {
  name: 'Akash Yatin Jain',
  shortName: 'Akash Jain',
  title: 'Full-Stack Developer',
  tagline: 'Full-Stack Developer building scalable web applications and practical digital products.',
  heroBio: 'I specialize in building production-ready applications with React, Express, PostgreSQL schemas, secure REST APIs, and Docker containers.',
  avatar: '/avatar.png',
  location: 'Mumbai',
  email: 'aj0881871@gmail.com',
  studentEmail: 'aj0881871@student.sfit.ac.in',
  phone: '+91 7710926977',
  available: 'Open to internships · graduating Mar 2028',
  links: {
    github: 'https://github.com/Akashyatinjain',
    linkedin: 'https://www.linkedin.com/in/akash-yatin-jain',
    leetcode: 'https://leetcode.com/u/Akashyatinjain/',
    portfolio: 'https://akash-jain.vercel.app/',
  },
};

export const stats = {
  cgpa: '8.50',
  projects: '7+',
  problemsSolved: '212+',
  studentsMentored: '100+',
};

export const proofAchievements = [
  { title: 'Hackathon Runner-Up', subtitle: 'Colloquium SFIT 2026', type: 'trophy' },
  { title: '34+ Public Repos', subtitle: 'Active GitHub Contributor', type: 'code' },
  { title: '212+ DSA Completed', subtitle: '84 LeetCode + 128 Striver A2Z', type: 'brain' },
  { title: '8.50 CGPA', subtitle: 'St. Francis Institute of Tech', type: 'graduation' },
];

export const bio = {
  intro:
    "I'm an IT student at St. Francis Institute of Technology (SFIT), Mumbai, building end-to-end full stack web applications with modern tech stacks.",
  currently:
    "As IEEE Technical Executive, I conduct hands-on workshops and bootcamps on full-stack web development. I love tackling challenging problem solving in Java, designing relational database schemas in PostgreSQL, and engineering clean, accessible user interfaces.",
  interests: ['Full-Stack Development', 'Backend Engineering', 'DSA & System Design'],
};

export const skillTiers = {
  coreStack: ['React', 'Node.js', 'Express.js', 'PostgreSQL'],
  databasesAndOrm: ['PostgreSQL', 'Prisma ORM', 'SQL'],
  devopsAndCloud: ['Docker', 'Vercel', 'Render', 'Cloudinary'],
  languagesAndDsa: ['Java', 'JavaScript', 'Data Structures & Algorithms'],
  securityAndTools: ['JWT Authentication', 'Google OAuth', 'Git & GitHub', 'Tailwind CSS', 'Vite'],
};

export const education = [
  {
    school: 'St Francis Institute of Technology',
    degree: 'B.Tech in Information Technology',
    period: '2024 – 2028',
    note: 'Expected Mar 2028 · Official CGPA 8.50',
    detail:
      'Core engineering, database management systems, and algorithms. Actively building full-stack projects alongside coursework.',
  },
  {
    school: 'Sudarshan Jr College of Commerce, Science and Arts',
    degree: 'Class XII HSC (Science)',
    period: '2022 – 2024',
    note: '76.2%',
    detail: 'Science stream with focus on mathematics and computer fundamentals.',
  },
];

export const experience = [
  {
    role: 'IEEE Technical Executive',
    organization: 'SFIT Student Branch',
    period: 'Jul 2026 – Present',
    description: 'Organized technical workshops and full-stack bootcamps, mentoring 100+ students in web development and project building.',
    tags: ['Leadership', 'Mentoring', 'Event Management']
  },
  {
    role: 'Full-Stack Hackathon Runner-Up',
    organization: 'Colloquium SFIT Exhibition',
    period: 'Mar 2026',
    description: 'Built a full-stack hardware and software solution to enhance the security of parcels left outside homes. The project was awarded 2nd Runner-Up at the Colloquium SFIT Exhibition.',
    tags: ['React', 'SIH Hackathon', 'Ayurveda Platform']
  }
];

export const flagshipProjects = [
  {
    title: 'DataStock',
    category: 'fullstack',
    featured: true,
    date: 'Mar 2026',
    problem: 'Users needed a secure, self-hosted alternative to Google Drive with granular access controls and storage analytics.',
    architecture: 'React SPA → Express REST API → PostgreSQL (Prisma ORM) → Cloudinary CDN',
    description:
      'Full-stack cloud storage platform featuring JWT + OAuth authentication, folder-based file management, Cloudinary media storage, and real-time storage analytics.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Cloudinary', 'JWT'],
    liveUrl: 'https://data-stock.vercel.app/',
    githubUrl: 'https://github.com/Akashyatinjain/DataStock',
    accent: '#2563EB',
    image: '/projects/datastock.png'
  },
  {
    title: 'Finance Tracker',
    category: 'fullstack',
    featured: true,
    date: 'Oct 2025',
    problem: 'Personal budgeting apps lacked custom threshold alerts and CSV import support for Indian bank statements.',
    architecture: 'React Dashboard → Express API → PostgreSQL (Prisma) → JWT Auth Layer',
    description:
      'Personal finance management platform featuring budget tracking, transaction management, Indian bank CSV statement parser, interactive analytics, and category-based spending insights.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'JWT'],
    liveUrl: 'https://budget-tracker-no3.vercel.app/',
    githubUrl: 'https://github.com/Akashyatinjain/Budget-tracker-no3',
    accent: '#10B981',
    image: '/projects/finance-tracker.png'
  },
];

export const secondaryProjects = [
  {
    title: 'SWASTHYA',
    category: 'frontend',
    date: 'Sep 2025',
    description:
      'Ayurvedic health analytics platform designed to calculate protein and health indexes, built during a 24-hour hackathon sprint (Awarded 2nd Runner-Up).',
    tech: ['React', 'JavaScript', 'CSS Grid'],
    liveUrl: 'https://sih-rho-liard.vercel.app/',
    githubUrl: 'https://github.com/Akashyatinjain/SIH',
    accent: '#F59E0B',
    image: '/projects/swasthya.png'
  },
  {
    title: 'Keeper Notes',
    category: 'frontend',
    date: 'Aug 2025',
    description:
      'Sticky note application supporting full CRUD tasks, tag grouping, search, and local storage retention.',
    tech: ['React', 'JavaScript', 'CSS Modules'],
    liveUrl: 'https://keeper-not-app.vercel.app/',
    githubUrl: 'https://github.com/Akashyatinjain',
    accent: '#8B5CF6',
    image: '/projects/keeper.png'
  },
  {
    title: 'World Tracker',
    category: 'frontend',
    date: '2025',
    description: 'Interactive world explorer application using the REST Countries API to search, filter, and fetch details of countries globally.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://world-tracker-dusky.vercel.app/',
    githubUrl: 'https://github.com/Akashyatinjain/World-tracker-',
    accent: '#3B82F6',
    image: '/projects/world-tracker.png'
  },
  {
    title: 'World Capital Quiz',
    category: 'frontend',
    date: '2025',
    description: 'Interactive geographic quiz game testing players on world capitals with score tracking and card animations.',
    tech: ['React', 'CSS Modules', 'JavaScript'],
    liveUrl: 'https://world-capital-quiz-vgnj.vercel.app/',
    githubUrl: 'https://github.com/Akashyatinjain/world-capital-quiz',
    accent: '#10B981',
    image: '/projects/capital-quiz.png'
  },
  {
    title: 'C++ Website Redesign',
    category: 'frontend',
    date: '2025',
    description: 'Modern, clean, and responsive redesign of the C++ reference website, optimizing layout, navigation, and code readability.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://redesign-off-cplus-plus.vercel.app/',
    githubUrl: 'https://github.com/Akashyatinjain/Redesign-off-Cplus-plus-',
    accent: '#EF4444',
    image: '/projects/cpp-redesign.png'
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
    image: '/projects/simon.png'
  },
  {
    title: 'Drum Kit',
    category: 'others',
    date: '2025',
    description: 'Interactive virtual drum kit web application that plays corresponding sound samples on key presses or clicks with active pad animations.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://akashyatinjain.github.io/Drums/',
    githubUrl: 'https://github.com/Akashyatinjain/Drums',
    accent: '#EC4899',
    image: '/projects/drums.png'
  },
];

export const projects = flagshipProjects;
export const miniProjects = secondaryProjects;
