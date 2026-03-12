import { clsx } from 'clsx';

export interface Heading02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Heading02Icon({ size = 20, className, ...props }: Heading02IconProps) {
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
      <path d="M5.00001 3.33325V16.6666M15 3.33325V16.6666M7.91668 3.33325V16.6666M9.58334 3.33325H3.33334M15 9.99992H7.91668M9.58334 16.6666H3.33334M16.6667 16.6666H13.3333M16.6667 3.33325H13.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
