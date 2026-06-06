'use client';

import { cn } from '@/lib/utils';

interface GradientImageProps {
  gradient: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export default function GradientImage({
  gradient,
  alt,
  className,
  aspectRatio = '4/3',
}: GradientImageProps) {
  return (
    <div
      className={cn('gradient-image', className)}
      style={{
        background: gradient,
        aspectRatio,
      }}
      role="img"
      aria-label={alt}
    />
  );
}
