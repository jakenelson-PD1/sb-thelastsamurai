import { clsx } from 'clsx';

export interface BackpackIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function BackpackIcon({ size = 20, className, ...props }: BackpackIconProps) {
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
      <path d="M16.6667 10.8333V14.8333C16.6667 15.7667 16.6667 16.2335 16.485 16.59C16.3252 16.9036 16.0703 17.1586 15.7567 17.3183C15.4002 17.5 14.9334 17.5 14 17.5H6C5.06658 17.5 4.59987 17.5 4.24335 17.3183C3.92974 17.1586 3.67477 16.9036 3.51499 16.59C3.33333 16.2335 3.33333 15.7667 3.33333 14.8333V10.8333M7.5 8.33333H12.5M7.73809 11.6667H12.2619C14.0389 11.6667 14.9275 11.6667 15.6129 11.3366C16.2933 11.0089 16.8423 10.46 17.1699 9.77958C17.5 9.09417 17.5 8.20562 17.5 6.42858C17.5 5.09578 17.5 4.42939 17.2524 3.91529C17.0067 3.40502 16.595 2.99331 16.0848 2.74758C15.5706 2.5 14.9042 2.5 13.5714 2.5H6.42858C5.09578 2.5 4.42939 2.5 3.91529 2.74758C3.40502 2.99331 2.99331 3.40502 2.74758 3.91529C2.5 4.42939 2.5 5.09578 2.5 6.42858C2.5 8.20562 2.5 9.09417 2.8301 9.77958C3.15775 10.46 3.70669 11.0089 4.38706 11.3366C5.07253 11.6667 5.96105 11.6667 7.73809 11.6667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
