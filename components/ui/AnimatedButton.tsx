'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { ReactNode, ButtonHTMLAttributes } from 'react';

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
  children: ReactNode;
  href?: string;
  className?: string;
}

export default function AnimatedButton({
  variant = 'primary',
  children,
  href,
  className,
  ...props
}: AnimatedButtonProps) {
  const baseStyles: React.CSSProperties = {
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--text-sm)',
    letterSpacing: '0.08em',
    padding: 'var(--space-3) var(--space-8)',
    borderRadius: 'var(--radius-full)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--space-2)',
    cursor: 'pointer',
    transition: `all var(--dur-base) var(--ease-out)`,
    textTransform: 'uppercase' as const,
    fontWeight: 500,
    border: 'none',
    textDecoration: 'none',
  };

  const variantStyles: React.CSSProperties =
    variant === 'primary'
      ? {
          backgroundColor: 'var(--color-terracotta)',
          color: 'var(--color-text)',
        }
      : {
          backgroundColor: 'transparent',
          color: 'var(--color-text)',
          border: '1px solid var(--color-border)',
        };

  const combinedClassName = cn('btn-shimmer', className);

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClassName}
        style={{ ...baseStyles, ...variantStyles }}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={combinedClassName}
      style={{ ...baseStyles, ...variantStyles }}
      {...props}
    >
      {children}
    </button>
  );
}
