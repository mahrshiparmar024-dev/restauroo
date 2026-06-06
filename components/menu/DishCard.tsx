'use client';

import { motion } from 'framer-motion';
import GradientImage from '@/components/ui/GradientImage';
import { useOrder } from '@/context/OrderContext';
import type { Dish } from '@/lib/menuData';
import { formatPrice, prefersReducedMotion } from '@/lib/utils';
import { useState } from 'react';

interface DishCardProps {
  dish: Dish;
  index: number;
}

export default function DishCard({ dish, index }: DishCardProps) {
  const { dispatch } = useOrder();
  const [justAdded, setJustAdded] = useState(false);
  const noMotion =
    typeof window !== 'undefined' ? prefersReducedMotion() : false;

  const handleAdd = () => {
    dispatch({ type: 'ADD_ITEM', dish });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <motion.article
      initial={noMotion ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.4,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={
        noMotion
          ? undefined
          : {
              y: -4,
              transition: { duration: 0.2 },
            }
      }
      style={{
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-border)',
        overflow: 'hidden',
        backgroundColor: 'var(--color-surface)',
        transition: `border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)`,
      }}
      className="dish-card"
    >
      {/* Image */}
      <div style={{ position: 'relative' }}>
        <GradientImage
          gradient={dish.gradientStyle}
          alt={`${dish.name} — ${dish.nameEn}`}
          aspectRatio="16/10"
        />

        {/* Tags */}
        <div
          style={{
            position: 'absolute',
            top: 'var(--space-3)',
            left: 'var(--space-3)',
            display: 'flex',
            gap: 'var(--space-2)',
          }}
        >
          {dish.isPopular && (
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '2px 8px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--color-gold-muted)',
                color: 'var(--color-gold)',
                border: '1px solid var(--color-border-gold)',
              }}
            >
              Popular
            </span>
          )}
          {dish.isVegetarian && (
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '2px 8px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(45, 106, 79, 0.15)',
                color: 'var(--color-success)',
                border: '1px solid rgba(45, 106, 79, 0.25)',
              }}
            >
              Vegetarian
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: 'var(--space-6)' }}>
        {/* Name + Price row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 'var(--space-3)',
            marginBottom: 'var(--space-1)',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-xl)',
              fontWeight: 600,
              color: 'var(--color-text)',
              lineHeight: 1.2,
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
              marginTop: '2px',
            }}
          >
            {formatPrice(dish.price)}
          </span>
        </div>

        {/* English name */}
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            color: 'var(--color-text-faint)',
            letterSpacing: '0.08em',
            marginBottom: 'var(--space-3)',
          }}
        >
          {dish.nameEn}
        </p>

        {/* Description */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-sm)',
            lineHeight: 1.65,
            color: 'var(--color-text-muted)',
            marginBottom: 'var(--space-6)',
          }}
        >
          {dish.description}
        </p>

        {/* Add to Order button */}
        <button
          onClick={handleAdd}
          aria-label={`Add ${dish.name} to order`}
          className="btn-shimmer"
          style={{
            width: '100%',
            padding: 'var(--space-3) var(--space-6)',
            borderRadius: 'var(--radius-full)',
            border: justAdded
              ? '1px solid var(--color-success)'
              : '1px solid var(--color-border)',
            background: justAdded
              ? 'rgba(45, 106, 79, 0.1)'
              : 'transparent',
            color: justAdded
              ? 'var(--color-success)'
              : 'var(--color-text)',
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: `all var(--dur-base) var(--ease-out)`,
            fontWeight: 500,
          }}
        >
          {justAdded ? '✓ Added' : 'Add to Order'}
        </button>
      </div>

      <style jsx global>{`
        .dish-card:hover {
          border-color: var(--color-border-gold) !important;
          box-shadow: var(--shadow-card);
        }
      `}</style>
    </motion.article>
  );
}
