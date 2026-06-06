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
  orderType: 'dine-in' | 'take-out' | 'delivery';
  address: string;
  specialInstructions: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
}



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
    orderType: 'take-out',
    address: '',
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
    if (formData.orderType === 'delivery' && !formData.address.trim()) {
      errs.address = 'Delivery address is required';
    }
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
      if (newData.orderType === 'delivery' && !newData.address.trim()) errs.address = 'Delivery address is required';
      setErrors(errs);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setTouched({ name: true, phone: true, email: true, address: true });

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

      {/* Promo Code Input & Drawer */}
      {!state.discountCode && (
        <div style={{ marginBottom: 'var(--space-6)' }}>
          <div
            style={{
              padding: 'var(--space-4)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-border)',
              backgroundColor: 'var(--color-surface)',
              marginBottom: 'var(--space-2)',
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
          
          {/* Social Engineering: Available Coupons */}
          {state.items.length > 0 && (
            <div style={{ display: 'flex', gap: 'var(--space-2)', overflowX: 'auto', paddingBottom: 'var(--space-2)' }}>
              <button
                type="button"
                onClick={() => { setPromoInput('WELCOME10'); }}
                style={{
                  background: 'rgba(232, 160, 32, 0.1)',
                  border: '1px dashed var(--color-gold)',
                  color: 'var(--color-gold)',
                  padding: 'var(--space-2) var(--space-3)',
                  borderRadius: 'var(--radius-md)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'background var(--dur-fast) var(--ease-out)',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(232, 160, 32, 0.2)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(232, 160, 32, 0.1)'}
              >
                10% OFF (WELCOME10)
              </button>
              <button
                type="button"
                onClick={() => { setPromoInput('KEBAB20'); }}
                style={{
                  background: 'rgba(232, 160, 32, 0.1)',
                  border: '1px dashed var(--color-gold)',
                  color: 'var(--color-gold)',
                  padding: 'var(--space-2) var(--space-3)',
                  borderRadius: 'var(--radius-md)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'background var(--dur-fast) var(--ease-out)',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(232, 160, 32, 0.2)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(232, 160, 32, 0.1)'}
              >
                20% OFF (KEBAB20)
              </button>
            </div>
          )}
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
              fontWeight: 800,
              color: 'var(--color-text)',
              marginBottom: 'var(--space-6)',
              textTransform: 'uppercase',
            }}
          >
            Checkout Details
          </h3>

          {/* Order Type Selection */}
          <div style={{ marginBottom: 'var(--space-6)' }}>
            <label
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
              Order Type
            </label>
            <div style={{ display: 'flex', gap: 'var(--space-2)', background: 'var(--color-bg)', padding: 'var(--space-1)', borderRadius: 'var(--radius-md)', border: '2px solid var(--color-border)' }}>
              {(['dine-in', 'take-out', 'delivery'] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => handleChange('orderType', type)}
                  style={{
                    flex: 1,
                    padding: 'var(--space-2)',
                    borderRadius: 'var(--radius-sm)',
                    border: 'none',
                    background: formData.orderType === type ? 'var(--color-border)' : 'transparent',
                    color: formData.orderType === type ? 'var(--color-bg)' : 'var(--color-text)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all var(--dur-fast) var(--ease-out)',
                  }}
                >
                  {type.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>

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

          {/* Conditional Address for Delivery */}
          {formData.orderType === 'delivery' && (
            <div style={{ marginBottom: 'var(--space-4)' }}>
              <label
                htmlFor="checkout-address"
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
                Delivery Address
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  id="checkout-address"
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                  onBlur={() => handleBlur('address')}
                  style={inputStyle('address')}
                  placeholder="123 Main St, Unit 4"
                />
                {isFieldValid('address') && (
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
              {isFieldInvalid('address') && (
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-error)',
                    marginTop: 'var(--space-1)',
                  }}
                >
                  {errors.address}
                </p>
              )}
            </div>
          )}

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
