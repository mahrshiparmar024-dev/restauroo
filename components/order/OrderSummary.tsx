'use client';

import { useState, type FormEvent } from 'react';
import { toast } from 'sonner';
import { useOrder } from '@/context/OrderContext';
import { formatPrice, generateOrderNumber } from '@/lib/utils';
import AnimatedButton from '@/components/ui/AnimatedButton';

interface FormData {
  name: string;
  phone: string;
  email: string;
  pickupTime: string;
  specialInstructions: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  pickupTime?: string;
}

const PICKUP_OPTIONS = [
  'Dine In',
  '5:00 PM',
  '5:30 PM',
  '6:00 PM',
  '6:30 PM',
  '7:00 PM',
  '7:30 PM',
  '8:00 PM',
  '8:30 PM',
  '9:00 PM',
];

export default function OrderSummary() {
  const { state, dispatch, subtotal, tax, total } = useOrder();
  const rawSubtotal = state.items.reduce(
    (sum, item) => sum + item.dish.price * item.quantity,
    0
  );

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    pickupTime: '',
    specialInstructions: '',
  });
  const [promoInput, setPromoInput] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[\d\s\-+()]{7,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.pickupTime) errs.pickupTime = 'Please select a time';
    return errs;
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate());
  };

  const handleChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const newData = { ...formData, [field]: value };
      const errs: FormErrors = {};
      if (!newData.name.trim()) errs.name = 'Name is required';
      if (!newData.phone.trim()) errs.phone = 'Phone number is required';
      if (!newData.email.trim()) errs.email = 'Email is required';
      if (!newData.pickupTime) errs.pickupTime = 'Please select a time';
      setErrors(errs);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setTouched({ name: true, phone: true, email: true, pickupTime: true });

    if (Object.keys(validationErrors).length === 0) {
      const orderNumber = generateOrderNumber(Date.now());
      dispatch({ type: 'SUBMIT_ORDER', orderNumber });
    }
  };

  const handleApplyPromo = () => {
    const code = promoInput.trim().toUpperCase();
    if (!code) return;

    if (code === 'WELCOME10') {
      const amount = rawSubtotal * 0.10;
      dispatch({ type: 'APPLY_DISCOUNT', code, amount });
      toast.success('Promo Code Applied', { description: '10% off your order.' });
      setPromoInput('');
    } else if (code === 'KEBAB20') {
      const amount = rawSubtotal * 0.20;
      dispatch({ type: 'APPLY_DISCOUNT', code, amount });
      toast.success('Promo Code Applied', { description: '20% off your order.' });
      setPromoInput('');
    } else {
      toast.error('Invalid Promo Code', { description: 'This code does not exist.' });
    }
  };

  const handleRemovePromo = () => {
    dispatch({ type: 'REMOVE_DISCOUNT' });
    toast.info('Promo Code Removed');
  };

  const isFieldValid = (field: keyof FormErrors) =>
    touched[field] && !errors[field];
  const isFieldInvalid = (field: keyof FormErrors) =>
    touched[field] && !!errors[field];

  const inputStyle = (field: keyof FormErrors): React.CSSProperties => ({
    width: '100%',
    padding: 'var(--space-3) var(--space-4)',
    borderRadius: 'var(--radius-md)',
    border: `1px solid ${
      isFieldInvalid(field)
        ? 'var(--color-error)'
        : isFieldValid(field)
          ? 'var(--color-success)'
          : 'var(--color-border)'
    }`,
    backgroundColor: 'var(--color-bg)',
    color: 'var(--color-text)',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-sm)',
    outline: 'none',
    transition: `border-color var(--dur-fast) var(--ease-out)`,
  });

  return (
    <div>
      {/* Order totals */}
      <div
        style={{
          padding: 'var(--space-6)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-surface)',
          marginBottom: 'var(--space-6)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 'var(--space-3)',
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
              color: 'var(--color-text)',
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
              marginBottom: 'var(--space-3)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-sm)',
                color: 'var(--color-success)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
              }}
            >
              Discount ({state.discountCode})
              <button
                type="button"
                onClick={handleRemovePromo}
                aria-label="Remove discount"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-error)',
                  cursor: 'pointer',
                  fontSize: 'var(--text-xs)',
                  padding: 0,
                }}
              >
                ✕
              </button>
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
            marginBottom: 'var(--space-3)',
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
              color: 'var(--color-text)',
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
            borderTop: '1px solid var(--color-border)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-lg)',
              fontWeight: 700,
              color: 'var(--color-text)',
            }}
          >
            Total
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-lg)',
              color: 'var(--color-gold)',
              fontWeight: 700,
              letterSpacing: '0.08em',
            }}
          >
            {formatPrice(total)}
          </span>
        </div>
      </div>

      {/* Promo Code Input */}
      {!state.discountCode && (
        <div
          style={{
            padding: 'var(--space-4)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-border)',
            backgroundColor: 'var(--color-surface)',
            marginBottom: 'var(--space-6)',
            display: 'flex',
            gap: 'var(--space-2)',
          }}
        >
          <input
            type="text"
            value={promoInput}
            onChange={(e) => setPromoInput(e.target.value)}
            placeholder="Promo code (e.g. WELCOME10)"
            style={{
              flex: 1,
              padding: 'var(--space-3) var(--space-4)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              backgroundColor: 'var(--color-bg)',
              color: 'var(--color-text)',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-sm)',
              outline: 'none',
              textTransform: 'uppercase',
            }}
          />
          <button
            type="button"
            onClick={handleApplyPromo}
            disabled={!promoInput.trim() || state.items.length === 0}
            style={{
              padding: '0 var(--space-4)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              backgroundColor: 'var(--color-surface-2)',
              color: 'var(--color-text)',
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              cursor: (!promoInput.trim() || state.items.length === 0) ? 'not-allowed' : 'pointer',
              opacity: (!promoInput.trim() || state.items.length === 0) ? 0.5 : 1,
              transition: 'all var(--dur-fast) var(--ease-out)',
            }}
          >
            Apply
          </button>
        </div>
      )}

      {/* Checkout form */}
      <form onSubmit={handleSubmit}>
        <div
          style={{
            padding: 'var(--space-6)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-border)',
            backgroundColor: 'var(--color-surface)',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-xl)',
              fontWeight: 600,
              color: 'var(--color-text)',
              marginBottom: 'var(--space-6)',
            }}
          >
            Checkout Details
          </h3>

          {/* Name */}
          <div style={{ marginBottom: 'var(--space-4)' }}>
            <label
              htmlFor="checkout-name"
              style={{
                display: 'block',
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--color-text-muted)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: 'var(--space-2)',
              }}
            >
              Name
            </label>
            <div style={{ position: 'relative' }}>
              <input
                id="checkout-name"
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                onBlur={() => handleBlur('name')}
                style={inputStyle('name')}
                placeholder="Your name"
              />
              {isFieldValid('name') && (
                <span
                  style={{
                    position: 'absolute',
                    right: 'var(--space-3)',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--color-success)',
                    fontSize: 'var(--text-sm)',
                  }}
                >
                  ✓
                </span>
              )}
            </div>
            {isFieldInvalid('name') && (
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-error)',
                  marginTop: 'var(--space-1)',
                }}
              >
                {errors.name}
              </p>
            )}
          </div>

          {/* Phone */}
          <div style={{ marginBottom: 'var(--space-4)' }}>
            <label
              htmlFor="checkout-phone"
              style={{
                display: 'block',
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--color-text-muted)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: 'var(--space-2)',
              }}
            >
              Phone
            </label>
            <div style={{ position: 'relative' }}>
              <input
                id="checkout-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                onBlur={() => handleBlur('phone')}
                style={inputStyle('phone')}
                placeholder="(519) 555-0123"
              />
              {isFieldValid('phone') && (
                <span
                  style={{
                    position: 'absolute',
                    right: 'var(--space-3)',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--color-success)',
                    fontSize: 'var(--text-sm)',
                  }}
                >
                  ✓
                </span>
              )}
            </div>
            {isFieldInvalid('phone') && (
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-error)',
                  marginTop: 'var(--space-1)',
                }}
              >
                {errors.phone}
              </p>
            )}
          </div>

          {/* Email */}
          <div style={{ marginBottom: 'var(--space-4)' }}>
            <label
              htmlFor="checkout-email"
              style={{
                display: 'block',
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--color-text-muted)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: 'var(--space-2)',
              }}
            >
              Email
            </label>
            <div style={{ position: 'relative' }}>
              <input
                id="checkout-email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                onBlur={() => handleBlur('email')}
                style={inputStyle('email')}
                placeholder="you@email.com"
              />
              {isFieldValid('email') && (
                <span
                  style={{
                    position: 'absolute',
                    right: 'var(--space-3)',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--color-success)',
                    fontSize: 'var(--text-sm)',
                  }}
                >
                  ✓
                </span>
              )}
            </div>
            {isFieldInvalid('email') && (
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-error)',
                  marginTop: 'var(--space-1)',
                }}
              >
                {errors.email}
              </p>
            )}
          </div>

          {/* Pickup Time */}
          <div style={{ marginBottom: 'var(--space-4)' }}>
            <label
              htmlFor="checkout-pickup"
              style={{
                display: 'block',
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--color-text-muted)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: 'var(--space-2)',
              }}
            >
              Pickup / Dine In
            </label>
            <select
              id="checkout-pickup"
              value={formData.pickupTime}
              onChange={(e) => handleChange('pickupTime', e.target.value)}
              onBlur={() => handleBlur('pickupTime')}
              style={{
                ...inputStyle('pickupTime'),
                cursor: 'pointer',
                appearance: 'none',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%239a8f7e' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
                paddingRight: 'var(--space-8)',
              }}
            >
              <option value="">Select time…</option>
              {PICKUP_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {isFieldInvalid('pickupTime') && (
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-error)',
                  marginTop: 'var(--space-1)',
                }}
              >
                {errors.pickupTime}
              </p>
            )}
          </div>

          {/* Special Instructions */}
          <div style={{ marginBottom: 'var(--space-6)' }}>
            <label
              htmlFor="checkout-instructions"
              style={{
                display: 'block',
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--color-text-muted)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: 'var(--space-2)',
              }}
            >
              Special Instructions{' '}
              <span style={{ color: 'var(--color-text-faint)' }}>
                (Optional)
              </span>
            </label>
            <textarea
              id="checkout-instructions"
              rows={3}
              value={formData.specialInstructions}
              onChange={(e) =>
                handleChange('specialInstructions', e.target.value)
              }
              style={{
                width: '100%',
                padding: 'var(--space-3) var(--space-4)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-bg)',
                color: 'var(--color-text)',
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-sm)',
                outline: 'none',
                resize: 'vertical',
                transition: `border-color var(--dur-fast) var(--ease-out)`,
              }}
              placeholder="Allergies, preferences, or anything we should know…"
            />
          </div>

          <AnimatedButton
            type="submit"
            variant="primary"
            disabled={state.items.length === 0}
            style={{
              width: '100%',
              justifyContent: 'center',
              opacity: state.items.length === 0 ? 0.5 : 1,
              cursor:
                state.items.length === 0 ? 'not-allowed' : 'pointer',
            }}
          >
            Place Order — {formatPrice(total)}
          </AnimatedButton>
        </div>
      </form>
    </div>
  );
}
