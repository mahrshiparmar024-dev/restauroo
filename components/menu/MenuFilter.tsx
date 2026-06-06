'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CATEGORIES, type Category } from '@/lib/menuData';
import { prefersReducedMotion } from '@/lib/utils';

interface MenuFilterProps {
  active: string;
  onChange: (category: string) => void;
}

export default function MenuFilter({ active, onChange }: MenuFilterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<{
    left: number;
    width: number;
  }>({ left: 0, width: 0 });
  const noMotion =
    typeof window !== 'undefined' ? prefersReducedMotion() : false;

  const allCategories = [
    { key: 'all' as const, label: 'All' },
    ...CATEGORIES,
  ];

  useEffect(() => {
    if (!containerRef.current) return;
    const activeButton = containerRef.current.querySelector(
      `[data-category="${active}"]`
    ) as HTMLButtonElement | null;
    if (activeButton) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();
      setIndicatorStyle({
        left: buttonRect.left - containerRect.left,
        width: buttonRect.width,
      });
    }
  }, [active]);

  return (
    <div
      ref={containerRef}
      role="tablist"
      aria-label="Menu categories"
      style={{
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'var(--space-2)',
        padding: 'var(--space-1)',
        borderRadius: 'var(--radius-full)',
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
      }}
    >
      {/* Sliding indicator */}
      <motion.div
        animate={{
          left: indicatorStyle.left,
          width: indicatorStyle.width,
        }}
        transition={
          noMotion
            ? { duration: 0 }
            : {
                type: 'spring',
                stiffness: 350,
                damping: 30,
              }
        }
        style={{
          position: 'absolute',
          top: 'var(--space-1)',
          bottom: 'var(--space-1)',
          borderRadius: 'var(--radius-full)',
          backgroundColor: 'var(--color-surface-2)',
          border: '1px solid var(--color-border-gold)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {allCategories.map((cat) => (
        <button
          key={cat.key}
          data-category={cat.key}
          role="tab"
          aria-selected={active === cat.key}
          onClick={() => onChange(cat.key)}
          style={{
            position: 'relative',
            zIndex: 1,
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: 'var(--space-2) var(--space-6)',
            borderRadius: 'var(--radius-full)',
            border: 'none',
            background: 'transparent',
            color:
              active === cat.key
                ? 'var(--color-text)'
                : 'var(--color-text-muted)',
            cursor: 'pointer',
            transition: `color var(--dur-fast) var(--ease-out)`,
            fontWeight: active === cat.key ? 500 : 400,
            whiteSpace: 'nowrap',
          }}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
