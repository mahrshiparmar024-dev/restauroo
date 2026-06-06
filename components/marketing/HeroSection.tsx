'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { prefersReducedMotion } from '@/lib/utils';

const HERO_WORDS = ['ANATOLIAN'];

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
      {/* Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--color-bg)',
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
            'radial-gradient(ellipse at center, rgba(255, 59, 0, 0.15) 0%, transparent 70%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Terracotta accent glow — bottom left */}
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-10%',
          width: '50%',
          height: '60%',
          background:
            'radial-gradient(ellipse at center, rgba(255, 59, 0, 0.1) 0%, transparent 70%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <div
        className="site-container"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          paddingTop: 'var(--space-16)',
          paddingBottom: 'var(--space-16)',
          minHeight: '60vh',
        }}
      >
        {/* Text block */}
        <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Eyebrow */}
          <motion.span
            initial={noMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-lg)',
              fontWeight: 800,
              color: 'var(--color-terracotta)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: 'var(--space-6)',
              border: '2px solid var(--color-border)',
              padding: '4px 12px',
              display: 'inline-block',
              boxShadow: '4px 4px 0px var(--color-border)',
            }}
          >
            🔥 KITCHENER, ON
          </motion.span>

          {/* Headline — letter spacing animation */}
          <motion.h1
            initial={noMotion ? false : { opacity: 0, scale: 0.95, letterSpacing: '0em' }}
            animate={{ opacity: 1, scale: 1, letterSpacing: '-0.03em' }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-hero)',
              fontWeight: 800,
              lineHeight: 0.92,
              color: 'var(--color-text)',
              marginBottom: 'var(--space-6)',
            }}
          >
            ANATOLIAN
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={noMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: [0.25, 1, 0.5, 1],
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
              delay: 0.4,
              ease: [0.25, 1, 0.5, 1],
            }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
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

          {/* Social Proof Trust Badge */}
          <motion.div
            initial={noMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.5,
              ease: [0.25, 1, 0.5, 1],
            }}
            style={{
              marginTop: 'var(--space-8)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-3)',
            }}
          >
            {/* Avatar Group */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    border: '2px solid var(--color-bg)',
                    marginLeft: i > 1 ? '-12px' : '0',
                    background: 'var(--color-terracotta)',
                    color: '#ffffff',
                    fontSize: '10px',
                    fontWeight: 800,
                  }}
                >
                  {i === 3 ? '5k+' : '★'}
                </div>
              ))}
            </div>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-sm)',
                color: 'var(--color-text-muted)',
              }}
            >
              Over <strong>5,000+</strong> happy customers in Kitchener
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
