'use client';

import { motion } from 'framer-motion';
import { useOrder } from '@/context/OrderContext';
import { formatPrice, prefersReducedMotion } from '@/lib/utils';
import AnimatedButton from '@/components/ui/AnimatedButton';

export default function OrderSuccess() {
  const { state, dispatch, subtotal, tax, total } = useOrder();
  const noMotion =
    typeof window !== 'undefined' ? prefersReducedMotion() : false;
  
  const rawSubtotal = state.items.reduce(
    (sum, item) => sum + item.dish.price * item.quantity,
    0
  );

  const handleDownloadInvoice = () => {
    window.print();
  };

  return (
    <>
      <motion.div
        className="screen-only"
      initial={noMotion ? false : { opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        maxWidth: '560px',
        margin: '0 auto',
        textAlign: 'center',
        padding: 'var(--space-8)',
      }}
    >
      {/* Checkmark circle */}
      <div
        style={{
          width: '80px',
          height: '80px',
          borderRadius: 'var(--radius-full)',
          background: 'rgba(45, 106, 79, 0.1)',
          border: '2px solid var(--color-success)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto var(--space-8)',
        }}
      >
        <motion.svg
          initial={noMotion ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-success)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path
            d="M5 12l5 5L20 7"
            initial={noMotion ? undefined : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.svg>
      </div>

      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-xs)',
          color: 'var(--color-gold)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          display: 'block',
          marginBottom: 'var(--space-4)',
        }}
      >
        Order Confirmed
      </span>

      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-3xl)',
          fontWeight: 700,
          color: 'var(--color-text)',
          marginBottom: 'var(--space-2)',
        }}
      >
        Teşekkürler!
      </h2>

      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-base)',
          color: 'var(--color-text-muted)',
          marginBottom: 'var(--space-8)',
        }}
      >
        Your order has been received. We&apos;re firing up the grill.
      </p>

      {/* Order number */}
      <div
        style={{
          padding: 'var(--space-6)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-surface)',
          marginBottom: 'var(--space-6)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            color: 'var(--color-text-faint)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: 'var(--space-2)',
          }}
        >
          Order Number
        </span>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-4xl)',
            fontWeight: 800,
            color: 'var(--color-gold)',
            letterSpacing: '0.05em',
          }}
        >
          #{state.orderNumber}
        </span>
      </div>

      {/* Items summary */}
      <div
        style={{
          padding: 'var(--space-6)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-surface)',
          marginBottom: 'var(--space-6)',
          textAlign: 'left',
        }}
      >
        <h3
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            color: 'var(--color-text-faint)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: 'var(--space-4)',
          }}
        >
          Order Summary
        </h3>
        {state.items.map((item) => (
          <div
            key={item.dish.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingTop: 'var(--space-2)',
              paddingBottom: 'var(--space-2)',
              borderBottom: '1px solid var(--color-border)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-sm)',
                color: 'var(--color-text)',
              }}
            >
              {item.dish.name}{' '}
              <span style={{ color: 'var(--color-text-faint)' }}>
                × {item.quantity}
              </span>
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-sm)',
                color: 'var(--color-text-muted)',
                letterSpacing: '0.08em',
              }}
            >
              {formatPrice(item.dish.price * item.quantity)}
            </span>
          </div>
        ))}
        
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: 'var(--space-4)',
            marginTop: 'var(--space-2)',
            borderTop: '1px solid var(--color-border)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-text-muted)',
            }}
          >
            Subtotal
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-text-muted)',
              letterSpacing: '0.08em',
            }}
          >
            {formatPrice(rawSubtotal)}
          </span>
        </div>

        {state.discountAmount > 0 && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingTop: 'var(--space-2)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-sm)',
                color: 'var(--color-success)',
              }}
            >
              Discount ({state.discountCode})
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-sm)',
                color: 'var(--color-success)',
                letterSpacing: '0.08em',
              }}
            >
              -{formatPrice(state.discountAmount)}
            </span>
          </div>
        )}

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: 'var(--space-2)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-text-muted)',
            }}
          >
            HST (13%)
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-text-muted)',
              letterSpacing: '0.08em',
            }}
          >
            {formatPrice(tax)}
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: 'var(--space-4)',
            marginTop: 'var(--space-2)',
            borderTop: '1px solid var(--color-border)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-base)',
              fontWeight: 700,
              color: 'var(--color-text)',
            }}
          >
            Total
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-base)',
              fontWeight: 700,
              color: 'var(--color-gold)',
              letterSpacing: '0.08em',
            }}
          >
            {formatPrice(total)}
          </span>
        </div>
      </div>

      {/* Estimated wait */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-sm)',
          color: 'var(--color-text-muted)',
          marginBottom: 'var(--space-8)',
        }}
      >
        Estimated preparation time:{' '}
        <strong style={{ color: 'var(--color-text)' }}>25–35 minutes</strong>
      </p>

      {/* Actions */}
      <div
        style={{
          display: 'flex',
          gap: 'var(--space-4)',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <AnimatedButton
          variant="primary"
          onClick={() => dispatch({ type: 'RESET' })}
        >
          Start New Order
        </AnimatedButton>
        <AnimatedButton
          variant="ghost"
          onClick={handleDownloadInvoice}
        >
          Download Invoice
        </AnimatedButton>
        <AnimatedButton variant="ghost" href="/">
          Back to Home
        </AnimatedButton>
      </div>
    </motion.div>

    {/* Print Only Invoice */}
    <div className="print-invoice" style={{ display: 'none' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ margin: '0 0 10px 0', fontSize: '24px' }}>ANATOLIAN KITCHEN</h1>
        <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>137 King Street West, Kitchener, ON N2G 1A7</p>
        <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>(519) 555-0123</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px', borderBottom: '1px solid #ddd', paddingBottom: '20px' }}>
        <div>
          <strong>Order Number:</strong> #{state.orderNumber}<br />
          <strong>Date:</strong> {new Date().toLocaleDateString()}
        </div>
        <div style={{ textAlign: 'right' }}>
          <strong>Status:</strong> Paid<br />
          <strong>Method:</strong> Online Order
        </div>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '40px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #000' }}>
            <th style={{ textAlign: 'left', padding: '10px 0' }}>Item</th>
            <th style={{ textAlign: 'center', padding: '10px 0' }}>Qty</th>
            <th style={{ textAlign: 'right', padding: '10px 0' }}>Price</th>
            <th style={{ textAlign: 'right', padding: '10px 0' }}>Total</th>
          </tr>
        </thead>
        <tbody>
          {state.items.map((item) => (
            <tr key={item.dish.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '15px 0' }}>
                {item.dish.name}<br />
                <small style={{ color: '#666' }}>{item.dish.nameEn}</small>
              </td>
              <td style={{ textAlign: 'center', padding: '15px 0' }}>{item.quantity}</td>
              <td style={{ textAlign: 'right', padding: '15px 0' }}>{formatPrice(item.dish.price)}</td>
              <td style={{ textAlign: 'right', padding: '15px 0' }}>{formatPrice(item.dish.price * item.quantity)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ width: '300px', marginLeft: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0' }}>
          <span>Subtotal:</span>
          <span>{formatPrice(rawSubtotal)}</span>
        </div>
        {state.discountAmount > 0 && (
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', color: '#2d6a4f' }}>
            <span>Discount ({state.discountCode}):</span>
            <span>-{formatPrice(state.discountAmount)}</span>
          </div>
        )}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0' }}>
          <span>HST (13%):</span>
          <span>{formatPrice(tax)}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', marginTop: '10px', borderTop: '2px solid #000', fontWeight: 'bold', fontSize: '18px' }}>
          <span>Total:</span>
          <span>{formatPrice(total)}</span>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '60px', color: '#666', fontSize: '14px' }}>
        <p>Thank you for dining with us.<br />Teşekkürler!</p>
      </div>
    </div>
  </>
  );
}
