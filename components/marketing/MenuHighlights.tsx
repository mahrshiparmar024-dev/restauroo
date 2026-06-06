'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import GradientImage from '@/components/ui/GradientImage';
import { getPopularDishes } from '@/lib/menuData';
import { formatPrice, prefersReducedMotion } from '@/lib/utils';

const popularDishes = getPopularDishes().slice(0, 6);

export default function MenuHighlights() {
  const noMotion =
    typeof window !== 'undefined' ? prefersReducedMotion() : false;

  return (
    <section
      className="section-padding"
      aria-label="Menu highlights"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="site-container">
        {/* Header — left-aligned */}
        <motion.div
          initial={noMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            marginBottom: 'var(--space-16)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
          className="menu-highlights-header"
        >
          <SectionEyebrow text="What We Cook" />
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-4xl)',
              fontWeight: 700,
              lineHeight: 1.05,
              color: 'var(--color-text)',
              marginBottom: 'var(--space-4)',
            }}
          >
            Dishes Worth the
            <br />
            Drive to Kitchener
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-base)',
              color: 'var(--color-text-muted)',
              maxWidth: '480px',
            }}
          >
            A few of the plates that bring people back. Every recipe is built
            from scratch, every morning.
          </p>
        </motion.div>

        {/* Dish Grid — asymmetric: first card is larger */}
        <div className="highlights-grid">
          {popularDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={noMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.4,
                delay: index * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`highlight-card ${index === 0 ? 'highlight-card-large' : ''}`}
              style={{
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border)',
                overflow: 'hidden',
                transition: `all var(--dur-base) var(--ease-out)`,
                cursor: 'pointer',
                backgroundColor: 'var(--color-bg)',
              }}
            >
              <Link
                href="/menu"
                style={{
                  display: 'block',
                  textDecoration: 'none',
                }}
              >
                <GradientImage
                  gradient={dish.gradientStyle}
                  alt={`${dish.name} — ${dish.nameEn}`}
                  aspectRatio={index === 0 ? '16/10' : '4/3'}
                />
                <div
                  style={{
                    padding: 'var(--space-6)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: 'var(--space-2)',
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'var(--text-xl)',
                        fontWeight: 600,
                        color: 'var(--color-text)',
                      }}
                    >
                      {dish.name}
                    </h3>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'var(--text-sm)',
                        color: 'var(--color-gold)',
                        letterSpacing: '0.08em',
                        flexShrink: 0,
                        marginLeft: 'var(--space-4)',
                      }}
                    >
                      {formatPrice(dish.price)}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-text-muted)',
                      lineHeight: 1.6,
                    }}
                  >
                    {dish.nameEn}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View full menu link */}
        <motion.div
          initial={noMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          style={{
            marginTop: 'var(--space-12)',
            textAlign: 'right',
          }}
        >
          <Link
            href="/menu"
            className="nav-link"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-gold)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            View Full Menu →
          </Link>
        </motion.div>
      </div>

      <style jsx global>{`
        .highlights-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-6);
        }
        .highlight-card:hover {
          transform: translateY(-4px);
          border-color: var(--color-border-gold) !important;
          box-shadow: var(--shadow-card);
        }
        @media (min-width: 768px) {
          .highlights-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .highlight-card-large {
            grid-column: span 2;
          }
        }
        @media (min-width: 1024px) {
          .highlights-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .highlight-card-large {
            grid-column: span 2;
          }
        }
      `}</style>
    </section>
  );
}
