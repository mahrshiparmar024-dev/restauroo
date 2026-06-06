'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { ReactNode, ButtonHTMLAttributes } from 'react';

type BaseButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart'>;

interface AnimatedButtonProps extends BaseButtonProps {
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
    fontFamily: 'var(--font-display)',
    fontSize: 'var(--text-lg)',
    padding: 'var(--space-3) var(--space-8)',
    borderRadius: 'var(--radius-md)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    cursor: 'pointer',
    transition: `background-color var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)`,
    textTransform: 'uppercase' as const,
    fontWeight: 800,
    border: '2px solid var(--color-border)',
    textDecoration: 'none',
    boxShadow: '4px 4px 0px var(--color-border)',
  };

  const variantStyles: React.CSSProperties =
    variant === 'primary'
      ? {
          backgroundColor: 'var(--color-terracotta)',
          color: '#ffffff', // High contrast text on brand color
        }
      : {
          backgroundColor: 'var(--color-bg)',
          color: 'var(--color-text)',
        };

  const combinedClassName = cn('btn-shimmer', className);

  if (href) {
    return (
      <Link href={href} passHref legacyBehavior>
        <motion.a
          className={combinedClassName}
          style={{ ...baseStyles, ...variantStyles }}
          whileHover={{ x: -2, y: -2, boxShadow: '6px 6px 0px var(--color-border)' }}
          whileTap={{ x: 4, y: 4, boxShadow: '0px 0px 0px var(--color-border)' }}
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
      whileHover={{ x: -2, y: -2, boxShadow: '6px 6px 0px var(--color-border)' }}
      whileTap={{ x: 4, y: 4, boxShadow: '0px 0px 0px var(--color-border)' }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
