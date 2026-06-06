'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
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
    justifyContent: 'center',
    gap: 'var(--space-2)',
    cursor: 'pointer',
    transition: `background-color var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)`,
    textTransform: 'uppercase' as const,
    fontWeight: 600,
    border: 'none',
    textDecoration: 'none',
    boxShadow: variant === 'primary' ? '0 4px 14px 0 rgba(200, 64, 26, 0.3)' : 'none',
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
      <Link href={href} passHref legacyBehavior>
        <motion.a
          className={combinedClassName}
          style={{ ...baseStyles, ...variantStyles }}
          whileHover={{ scale: 1.02, boxShadow: variant === 'primary' ? '0 6px 20px rgba(200, 64, 26, 0.5)' : '0 4px 14px rgba(255,255,255,0.1)' }}
          whileTap={{ scale: 0.96 }}
        >
          {children}
        </motion.a>
      </Link>
    );
  }

  return (
    <motion.button
      className={combinedClassName}
      style={{ ...baseStyles, ...variantStyles }}
      whileHover={{ scale: 1.02, boxShadow: variant === 'primary' ? '0 6px 20px rgba(200, 64, 26, 0.5)' : '0 4px 14px rgba(255,255,255,0.1)' }}
      whileTap={{ scale: 0.96 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
