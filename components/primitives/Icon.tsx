import { type LucideIcon } from 'lucide-react';
import { clsx } from 'clsx';

export interface IconProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Icon({ icon: LucideIconComponent, size = 16, className, ...props }: IconProps) {
  return (
    <LucideIconComponent
      size={size}
      className={clsx('inline-block', className)}
      aria-hidden={!props['aria-label']}
      {...props}
    />
  );
}
