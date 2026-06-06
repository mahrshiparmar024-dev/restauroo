'use client';

import { motion } from 'framer-motion';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import { prefersReducedMotion } from '@/lib/utils';

const BENTO_ITEMS = [
  {
    title: 'Wood-Fired Oven',
    description:
      'Our pide oven burns at 400°C. The dough blisters in ninety seconds.',
    gradient:
      'linear-gradient(145deg, #3d1f0d 0%, #7a3520 50%, #c8401a 100%)',
    span: 'large',
  },
  {
    title: 'Charcoal Grill',
    description:
      'Binchotan charcoal only. The smoke is clean and the sear is absolute.',
    gradient:
      'linear-gradient(135deg, #1a0f08 0%, #2a1a0e 60%, #3d2010 100%)',
    span: 'small',
  },
  {
    title: 'Spice Room',
    description:
      'Urfa biber, sumac, and Aleppo pepper — ground fresh each morning.',
    gradient:
      'linear-gradient(150deg, #5c2d15 0%, #8b4525 40%, #c8622a 70%, #e8a020 100%)',
    span: 'small',
  },
  {
    title: 'The Copper Cezve',
    description:
      'Turkish coffee brewed one cup at a time in hand-hammered copper. No machine.',
    gradient:
      'linear-gradient(140deg, #2a1508 0%, #6b3a20 50%, #a05830 100%)',
    span: 'medium',
  },
  {
    title: 'Family Table',
    description:
      'Long shared tables for groups of eight or more. The way we eat at home.',
    gradient:
      'linear-gradient(160deg, #0f0e0d 0%, #1a1714 40%, #2a2018 70%, #1a1210 100%)',
    span: 'medium',
  },
];

export default function ExperienceSection() {
  const noMotion =
    typeof window !== 'undefined' ? prefersReducedMotion() : false;

  return (
    <section className="section-padding" aria-label="The Anatolian experience">
      <div className="site-container">
        <motion.div
          initial={noMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            marginBottom: 'var(--space-16)',
            textAlign: 'right',
          }}
          className="experience-header"
        >
          <SectionEyebrow text="How We Do Things" className="" />
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-4xl)',
              fontWeight: 700,
              lineHeight: 1.05,
              color: 'var(--color-text)',
            }}
          >
            The Kitchen,
            <br />
            Uncovered
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {BENTO_ITEMS.map((item, index) => (
            <motion.article
              key={item.title}
              initial={noMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.4,
                delay: index * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`bento-item bento-${item.span}`}
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
                minHeight: item.span === 'large' ? '320px' : '240px',
                transition: `all var(--dur-base) var(--ease-out)`,
              }}
            >
              {/* Background gradient */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: item.gradient,
                  opacity: 0.6,
                }}
                aria-hidden="true"
              />
              {/* Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(15,14,13,0.9) 0%, rgba(15,14,13,0.3) 100%)',
                }}
                aria-hidden="true"
              />
              {/* Content */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: 'var(--space-8)',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-xl)',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    marginBottom: 'var(--space-2)',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.6,
                    maxWidth: '320px',
                  }}
                >
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .bento-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-4);
        }
        .bento-item:hover {
          border-color: var(--color-border-gold) !important;
          box-shadow: var(--shadow-glow);
        }
        @media (min-width: 768px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .bento-large {
            grid-column: span 2;
          }
        }
        @media (min-width: 1024px) {
          .bento-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          .bento-large {
            grid-column: span 2;
            grid-row: span 1;
          }
          .bento-medium {
            grid-column: span 2;
          }
          .bento-small {
            grid-column: span 1;
          }
          .experience-header {
            text-align: right !important;
          }
        }
      `}</style>
    </section>
  );
}
