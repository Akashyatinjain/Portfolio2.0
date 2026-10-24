'use client';

import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { profile } from '../data/portfolio';
import confetti from 'canvas-confetti';

const topicOptions = [
  'Software Engineering Opportunity',
  'Freelance Project',
  'Collaboration',
  'Open Source',
  'Other',
];

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Software Engineering Opportunity',
    message: '',
  });
  const [status, setStatus] = useState(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '4f104b7a-1c3e-4cc2-b241-1b47e0657dc4';
    if (!accessKey) {
      setTimeout(() => {
        setStatus('success');
        confetti({ particleCount: 40, spread: 50, origin: { y: 0.85 } });
        setFormData({ name: '', email: '', topic: 'Software Engineering Opportunity', message: '' });
        setTimeout(() => setStatus(null), 4000);
      }, 700);
      return;
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          topic: formData.topic,
          subject: `[Portfolio Inquiry] ${formData.topic} from ${formData.name}`,
          message: `Inquiry Type: ${formData.topic}\n\nMessage:\n${formData.message}`,
          from_name: formData.name || 'Portfolio Contact',
        }),
      });
      const result = await res.json();
      if (result.success) {
        setStatus('success');
        confetti({ particleCount: 40, spread: 50, origin: { y: 0.85 } });
        setFormData({ name: '', email: '', topic: 'Software Engineering Opportunity', message: '' });
      } else {
        setStatus('error');
      }
      setTimeout(() => setStatus(null), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus(null), 4000);
    }
  };

  return (
    <section className="section contact-section" id="contact" aria-label="Contact and Inquiries">
      <div className="section-header-wrap">
        <span className="contact-tag-badge">LET'S BUILD SOMETHING</span>
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          Have a project in mind, want to discuss an internship opportunity, or simply want to connect? I'd be happy to hear from you.
        </p>
      </div>

      <div className="contact-card-box">
        <div className="contact-meta-banner">
          <Sparkles size={16} className="contact-sparkle-icon" aria-hidden="true" />
          <span>Currently open to software engineering internships and selected freelance opportunities.</span>
        </div>

        <div className="contact-direct-actions">
          <a
            href={`mailto:${profile.email}`}
            className="btn btn-dark"
            aria-label={`Send direct email to ${profile.email}`}
          >
            <Mail size={14} aria-hidden="true" />
            Email Me Directly
          </a>

          <button
            type="button"
            onClick={handleCopy}
            className="contact-copy-email"
            title="Copy email to clipboard"
            aria-label={copied ? 'Email copied to clipboard' : `Copy email address ${profile.email}`}
          >
            {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
            <span>{copied ? 'Email Copied!' : profile.email}</span>
          </button>
        </div>

        <div className="contact-social-quick">
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-quick-link"
            aria-label="Connect with Akash on LinkedIn (opens in new tab)"
          >
            <Linkedin size={14} aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
          <span className="contact-dot-sep" aria-hidden="true">·</span>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-quick-link"
            aria-label="View Akash's GitHub (opens in new tab)"
          >
            <Github size={14} aria-hidden="true" />
            <span>GitHub</span>
          </a>
        </div>

        <div className="contact-divider-bar">
          <span>OR SEND A MESSAGE</span>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
          <div className="contact-form-row">
            <div className="form-field">
              <label htmlFor="contact-name" className="form-label">
                Your Name <span className="req-star">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="e.g. Alex Smith"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                autoComplete="name"
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-email" className="form-label">
                Your Email <span className="req-star">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="e.g. alex@company.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                autoComplete="email"
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="contact-topic" className="form-label">
              What are you reaching out about?
            </label>
            <select
              id="contact-topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              className="form-select"
            >
              {topicOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="contact-message" className="form-label">
              Message <span className="req-star">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Briefly describe your project, timeline, or open role..."
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="form-textarea"
            />
          </div>

          <button
            type="submit"
            className="btn btn-dark contact-submit-btn"
            disabled={status === 'sending'}
          >
            <Send size={13} aria-hidden="true" />
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <div className="contact-toast-msg contact-toast-success" role="status">
              <Check size={14} aria-hidden="true" />
              <span>Message sent successfully! I'll get back to you shortly.</span>
            </div>
          )}
          {status === 'error' && (
            <div className="contact-toast-msg contact-toast-error" role="alert">
              <span>Could not send message. Please reach out directly at {profile.email}</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
