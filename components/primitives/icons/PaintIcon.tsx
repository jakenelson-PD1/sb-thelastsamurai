import { clsx } from 'clsx';

export interface PaintIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function PaintIcon({ size = 20, className, ...props }: PaintIconProps) {
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
      <path d="M2.49963 10.8334H16.6663M9.99959 2.91675L8.74959 1.66675M9.58292 2.50008L16.9735 9.89058C17.3035 10.2206 17.4685 10.3857 17.5303 10.5759C17.5847 10.7432 17.5847 10.9236 17.5303 11.0909C17.4685 11.2812 17.3035 11.4462 16.9735 11.7762L12.4114 16.3383C11.4213 17.3283 10.9263 17.8234 10.3555 18.0088C9.85342 18.172 9.3125 18.172 8.81042 18.0088C8.23959 17.8234 7.74458 17.3283 6.75453 16.3383L4.07805 13.6618C3.08801 12.6718 2.59299 12.1767 2.40752 11.606C2.24437 11.1038 2.24437 10.563 2.40752 10.0608C2.59299 9.49008 3.08801 8.995 4.07805 8.00499L9.58292 2.50008Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
