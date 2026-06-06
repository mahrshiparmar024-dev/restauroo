'use client';

import { motion } from 'framer-motion';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import GradientImage from '@/components/ui/GradientImage';
import { prefersReducedMotion } from '@/lib/utils';

export default function AboutSection() {
  const noMotion =
    typeof window !== 'undefined' ? prefersReducedMotion() : false;

  return (
    <section className="section-padding" aria-label="About Anatolian">
      <div
        className="site-container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'var(--space-12)',
          alignItems: 'center',
        }}
      >
        {/* Image — left side on desktop (55% width) */}
        <motion.div
          initial={noMotion ? false : { opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="about-image"
          style={{ position: 'relative' }}
        >
          <GradientImage
            gradient="linear-gradient(180deg, #0f0e0d 0%, #2a1a0e 40%, #3d2010 70%, #1a0f08 100%)"
            alt="Interior of Anatolian restaurant — warm ambient lighting over wooden tables"
            aspectRatio="4/3"
            className=""
          />
          {/* Overlapping gold accent bar */}
          <div
            style={{
              position: 'absolute',
              bottom: '-16px',
              right: '-16px',
              width: '40%',
              height: '30%',
              border: '1px solid var(--color-border-gold)',
              borderRadius: 'var(--radius-md)',
              pointerEvents: 'none',
            }}
            aria-hidden="true"
          />
        </motion.div>

        {/* Text — right side on desktop (45% width) */}
        <motion.div
          initial={noMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionEyebrow text="From Gaziantep to Waterloo Region" />

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-4xl)',
              fontWeight: 700,
              lineHeight: 1.05,
              color: 'var(--color-text)',
              marginBottom: 'var(--space-6)',
            }}
          >
            Three Generations
            <br />
            of Recipes
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-base)',
              lineHeight: 1.75,
              color: 'var(--color-text-muted)',
              marginBottom: 'var(--space-4)',
              maxWidth: '480px',
            }}
          >
            In 2018, the Yılmaz family left Gaziantep with a notebook full of
            handwritten recipes and a conviction that Kitchener deserved better
            Turkish food. Grandmother Ayşe&apos;s kebab spice blend. Uncle
            Hasan&apos;s 40-layer baklava technique. Mother Fatma&apos;s mantı,
            pinched one by one.
          </p>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-base)',
              lineHeight: 1.75,
              color: 'var(--color-text-muted)',
              maxWidth: '480px',
            }}
          >
            Every dish at Anatolian is made from memory — not from a recipe
            book. We don&apos;t cut corners with the dough, we don&apos;t rush
            the slow-cook, and we don&apos;t apologise for the heat.
          </p>

          {/* Stat bar */}
          <div
            style={{
              display: 'flex',
              gap: 'var(--space-12)',
              marginTop: 'var(--space-12)',
              paddingTop: 'var(--space-6)',
              borderTop: '1px solid var(--color-border)',
            }}
          >
            {[
              { value: '2018', label: 'Established' },
              { value: '40+', label: 'Recipes' },
              { value: '3', label: 'Generations' },
            ].map((stat) => (
              <div key={stat.label}>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    color: 'var(--color-gold)',
                    display: 'block',
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-text-muted)',
                    letterSpacing: '0.08em',
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @media (min-width: 768px) {
          .about-image {
            order: 0;
          }
        }
        @media (min-width: 1024px) {
          .site-container:has(.about-image) {
            grid-template-columns: 55fr 45fr !important;
          }
        }
      `}</style>
    </section>
  );
}
