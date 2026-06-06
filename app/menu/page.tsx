'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import type { Metadata } from 'next';
import MenuFilter from '@/components/menu/MenuFilter';
import MenuGrid from '@/components/menu/MenuGrid';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import { menuData, type Category } from '@/lib/menuData';
import { prefersReducedMotion } from '@/lib/utils';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const noMotion =
    typeof window !== 'undefined' ? prefersReducedMotion() : false;

  const filteredDishes = useMemo(() => {
    if (activeCategory === 'all') return menuData;
    return menuData.filter((dish) => dish.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="section-padding">
      <div className="site-container">
        {/* Header */}
        <motion.div
          initial={noMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 'var(--space-8)' }}
        >
          <SectionEyebrow text="What We Cook" />
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-4xl)',
              fontWeight: 700,
              lineHeight: 1.05,
              color: 'var(--color-text)',
              marginBottom: 'var(--space-4)',
            }}
          >
            The Full Menu
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-base)',
              color: 'var(--color-text-muted)',
              maxWidth: '520px',
            }}
          >
            Twenty-four dishes built from three generations of family recipes.
            Everything is made from scratch, every morning. Prices in Canadian
            dollars.
          </p>
        </motion.div>

        {/* Sticky filter bar */}
        <div
          style={{
            position: 'sticky',
            top: '72px',
            zIndex: 10,
            paddingTop: 'var(--space-4)',
            paddingBottom: 'var(--space-4)',
            backgroundColor: 'var(--color-bg)',
            marginBottom: 'var(--space-8)',
          }}
        >
          <MenuFilter
            active={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        {/* Grid */}
        <MenuGrid dishes={filteredDishes} />
      </div>
    </div>
  );
}
