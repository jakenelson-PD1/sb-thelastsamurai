import { clsx } from 'clsx';

export interface Attachment02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Attachment02Icon({ size = 20, className, ...props }: Attachment02IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('inline-block', className)}
      aria-hidden={!props['aria-label']}
      {...props}
    >
      <path d="M14.5834 4.37992V13.7501C14.5834 16.2814 12.5314 18.3334 10 18.3334C7.46871 18.3334 5.41669 16.2814 5.41669 13.7501V4.72231C5.41669 3.03476 6.7847 1.66675 8.47227 1.66675C10.1598 1.66675 11.5278 3.03476 11.5278 4.72231V13.7048C11.5278 14.5487 10.8438 15.2327 10 15.2327C9.15627 15.2327 8.47227 14.5487 8.47227 13.7048V5.54271" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
