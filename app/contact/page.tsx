'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { prefersReducedMotion } from '@/lib/utils';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const noMotion =
    typeof window !== 'undefined' ? prefersReducedMotion() : false;
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof ContactForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: 'var(--space-3) var(--space-4)',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--color-border)',
    backgroundColor: 'var(--color-bg)',
    color: 'var(--color-text)',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-sm)',
    outline: 'none',
    transition: 'border-color var(--dur-fast) var(--ease-out)',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--text-xs)',
    color: 'var(--color-text-muted)',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    marginBottom: 'var(--space-2)',
  };

  return (
    <div className="section-padding">
      <div className="site-container">
        <motion.div
          initial={noMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 'var(--space-12)' }}
        >
          <SectionEyebrow text="Get in Touch" />
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-4xl)',
              fontWeight: 700,
              lineHeight: 1.05,
              color: 'var(--color-text)',
              marginBottom: 'var(--space-4)',
            }}
          >
            Find Us in
            <br />
            Barrie
          </h1>
        </motion.div>

        <div className="contact-layout">
          {/* Left Column — Info & Map */}
          <motion.div
            initial={noMotion ? false : { opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}
          >
            {/* Info Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 'var(--space-4)',
              }}
            >
              <div
                style={{
                  padding: 'var(--space-6)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                  backgroundColor: 'var(--color-surface)',
                }}
              >
                <h3 style={{ ...labelStyle, color: 'var(--color-gold)' }}>Location</h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.6,
                  }}
                >
                  94 Dunlop st W<br />
                  Barrie, ON L4N 1A8
                </p>
              </div>

              <div
                style={{
                  padding: 'var(--space-6)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                  backgroundColor: 'var(--color-surface)',
                }}
              >
                <h3 style={{ ...labelStyle, color: 'var(--color-gold)' }}>Contact</h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.6,
                  }}
                >
                  <a href="tel:+15195550123" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>(519) 555-0123</a><br />
                  <a href="mailto:hello@saray.ca" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>hello@saray.ca</a>
                </p>
              </div>
            </div>

            {/* Map Embed */}
            <div
              style={{
                width: '100%',
                height: '350px',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2896.7905183366384!2d-80.4950!3d43.4500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDI3JzAwLjAiTiA4MMKwMjknNDIuMCJX!5e0!3m2!1sen!2sca!4v1620000000000!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(80%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location of Saray"
              />
            </div>
          </motion.div>

          {/* Right Column — Contact Form */}
          <motion.div
            initial={noMotion ? false : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <div
                style={{
                  padding: 'var(--space-8)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                  backgroundColor: 'var(--color-surface)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(45, 106, 79, 0.1)',
                    border: '2px solid var(--color-success)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto var(--space-6)',
                    fontSize: '24px',
                  }}
                >
                  ✓
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-xl)',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    marginBottom: 'var(--space-2)',
                  }}
                >
                  Message Sent
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-muted)',
                    marginBottom: 'var(--space-6)',
                  }}
                >
                  We've received your message and will get back to you shortly.
                </p>
                <AnimatedButton
                  variant="ghost"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                >
                  Send Another
                </AnimatedButton>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  padding: 'var(--space-8)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                  backgroundColor: 'var(--color-surface)',
                }}
              >
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-xl)',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    marginBottom: 'var(--space-6)',
                  }}
                >
                  Send a Message
                </h2>

                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <label htmlFor="contact-name" style={labelStyle}>Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    style={inputStyle}
                    placeholder="Your name"
                  />
                </div>

                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <label htmlFor="contact-email" style={labelStyle}>Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    style={inputStyle}
                    placeholder="you@email.com"
                  />
                </div>

                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <label htmlFor="contact-subject" style={labelStyle}>Subject</label>
                  <select
                    id="contact-subject"
                    required
                    value={formData.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    style={{
                      ...inputStyle,
                      cursor: 'pointer',
                      appearance: 'none',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%239a8f7e' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 12px center',
                      paddingRight: 'var(--space-8)',
                    }}
                  >
                    <option value="">Select a topic…</option>
                    <option value="general">General Inquiry</option>
                    <option value="catering">Catering & Large Groups</option>
                    <option value="feedback">Feedback</option>
                    <option value="press">Press & Media</option>
                  </select>
                </div>

                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <label htmlFor="contact-message" style={labelStyle}>Message</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    style={{
                      ...inputStyle,
                      resize: 'vertical',
                    }}
                    placeholder="How can we help you?"
                  />
                </div>

                <AnimatedButton
                  type="submit"
                  variant="primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Send Message
                </AnimatedButton>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .contact-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-8);
        }
        @media (min-width: 1024px) {
          .contact-layout {
            grid-template-columns: 1fr 1fr;
            gap: var(--space-12);
            align-items: start;
          }
        }
      `}</style>
    </div>
  );
}
