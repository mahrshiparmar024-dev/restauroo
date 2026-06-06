'use client';

import { motion } from 'framer-motion';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { prefersReducedMotion } from '@/lib/utils';

export default function CTASection() {
  const noMotion =
    typeof window !== 'undefined' ? prefersReducedMotion() : false;

  return (
    <section
      aria-label="Reserve your table"
      style={{
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 'var(--space-32)',
        paddingBottom: 'var(--space-32)',
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(135deg, #1a100a 0%, #2a1508 40%, #3d1f0d 70%, #1a0f08 100%)',
        }}
        aria-hidden="true"
      />

      {/* Decorative border top */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          height: '1px',
          background:
            'linear-gradient(90deg, transparent, var(--color-border-gold), transparent)',
        }}
        aria-hidden="true"
      />

      <div
        className="site-container"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <motion.div
          initial={noMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              color: 'var(--color-gold)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: 'var(--space-6)',
              display: 'block',
            }}
          >
            Your Table Is Waiting
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
              color: 'var(--color-text)',
              marginBottom: 'var(--space-6)',
            }}
          >
            Come Hungry,
            <br />
            Leave Convinced.
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-lg)',
              color: 'var(--color-text-muted)',
              maxWidth: '480px',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: 'var(--space-12)',
              lineHeight: 1.65,
            }}
          >
            Tuesdays through Sundays, 137 King Street West. Walk-ins welcome,
            but the family table books fast.
          </p>

          <div
            style={{
              display: 'flex',
              gap: 'var(--space-4)',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <AnimatedButton href="/reservations" variant="primary">
              Reserve a Table
            </AnimatedButton>
            <AnimatedButton href="/menu" variant="ghost">
              See the Menu
            </AnimatedButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
