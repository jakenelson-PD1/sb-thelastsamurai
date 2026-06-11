import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface StatusFulfilledIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function StatusFulfilledIcon({ size = 'lg', className, ...props }: StatusFulfilledIconProps) {
  const px = resolveIconSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('inline-block', className)}
      aria-hidden={!props['aria-label']}
      {...props}
    >
      <path d="M11.6399 4.80005L11.6399 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <ellipse cx="11.64" cy="18.6" rx="1.8" ry="1.8" fill="currentColor"/>
    </svg>
  );
}
