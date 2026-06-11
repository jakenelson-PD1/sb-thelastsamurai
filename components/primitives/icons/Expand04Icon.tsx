import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Expand04IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Expand04Icon({ size = 'md', className, ...props }: Expand04IconProps) {
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
      <path d="M16.6667 11.6667V14C16.6667 14.9334 16.6667 15.4002 16.485 15.7567C16.3252 16.0703 16.0703 16.3252 15.7567 16.485C15.4002 16.6667 14.9334 16.6667 14 16.6667H11.6667M8.33333 3.33333H6C5.06658 3.33333 4.59987 3.33333 4.24335 3.51499C3.92974 3.67477 3.67477 3.92974 3.51499 4.24335C3.33333 4.59987 3.33333 5.06657 3.33333 6V8.33333M12.5 7.5L17.5 2.5M17.5 2.5H12.5M17.5 2.5V7.5M7.5 12.5L2.5 17.5M2.5 17.5H7.5M2.5 17.5V12.5" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
