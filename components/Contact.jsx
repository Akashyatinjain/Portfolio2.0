'use client';

import React, { useState } from 'react';
import { Mail, Copy, Check, Send } from 'lucide-react';
import { profile } from '../data/portfolio';
import confetti from 'canvas-confetti';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
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
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(null), 3500);
      }, 700);
      return;
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          ...formData,
          from_name: 'Portfolio Contact',
        }),
      });
      const result = await res.json();
      if (result.success) {
        setStatus('success');
        confetti({ particleCount: 40, spread: 50, origin: { y: 0.85 } });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
      setTimeout(() => setStatus(null), 3500);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus(null), 3500);
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <h2 className="section-title">Get in Touch</h2>
      <div className="contact-card-box">
        <p className="contact-text">
          Looking for a software engineering intern? Feel free to reach out via email or send a quick message below.
        </p>

        <div className="contact-buttons-row">
          <a
            href={`mailto:${profile.email}`}
            className="btn btn-dark btn-sm"
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

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <div className="form-field">
              <label htmlFor="contact-name" className="form-label">Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                autoComplete="name"
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-email" className="form-label">Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                autoComplete="email"
              />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="contact-message" className="form-label">Message</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Your message..."
              rows={3}
              value={formData.message}
              onChange={handleChange}
              required
              className="form-textarea"
            />
          </div>
          <button
            type="submit"
            className="btn btn-outline btn-sm contact-submit-btn"
            disabled={status === 'sending'}
          >
            <Send size={13} aria-hidden="true" />
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <span className="contact-toast-msg" role="status">
              Message sent! I'll get back to you as soon as possible.
            </span>
          )}
          {status === 'error' && (
            <span className="contact-toast-msg contact-toast-error" role="alert">
              Could not send message. Please click "Email Me Directly".
            </span>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
