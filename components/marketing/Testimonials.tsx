'use client';

import { motion } from 'framer-motion';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import { prefersReducedMotion } from '@/lib/utils';

const TESTIMONIALS = [
  {
    quote:
      'The adana kebab here is the only one in KW that tastes like the real thing. My Turkish grandmother approved — and she does not approve easily.',
    author: 'Elif K.',
    location: 'Waterloo, ON',
  },
  {
    quote:
      'Ordered the mantı on a friend\'s recommendation and now I drive from Hamilton every other weekend. The garlic yogurt is life-changing.',
    author: 'Marcus D.',
    location: 'Hamilton, ON',
  },
  {
    quote:
      'We booked the family table for my parents\' anniversary. Eighteen dishes, Turkish tea, and baklava for twelve. Best meal we\'ve had in years.',
    author: 'Sarah & James R.',
    location: 'Kitchener, ON',
  },
];

export default function Testimonials() {
  const noMotion =
    typeof window !== 'undefined' ? prefersReducedMotion() : false;

  return (
    <section
      className="section-padding"
      aria-label="What our guests say"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="site-container">
        <motion.div
          initial={noMotion ? false : { opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          style={{ marginBottom: 'var(--space-16)' }}
        >
          <SectionEyebrow text="Word of Mouth" />
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-4xl)',
              fontWeight: 700,
              lineHeight: 1.05,
              color: 'var(--color-text)',
            }}
          >
            Guests Talk,
            <br />
            We Listen
          </h2>
        </motion.div>

        {/* Testimonial cards — staggered layout */}
        <div className="testimonials-grid">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.author}
              initial={noMotion ? false : { opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="testimonial-card"
              style={{
                padding: 'var(--space-8)',
                borderRadius: 'var(--radius-md)',
                border: '2px solid var(--color-border)',
                backgroundColor: 'var(--color-bg)',
                boxShadow: '4px 4px 0px var(--color-border)',
                marginTop: index === 1 ? 'var(--space-8)' : '0',
                transition: `all var(--dur-fast) var(--ease-out)`,
              }}
            >
              {/* Gold quote mark */}
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-4xl)',
                  color: 'var(--color-gold)',
                  lineHeight: 1,
                  display: 'block',
                  marginBottom: 'var(--space-4)',
                  opacity: 0.4,
                }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-base)',
                  lineHeight: 1.75,
                  color: 'var(--color-text)',
                  marginBottom: 'var(--space-8)',
                  fontWeight: 400,
                }}
              >
                {testimonial.quote}
              </p>

              <footer
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                }}
              >
                {/* Avatar placeholder */}
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: 'var(--radius-full)',
                    background: `linear-gradient(135deg, var(--color-surface-2), var(--color-terracotta))`,
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                />
                <div>
                  <cite
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      fontStyle: 'normal',
                      display: 'block',
                    }}
                  >
                    {testimonial.author}
                  </cite>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--text-xs)',
                      color: 'var(--color-text-muted)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {testimonial.location}
                  </span>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .testimonials-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-6);
        }
        .testimonial-card:hover {
          transform: translate(-4px, -4px);
          box-shadow: 8px 8px 0px var(--color-border) !important;
        }
        @media (min-width: 768px) {
          .testimonials-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 767px) {
          .testimonial-card {
            margin-top: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
