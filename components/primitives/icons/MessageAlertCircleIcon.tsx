import { clsx } from 'clsx';

export interface MessageAlertCircleIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function MessageAlertCircleIcon({ size = 20, className, ...props }: MessageAlertCircleIconProps) {
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
      <path d="M10.4163 9.16667V6.25M10.4163 12.0833H10.4247M10.4163 16.6667C14.3283 16.6667 17.4997 13.4953 17.4997 9.58333C17.4997 5.67132 14.3283 2.5 10.4163 2.5C6.50433 2.5 3.33301 5.67132 3.33301 9.58333C3.33301 10.375 3.46289 11.1363 3.7025 11.8472C3.79266 12.1147 3.83774 12.2484 3.84587 12.3512C3.85391 12.4527 3.84783 12.5238 3.82273 12.6224C3.79731 12.7223 3.74118 12.8263 3.62893 13.034L2.26588 15.557C2.07146 15.9168 1.97424 16.0968 1.996 16.2357C2.01495 16.3566 2.08614 16.4631 2.19066 16.5268C2.31066 16.6001 2.5141 16.579 2.92097 16.537L7.18849 16.0958C7.31772 16.0825 7.38234 16.0758 7.44124 16.0781C7.49916 16.0803 7.54006 16.0858 7.59655 16.0988C7.65398 16.112 7.72621 16.1398 7.87065 16.1954C8.66066 16.4998 9.519 16.6667 10.4163 16.6667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
