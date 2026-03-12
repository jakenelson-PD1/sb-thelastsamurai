import { clsx } from 'clsx';

export interface Heading01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Heading01Icon({ size = 20, className, ...props }: Heading01IconProps) {
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
      <path d="M5.00001 3.33325V16.6666M15 3.33325V16.6666M6.66668 3.33325H3.33334M15 9.99992H5.00001M6.66668 16.6666H3.33334M16.6667 16.6666H13.3333M16.6667 3.33325H13.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
