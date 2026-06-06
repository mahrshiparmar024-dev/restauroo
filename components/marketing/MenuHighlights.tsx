'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
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
      style={{ backgroundColor: 'var(--color-bg)', borderTop: '2px solid var(--color-border)', borderBottom: '2px solid var(--color-border)' }}
    >
      <div className="site-container">
        {/* Header — left-aligned */}
        <motion.div
          initial={noMotion ? false : { opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
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
            Drive to Barrie
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
              initial={noMotion ? false : { opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 1, 0.5, 1],
              }}
              className={`highlight-card ${index === 0 ? 'highlight-card-large' : ''}`}
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                border: '2px solid var(--color-border)',
                overflow: 'hidden',
                transition: `all 0.2s var(--ease-out)`,
                cursor: 'pointer',
                backgroundColor: 'var(--color-surface)',
                boxShadow: '4px 4px 0px var(--color-border)',
              }}
              whileHover={{ 
                x: -4,
                y: -4, 
                boxShadow: '8px 8px 0px var(--color-border)',
              }}
            >
              {/* Social Engineering Badges */}
              {index === 0 && (
                <div style={{
                  position: 'absolute',
                  top: 'var(--space-4)',
                  right: 'var(--space-4)',
                  zIndex: 10,
                  background: 'var(--color-terracotta)',
                  color: '#ffffff',
                  padding: '6px 16px',
                  borderRadius: 'var(--radius-sm)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  border: '2px solid var(--color-border)',
                  boxShadow: '2px 2px 0px var(--color-border)',
                }}>
                  HOT
                </div>
              )}
              {index === 2 && (
                <div style={{
                  position: 'absolute',
                  top: 'var(--space-4)',
                  right: 'var(--space-4)',
                  zIndex: 10,
                  background: '#00B85C',
                  color: 'white',
                  padding: '6px 16px',
                  borderRadius: 'var(--radius-sm)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  border: '2px solid var(--color-border)',
                  boxShadow: '2px 2px 0px var(--color-border)',
                }}>
                  SELLING FAST
                </div>
              )}
              <Link
                href="/menu"
                style={{
                  display: 'block',
                  textDecoration: 'none',
                }}
              >
                <div
                  className="img-wrapper"
                  style={{
                    borderBottom: '2px solid var(--color-border)',
                    position: 'relative',
                    width: '100%',
                    aspectRatio: index === 0 ? '16/10' : '4/3',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={`/images/${dish.id}.png`}
                    alt={`${dish.name} — ${dish.nameEn}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
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
        .highlight-card .img-wrapper img {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .highlight-card:hover .img-wrapper img {
          transform: scale(1.05) !important;
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
