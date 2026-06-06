'use client';

import { motion } from 'framer-motion';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import GradientImage from '@/components/ui/GradientImage';
import { prefersReducedMotion } from '@/lib/utils';

export default function AboutPage() {
  const noMotion =
    typeof window !== 'undefined' ? prefersReducedMotion() : false;

  return (
    <div className="section-padding">
      <div className="site-container">
        {/* Header */}
        <motion.div
          initial={noMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 'var(--space-16)', textAlign: 'center' }}
        >
          <SectionEyebrow text="Our Story" className="mx-auto" />
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
            The Notebook from
            <br />
            Gaziantep
          </h1>
        </motion.div>

        {/* Content Section 1 */}
        <div className="about-layout" style={{ marginBottom: 'var(--space-24)' }}>
          <motion.div
            initial={noMotion ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <GradientImage
              gradient="linear-gradient(135deg, #1a0f08 0%, #3d2010 50%, #6b3a20 100%)"
              alt="Family cooking in the kitchen"
              aspectRatio="4/5"
            />
          </motion.div>
          <motion.div
            initial={noMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-3xl)',
                fontWeight: 600,
                color: 'var(--color-text)',
                marginBottom: 'var(--space-4)',
              }}
            >
              It Started with a Spice Blend
            </h2>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-base)',
                color: 'var(--color-text-muted)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-4)',
              }}
            >
              <p>
                When the Yılmaz family moved to Canada in 2018, they brought very little. But tucked into a small suitcase was a leather-bound notebook filled with recipes, and a jar of grandmother Ayşe&apos;s proprietary kebab spice blend.
              </p>
              <p>
                For years, they cooked for friends and neighbors in Waterloo Region. The response was always the same: "Where can we buy this?" In 2025, they finally answered by opening Saray.
              </p>
              <p>
                Saray isn't just a restaurant; it's a living archive of southeastern Turkish culinary traditions. We don't adapt our flavors. We cook exactly as we would back home.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Content Section 2 */}
        <div className="about-layout reverse">
          <motion.div
            initial={noMotion ? false : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <GradientImage
              gradient="linear-gradient(160deg, #2a1a0e 0%, #5c3d1e 50%, #8a6535 100%)"
              alt="Making fresh dough for pide"
              aspectRatio="4/5"
            />
          </motion.div>
          <motion.div
            initial={noMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-3xl)',
                fontWeight: 600,
                color: 'var(--color-text)',
                marginBottom: 'var(--space-4)',
              }}
            >
              The Philosophy
            </h2>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-base)',
                color: 'var(--color-text-muted)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-4)',
              }}
            >
              <p>
                <strong>No Shortcuts.</strong> If a dish takes three days to prepare—like our baklava—we take three days. There are no microwaves in our kitchen, and no pre-made sauces.
              </p>
              <p>
                <strong>Fire is an Ingredient.</strong> Real Turkish food requires real fire. Our wood-fired oven burns at 400°C for our pide, and our binchotan charcoal grill provides the essential smoky char for our kebabs.
              </p>
              <p>
                <strong>Hospitality is Everything.</strong> In Turkey, a guest is treated as a gift from God. When you sit at our tables, you are eating in our home. Your tea glass will never be empty.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .about-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-8);
        }
        @media (min-width: 768px) {
          .about-layout {
            grid-template-columns: 1fr 1fr;
            gap: var(--space-12);
            align-items: center;
          }
          .about-layout.reverse > :first-child {
            order: 2;
          }
        }
      `}</style>
    </div>
  );
}
