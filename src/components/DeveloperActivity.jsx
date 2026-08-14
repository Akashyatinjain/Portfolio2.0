import React, { useState, useEffect } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { Github, Leetcode, TUF } from './Icons';
import { profile } from '../data/portfolio';
import './DeveloperActivity.css';

const dsaData = {
  leetcode: {
    name: 'LeetCode',
    username: 'Akashyatinjain',
    profileUrl: profile.links.leetcode,
    easy: 44,
    medium: 37,
    hard: 3,
    total: 84,
  },
  striver: {
    name: "Striver's A2Z Sheet",
    username: 'Akashyatinjain',
    profileUrl: 'https://takeuforward.org/profile/Akashyatinjain',
    easy: 83,
    medium: 33,
    hard: 12,
    total: 128,
  },
};

const LANG_COLORS = {
  JavaScript: '#F7DF1E',
  HTML: '#E34F26',
  CSS: '#1572B6',
  Java: '#B07219',
  Python: '#3572A5',
  'C++': '#F34B7D',
};

const DeveloperActivity = () => {
  const [dsaPlatform, setDsaPlatform] = useState('leetcode');
  const [githubStats, setGithubStats] = useState({
    contributions: '1,170+',
    commits: '918',
    streak: '65d',
  });
  const [languages, setLanguages] = useState([
    { name: 'JavaScript', pct: '68%', color: '#F7DF1E' },
    { name: 'HTML / CSS', pct: '32%', color: '#E34F26' },
  ]);

  useEffect(() => {
    const username = 'Akashyatinjain';
    let isMounted = true;

    const fetchGithubData = async () => {
      try {
        const [resAll, resLast, resRepos] = await Promise.all([
          fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=all`),
          fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100`),
        ]);

        let total = '1,170+';
        let commits = '918';
        let currentStreak = '65d';

        if (resAll.ok) {
          const dataAll = await resAll.json();
          const parsedTotal = Object.values(dataAll.total || {}).reduce((s, v) => (typeof v === 'number' ? s + v : s), 0);
          if (parsedTotal > 0) total = parsedTotal.toLocaleString();
          const year = new Date().getFullYear().toString();
          if (dataAll.total?.[year]) commits = `${dataAll.total[year]}`;
        }

        if (resLast.ok) {
          const dataLast = await resLast.json();
          if (dataLast.contributions?.length) {
            const sorted = [...dataLast.contributions].sort((a, b) => new Date(a.date) - new Date(b.date));
            let streakCount = 0;
            for (let i = sorted.length - 1; i >= 0; i--) {
              if (sorted[i].count > 0) streakCount++;
              else if (streakCount > 0) break;
            }
            if (streakCount > 0) currentStreak = `${streakCount}d`;
          }
        }

        let parsedLangs = [];
        if (resRepos.ok) {
          const repos = await resRepos.json();
          if (Array.isArray(repos) && repos.length > 0) {
            const langMap = {};
            repos.forEach((r) => {
              if (r.language && !r.fork) {
                langMap[r.language] = (langMap[r.language] || 0) + (r.size || 1);
              }
            });
            const totalSize = Object.values(langMap).reduce((a, b) => a + b, 0) || 1;
            parsedLangs = Object.entries(langMap)
              .sort((a, b) => b[1] - a[1])
              .filter(([_, size]) => Math.round((size / totalSize) * 100) > 0)
              .slice(0, 2)
              .map(([name, size]) => ({
                name,
                pct: `${Math.round((size / totalSize) * 100)}%`,
                color: LANG_COLORS[name] || '#3B82F6',
              }));
          }
        }

        if (isMounted) {
          setGithubStats({
            contributions: `${total}`,
            commits: `${commits}`,
            streak: currentStreak,
          });
          if (parsedLangs.length > 0) setLanguages(parsedLangs);
        }
      } catch {
        // Fallback default
      }
    };

    fetchGithubData();
    return () => {
      isMounted = false;
    };
  }, []);

  const currentData = dsaData[dsaPlatform];

  return (
    <section className="section activity-section" id="developer-activity">
      <h2 className="section-title">Developer Activity & Algorithms</h2>
      <div className="activity-grid">
        {/* Compact GitHub Card */}
        <div className="github-activity-card">
          <div className="github-card-header">
            <div className="github-user-info">
              <Github size={20} className="github-icon-blue" />
              <div className="github-title-wrap">
                <span className="github-main-title">GitHub Activity</span>
                <span className="github-handle-text">@Akashyatinjain &bull; 34 public repos</span>
              </div>
            </div>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-view-profile-btn"
            >
              <span>Profile</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          <div className="github-stats-3col">
            <div className="github-stat-box-card">
              <span className="github-stat-big-num">{githubStats.contributions}</span>
              <span className="github-stat-sublbl">CONTRIBUTIONS</span>
            </div>
            <div className="github-stat-box-card">
              <span className="github-stat-big-num">{githubStats.commits}</span>
              <span className="github-stat-sublbl">YEAR COMMITS</span>
            </div>
            <div className="github-stat-box-card">
              <span className="github-stat-big-num">{githubStats.streak}</span>
              <span className="github-stat-sublbl">STREAK</span>
            </div>
          </div>

          <div className="github-langs-section">
            <div className="github-langs-header-lbl">TOP REPOSITORY LANGUAGES</div>
            {languages.map((lang) => (
              <div key={lang.name} className="github-lang-row-item">
                <div className="github-lang-meta">
                  <span>{lang.name}</span>
                  <span>{lang.pct}</span>
                </div>
                <div className="github-lang-progress-track">
                  <div
                    className="github-lang-progress-fill"
                    style={{ width: lang.pct, backgroundColor: lang.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compact DSA Problem Solving Card */}
        <div className="dsa-stats-card">
          <div className="dsa-card-header">
            <div className="dsa-brand-title">
              {dsaPlatform === 'leetcode' ? (
                <Leetcode size={16} style={{ color: '#2563EB' }} />
              ) : (
                <TUF size={16} style={{ color: '#FF5E00' }} />
              )}
              <span>{currentData.name}</span>
            </div>

            <div className="dsa-segmented-toggle" aria-label="Toggle DSA Platform">
              <button
                type="button"
                className={`dsa-toggle-btn ${dsaPlatform === 'leetcode' ? 'active-leetcode' : ''}`}
                onClick={() => setDsaPlatform('leetcode')}
              >
                <Leetcode size={12} />
                LeetCode
              </button>
              <button
                type="button"
                className={`dsa-toggle-btn ${dsaPlatform === 'striver' ? 'active-striver' : ''}`}
                onClick={() => setDsaPlatform('striver')}
              >
                <TUF size={12} />
                Striver (TUF)
              </button>
            </div>
          </div>

          <div className="dsa-stats-row">
            <div className="dsa-stat-box easy">
              <span className="dsa-stat-number">{currentData.easy}</span>
              <span className="dsa-stat-label">Easy</span>
            </div>
            <div className="dsa-stat-box medium">
              <span className="dsa-stat-number">{currentData.medium}</span>
              <span className="dsa-stat-label">Medium</span>
            </div>
            <div className="dsa-stat-box hard">
              <span className="dsa-stat-number">{currentData.hard}</span>
              <span className="dsa-stat-label">Hard</span>
            </div>
            <div className="dsa-stat-box total">
              <span className="dsa-stat-number">{currentData.total}</span>
              <span className="dsa-stat-label">Solved</span>
            </div>
          </div>

          <div className="dsa-summary-strip">
            <span>Combined Total Solved (Java)</span>
            <strong>212 Problems</strong>
          </div>

          <div className="dsa-footer-info">
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              84 LeetCode + 128 Striver A2Z
            </span>
            <a
              href={currentData.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="dsa-profile-link"
            >
              <span>{dsaPlatform === 'leetcode' ? 'LeetCode' : 'TUF'} Profile</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperActivity;
