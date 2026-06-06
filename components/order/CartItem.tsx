'use client';

import { motion } from 'framer-motion';
import GradientImage from '@/components/ui/GradientImage';
import { useOrder, type OrderItem } from '@/context/OrderContext';
import { formatPrice, prefersReducedMotion } from '@/lib/utils';

interface CartItemProps {
  item: OrderItem;
}

export default function CartItem({ item }: CartItemProps) {
  const { dispatch } = useOrder();
  const noMotion =
    typeof window !== 'undefined' ? prefersReducedMotion() : false;

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity <= 0) {
      dispatch({ type: 'REMOVE_ITEM', dishId: item.dish.id });
    } else {
      dispatch({
        type: 'UPDATE_QUANTITY',
        dishId: item.dish.id,
        quantity: newQuantity,
      });
    }
  };

  return (
    <motion.div
      layout={!noMotion}
      initial={noMotion ? false : { opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={
        noMotion
          ? undefined
          : { opacity: 0, x: -30, height: 0, marginBottom: 0 }
      }
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: 'flex',
        gap: 'var(--space-4)',
        padding: 'var(--space-4)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--color-border)',
        backgroundColor: 'var(--color-surface)',
        marginBottom: 'var(--space-3)',
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          flexShrink: 0,
          width: '72px',
          height: '72px',
          borderRadius: 'var(--radius-sm)',
          overflow: 'hidden',
        }}
      >
        <GradientImage
          gradient={item.dish.gradientStyle}
          alt={item.dish.name}
          aspectRatio="1/1"
        />
      </div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: 'var(--space-1)',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-base)',
              fontWeight: 600,
              color: 'var(--color-text)',
              lineHeight: 1.3,
            }}
          >
            {item.dish.name}
          </h3>

          {/* Remove button */}
          <button
            onClick={() =>
              dispatch({ type: 'REMOVE_ITEM', dishId: item.dish.id })
            }
            aria-label={`Remove ${item.dish.name} from order`}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-text-faint)',
              cursor: 'pointer',
              padding: 'var(--space-1)',
              fontSize: 'var(--text-sm)',
              lineHeight: 1,
              transition: `color var(--dur-fast) var(--ease-out)`,
            }}
          >
            ✕
          </button>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            color: 'var(--color-text-faint)',
            marginBottom: 'var(--space-3)',
          }}
        >
          {item.dish.nameEn}
        </p>

        {/* Quantity controls + subtotal */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-3)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-full)',
              padding: '2px',
            }}
          >
            <button
              onClick={() => handleQuantityChange(item.quantity - 1)}
              aria-label={`Decrease ${item.dish.name} quantity`}
              style={{
                width: '28px',
                height: '28px',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: 'var(--color-surface-2)',
                color: 'var(--color-text)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'var(--text-sm)',
                fontFamily: 'var(--font-mono)',
                transition: `background var(--dur-fast) var(--ease-out)`,
              }}
            >
              −
            </button>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-sm)',
                color: 'var(--color-text)',
                minWidth: '20px',
                textAlign: 'center',
              }}
            >
              {item.quantity}
            </span>
            <button
              onClick={() => handleQuantityChange(item.quantity + 1)}
              aria-label={`Increase ${item.dish.name} quantity`}
              style={{
                width: '28px',
                height: '28px',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: 'var(--color-surface-2)',
                color: 'var(--color-text)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'var(--text-sm)',
                fontFamily: 'var(--font-mono)',
                transition: `background var(--dur-fast) var(--ease-out)`,
              }}
            >
              +
            </button>
          </div>

          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-gold)',
              letterSpacing: '0.08em',
            }}
          >
            {formatPrice(item.dish.price * item.quantity)}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
