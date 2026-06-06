'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { prefersReducedMotion } from '@/lib/utils';

interface ReservationForm {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  partySize: string;
  specialRequests: string;
}

const TIME_SLOTS = [
  '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
  '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM',
  '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM',
];

const PARTY_SIZES = ['1', '2', '3', '4', '5', '6', '7', '8', '8+'];

export default function ReservationsPage() {
  const noMotion =
    typeof window !== 'undefined' ? prefersReducedMotion() : false;
  const [formData, setFormData] = useState<ReservationForm>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    partySize: '',
    specialRequests: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof ReservationForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success('Reservation Request Sent', {
      description: `We'll text ${formData.phone} shortly to confirm your table.`,
      duration: 5000,
    });
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

  if (submitted) {
    return (
      <div className="section-padding">
        <div className="site-container">
          <motion.div
            initial={noMotion ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              maxWidth: '560px',
              margin: '0 auto',
              textAlign: 'center',
              padding: 'var(--space-16) var(--space-4)',
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(45, 106, 79, 0.1)',
                border: '2px solid var(--color-success)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--space-8)',
                fontSize: '32px',
              }}
            >
              ✓
            </div>
            <SectionEyebrow text="Reservation Confirmed" />
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                color: 'var(--color-text)',
                marginBottom: 'var(--space-4)',
              }}
            >
              See You Soon
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-base)',
                color: 'var(--color-text-muted)',
                marginBottom: 'var(--space-8)',
              }}
            >
              We&apos;ve reserved a table for{' '}
              <strong style={{ color: 'var(--color-text)' }}>
                {formData.partySize}
              </strong>{' '}
              on{' '}
              <strong style={{ color: 'var(--color-text)' }}>
                {formData.date}
              </strong>{' '}
              at{' '}
              <strong style={{ color: 'var(--color-text)' }}>
                {formData.time}
              </strong>
              . A confirmation has been sent to {formData.email}.
            </p>
            <AnimatedButton
              variant="primary"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  date: '',
                  time: '',
                  partySize: '',
                  specialRequests: '',
                });
              }}
            >
              Make Another Reservation
            </AnimatedButton>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding">
      <div className="site-container">
        <div className="reservation-layout">
          {/* Left — copy */}
          <motion.div
            initial={noMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionEyebrow text="Reservations" />
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-4xl)',
                fontWeight: 700,
                lineHeight: 1.05,
                color: 'var(--color-text)',
                marginBottom: 'var(--space-6)',
              }}
            >
              Save Your
              <br />
              Seat at the Table
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-base)',
                color: 'var(--color-text-muted)',
                marginBottom: 'var(--space-8)',
                maxWidth: '420px',
              }}
            >
              Walk-ins are always welcome, but we hold a few tables each night
              for reservations. The family table (seats 8–12) books fast on
              weekends.
            </p>

            {/* Hours reminder */}
            <div
              style={{
                padding: 'var(--space-6)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-surface)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-gold)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  marginBottom: 'var(--space-4)',
                }}
              >
                Hours
              </h3>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-text-muted)',
                  lineHeight: 2,
                }}
              >
                <div>Tue – Thu: 11:30am – 9:30pm</div>
                <div>Fri – Sat: 11:30am – 10:30pm</div>
                <div>Sun: 12:00pm – 8:00pm</div>
                <div style={{ color: 'var(--color-text-faint)' }}>
                  Monday: Closed
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={noMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
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
                Book Your Table
              </h2>

              <div style={{ marginBottom: 'var(--space-4)' }}>
                <label htmlFor="res-name" style={labelStyle}>Name</label>
                <input
                  id="res-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  style={inputStyle}
                  placeholder="Your name"
                />
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 'var(--space-4)',
                  marginBottom: 'var(--space-4)',
                }}
              >
                <div>
                  <label htmlFor="res-email" style={labelStyle}>Email</label>
                  <input
                    id="res-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    style={inputStyle}
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="res-phone" style={labelStyle}>Phone</label>
                  <input
                    id="res-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    style={inputStyle}
                    placeholder="(519) 555-0123"
                  />
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 'var(--space-4)',
                  marginBottom: 'var(--space-4)',
                }}
              >
                <div>
                  <label htmlFor="res-date" style={labelStyle}>Date</label>
                  <input
                    id="res-date"
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => handleChange('date', e.target.value)}
                    style={{
                      ...inputStyle,
                      colorScheme: 'dark',
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="res-time" style={labelStyle}>Time</label>
                  <select
                    id="res-time"
                    required
                    value={formData.time}
                    onChange={(e) => handleChange('time', e.target.value)}
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
                    <option value="">Select…</option>
                    {TIME_SLOTS.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: 'var(--space-4)' }}>
                <label htmlFor="res-party" style={labelStyle}>Party Size</label>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 'var(--space-2)',
                  }}
                >
                  {PARTY_SIZES.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => handleChange('partySize', size)}
                      style={{
                        padding: 'var(--space-2) var(--space-4)',
                        borderRadius: 'var(--radius-full)',
                        border:
                          formData.partySize === size
                            ? '1px solid var(--color-gold)'
                            : '1px solid var(--color-border)',
                        background:
                          formData.partySize === size
                            ? 'var(--color-gold-muted)'
                            : 'transparent',
                        color:
                          formData.partySize === size
                            ? 'var(--color-gold)'
                            : 'var(--color-text-muted)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'var(--text-xs)',
                        cursor: 'pointer',
                        transition: 'all var(--dur-fast) var(--ease-out)',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 'var(--space-6)' }}>
                <label htmlFor="res-special" style={labelStyle}>
                  Special Requests{' '}
                  <span style={{ color: 'var(--color-text-faint)' }}>(Optional)</span>
                </label>
                <textarea
                  id="res-special"
                  rows={3}
                  value={formData.specialRequests}
                  onChange={(e) =>
                    handleChange('specialRequests', e.target.value)
                  }
                  style={{
                    ...inputStyle,
                    resize: 'vertical',
                  }}
                  placeholder="High chair, birthday, dietary needs…"
                />
              </div>

              <AnimatedButton
                type="submit"
                variant="primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Confirm Reservation
              </AnimatedButton>
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .reservation-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-12);
        }
        @media (min-width: 1024px) {
          .reservation-layout {
            grid-template-columns: 45fr 55fr;
            align-items: start;
          }
        }
      `}</style>
    </div>
  );
}
