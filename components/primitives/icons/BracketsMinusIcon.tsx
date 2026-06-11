import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface BracketsMinusIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function BracketsMinusIcon({ size = 'md', className, ...props }: BracketsMinusIconProps) {
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
      <path d="M15.4757 16.6668C16.5273 16.6668 17.3807 15.8143 17.3807 14.7618V10.9527L18.3332 10.0002L17.3807 9.04766V5.2385C17.3807 4.186 16.5282 3.3335 15.4757 3.3335M4.52416 3.3335C3.47166 3.3335 2.61916 4.186 2.61916 5.2385V9.04766L1.66666 10.0002L2.61916 10.9527V14.7618C2.61916 15.8143 3.47166 16.6668 4.52416 16.6668M6.66666 10.0002H13.3333" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
