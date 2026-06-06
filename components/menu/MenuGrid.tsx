'use client';

import DishCard from '@/components/menu/DishCard';
import type { Dish } from '@/lib/menuData';

interface MenuGridProps {
  dishes: Dish[];
}

export default function MenuGrid({ dishes }: MenuGridProps) {
  if (dishes.length === 0) {
    return (
      <div
        style={{
          textAlign: 'center',
          padding: 'var(--space-16) var(--space-8)',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-lg)',
            color: 'var(--color-text-muted)',
          }}
        >
          No dishes found in this category.
        </p>
      </div>
    );
  }

  return (
    <div className="menu-grid">
      {dishes.map((dish, index) => (
        <DishCard key={dish.id} dish={dish} index={index} />
      ))}

      <style jsx global>{`
        .menu-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-6);
        }
        @media (min-width: 768px) {
          .menu-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .menu-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </div>
  );
}
