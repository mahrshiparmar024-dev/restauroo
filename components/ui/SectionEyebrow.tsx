import { cn } from '@/lib/utils';

interface SectionEyebrowProps {
  text: string;
  className?: string;
}

export default function SectionEyebrow({ text, className }: SectionEyebrowProps) {
  return (
    <span
      className={cn(className)}
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
      {text}
    </span>
  );
}
