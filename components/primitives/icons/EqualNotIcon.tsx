import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface EqualNotIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function EqualNotIcon({ size = 'md', className, ...props }: EqualNotIconProps) {
  const px = resolveIconSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('inline-block', className)}
      aria-hidden={!props['aria-label']}
      {...props}
    >
      <path d="M4.16666 7.49996H15.8333M4.16666 12.5H15.8333M15.8333 4.16663L4.16666 15.8333" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
