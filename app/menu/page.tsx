'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import MenuFilter from '@/components/menu/MenuFilter';
import MenuGrid from '@/components/menu/MenuGrid';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import { menuData, CATEGORIES } from '@/lib/menuData';
import { prefersReducedMotion } from '@/lib/utils';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>(CATEGORIES[0].key);
  const noMotion = typeof window !== 'undefined' ? prefersReducedMotion() : false;
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Smooth scroll to section
  const handleScrollToSection = (categoryKey: string) => {
    setActiveCategory(categoryKey);
    const element = document.getElementById(`category-${categoryKey}`);
    if (element) {
      // Offset for sticky header
      const y = element.getBoundingClientRect().top + window.scrollY - 150;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Setup Intersection Observer to spy on sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const categoryKey = entry.target.id.replace('category-', '');
            setActiveCategory(categoryKey);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

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
            Dishes built from three generations of family recipes.
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
            onChange={handleScrollToSection}
          />
        </div>

        {/* Menu Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
          {CATEGORIES.map((cat, index) => {
            const categoryDishes = menuData.filter(d => d.category === cat.key);
            if (categoryDishes.length === 0) return null;

            return (
              <div
                key={cat.key}
                id={`category-${cat.key}`}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
              >
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    marginBottom: 'var(--space-6)',
                    paddingBottom: 'var(--space-2)',
                    borderBottom: '1px solid var(--color-border)'
                  }}
                >
                  {cat.label}
                </h2>
                <MenuGrid dishes={categoryDishes} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
