import { Inter, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import ClientProviders from '../components/ClientProviders';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://akash-jain.vercel.app'),
  title: 'Akash Yatin Jain — Full-Stack Developer',
  description:
    'Akash Yatin Jain — Full-Stack Developer & IT undergraduate at SFIT, Mumbai. Building scalable web apps with React, Node.js, PostgreSQL, and Docker. Open to software engineering internships.',
  keywords: [
    'Akash Jain',
    'Akash Yatin Jain',
    'Full Stack Developer',
    'Software Engineer',
    'React Developer',
    'Node.js',
    'PostgreSQL',
    'SFIT Mumbai',
    'Portfolio',
  ],
  authors: [{ name: 'Akash Yatin Jain' }],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    type: 'website',
    url: 'https://akash-jain.vercel.app/',
    title: 'Akash Yatin Jain — Full-Stack Developer',
    description:
      'Full-Stack Developer building scalable web applications with React, Express, PostgreSQL, and Docker. Open to software engineering internships.',
    images: [
      {
        url: '/avatar.png',
        width: 800,
        height: 800,
        alt: 'Akash Yatin Jain',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akash Yatin Jain — Full-Stack Developer',
    description:
      'Full-Stack Developer building scalable web applications with React, Express, PostgreSQL, and Docker. Open to software engineering internships.',
    images: ['/avatar.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Akash Yatin Jain',
  url: 'https://akash-jain.vercel.app/',
  image: 'https://akash-jain.vercel.app/avatar.png',
  jobTitle: 'Full-Stack Developer',
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'St. Francis Institute of Technology',
  },
  sameAs: [
    'https://github.com/Akashyatinjain',
    'https://www.linkedin.com/in/akash-yatin-jain',
    'https://leetcode.com/u/Akashyatinjain/',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ClientProviders>
          {children}
        </ClientProviders>
        <Analytics />
      </body>
    </html>
  );
}
