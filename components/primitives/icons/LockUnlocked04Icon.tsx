import { clsx } from 'clsx';

export interface LockUnlocked04IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function LockUnlocked04Icon({ size = 20, className, ...props }: LockUnlocked04IconProps) {
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
      <path d="M5.83333 8.33333V6.66667C5.83333 4.36548 7.69881 2.5 10 2.5C11.3632 2.5 12.5735 3.15462 13.3337 4.16667M10 11.6667V13.3333M15.8333 12.5C15.8333 15.7217 13.2217 18.3333 10 18.3333C6.77834 18.3333 4.16666 15.7217 4.16666 12.5C4.16666 9.27833 6.77834 6.66667 10 6.66667C13.2217 6.66667 15.8333 9.27833 15.8333 12.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
