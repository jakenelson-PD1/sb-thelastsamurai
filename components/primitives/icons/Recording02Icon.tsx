import { clsx } from 'clsx';

export interface Recording02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Recording02Icon({ size = 20, className, ...props }: Recording02IconProps) {
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
      <path d="M2.5 8.33333V11.6667M6.25 9.16667V10.8333M10 5V15M13.75 2.5V17.5M17.5 8.33333V11.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
