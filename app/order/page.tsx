'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useOrder } from '@/context/OrderContext';
import CartItem from '@/components/order/CartItem';
import OrderSummary from '@/components/order/OrderSummary';
import OrderSuccess from '@/components/order/OrderSuccess';
import AnimatedButton from '@/components/ui/AnimatedButton';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import { prefersReducedMotion } from '@/lib/utils';

export default function OrderPage() {
  const { state } = useOrder();
  const noMotion =
    typeof window !== 'undefined' ? prefersReducedMotion() : false;

  // Success state
  if (state.status === 'success') {
    return (
      <div className="section-padding">
        <div className="site-container">
          <OrderSuccess />
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding">
      <div className="site-container">
        {/* Header */}
        <motion.div
          initial={noMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 'var(--space-12)' }}
        >
          <SectionEyebrow text="Your Order" />
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-4xl)',
              fontWeight: 700,
              lineHeight: 1.05,
              color: 'var(--color-text)',
            }}
          >
            Review & Checkout
          </h1>
        </motion.div>

        {state.items.length === 0 ? (
          /* ── Empty Cart ── */
          <motion.div
            initial={noMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            style={{
              textAlign: 'center',
              padding: 'var(--space-16) var(--space-8)',
            }}
          >
            {/* CSS art — plate illustration */}
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: 'var(--radius-full)',
                background:
                  'linear-gradient(145deg, var(--color-surface), var(--color-surface-2))',
                border: '2px solid var(--color-border)',
                margin: '0 auto var(--space-8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
              role="img"
              aria-label="Empty plate illustration"
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--color-border)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '-8px',
                  right: '-8px',
                  width: '40px',
                  height: '8px',
                  borderRadius: 'var(--radius-full)',
                  background:
                    'linear-gradient(90deg, var(--color-surface-2), var(--color-text-faint))',
                  transform: 'rotate(-30deg)',
                }}
              />
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-2xl)',
                fontWeight: 600,
                color: 'var(--color-text)',
                marginBottom: 'var(--space-3)',
              }}
            >
              Nothing here yet
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-base)',
                color: 'var(--color-text-muted)',
                marginBottom: 'var(--space-8)',
                maxWidth: '360px',
                margin: '0 auto var(--space-8)',
              }}
            >
              Your order is empty. Browse our menu and add something delicious.
            </p>
            <AnimatedButton href="/menu" variant="primary">
              Browse the Menu
            </AnimatedButton>
          </motion.div>
        ) : (
          /* ── Cart with items ── */
          <div className="order-layout">
            {/* Left: Cart items */}
            <div>
              <AnimatePresence mode="popLayout">
                {state.items.map((item) => (
                  <CartItem key={item.dish.id} item={item} />
                ))}
              </AnimatePresence>
            </div>

            {/* Right: Summary + Checkout */}
            <div className="order-summary-sticky">
              <OrderSummary />
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        .order-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-8);
        }
        .order-summary-sticky {
          position: relative;
        }
        @media (min-width: 1024px) {
          .order-layout {
            grid-template-columns: 1fr 400px;
          }
          .order-summary-sticky {
            position: sticky;
            top: calc(72px + var(--space-8));
            align-self: start;
          }
        }
      `}</style>
    </div>
  );
}
