'use client';

import { motion } from 'framer-motion';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { prefersReducedMotion } from '@/lib/utils';

const HERO_WORDS = ['Anatolia,', 'Plated.'];

export default function HeroSection() {
  const noMotion =
    typeof window !== 'undefined' ? prefersReducedMotion() : false;

  return (
    <section
      aria-label="Welcome to Anatolian"
      style={{
        position: 'relative',
        minHeight: 'calc(100dvh - 72px)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(160deg, #0f0e0d 0%, #1a100a 30%, #2a1a0e 50%, #1a0f08 75%, #0f0e0d 100%)',
          zIndex: 0,
        }}
      />

      {/* Decorative gradient blob — top right */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '60%',
          height: '80%',
          background:
            'radial-gradient(ellipse at center, rgba(200, 64, 26, 0.08) 0%, transparent 70%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Gold accent glow — bottom left */}
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-10%',
          width: '50%',
          height: '60%',
          background:
            'radial-gradient(ellipse at center, rgba(232, 160, 32, 0.05) 0%, transparent 70%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <div
        className="site-container"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'var(--space-12)',
          paddingTop: 'var(--space-16)',
          paddingBottom: 'var(--space-16)',
        }}
      >
        {/* Text block — left-aligned, not centered */}
        <div style={{ maxWidth: '720px' }}>
          {/* Eyebrow */}
          <motion.span
            initial={noMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              color: 'var(--color-gold)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: 'var(--space-6)',
            }}
          >
            Kitchener, Ontario
          </motion.span>

          {/* Headline — word stagger */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-hero)',
              fontWeight: 800,
              lineHeight: 0.92,
              letterSpacing: '-0.03em',
              color: 'var(--color-text)',
              marginBottom: 'var(--space-8)',
            }}
          >
            {HERO_WORDS.map((word, i) => (
              <motion.span
                key={i}
                initial={noMotion ? false : { opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  display: 'inline-block',
                  marginRight: i < HERO_WORDS.length - 1 ? '0.3em' : 0,
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={noMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-lg)',
              lineHeight: 1.65,
              color: 'var(--color-text-muted)',
              maxWidth: '520px',
              marginBottom: 'var(--space-12)',
            }}
          >
            Slow-cooked kebabs, hand-rolled pide, and baklava that takes three
            days to make. Come hungry.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={noMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-4)',
            }}
          >
            <AnimatedButton href="/menu" variant="primary">
              Explore the Menu
            </AnimatedButton>
            <AnimatedButton href="/reservations" variant="ghost">
              Reserve a Table
            </AnimatedButton>
          </motion.div>
        </div>

        {/* Right side — decorative gradient image */}
        <motion.div
          initial={noMotion ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            width: '45%',
            height: '70%',
            background:
              'linear-gradient(135deg, #3d1f0d 0%, #7a3520 30%, #c8401a 55%, #e8a020 80%, #d4a843 100%)',
            borderRadius: 'var(--radius-xl)',
            opacity: 0.15,
            zIndex: 0,
            pointerEvents: 'none',
          }}
          className="hero-deco"
          aria-hidden="true"
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={noMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: 'var(--space-8)',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--space-2)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            color: 'var(--color-text-faint)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: '1px',
            height: '32px',
            backgroundColor: 'var(--color-text-faint)',
          }}
        />
      </motion.div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .hero-deco {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
