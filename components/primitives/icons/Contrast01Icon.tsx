import { clsx } from 'clsx';

export interface Contrast01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Contrast01Icon({ size = 20, className, ...props }: Contrast01IconProps) {
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
      <g clipPath="url(#contrast01-clip0_118_41577)">
<path d="M10 1.66675C10.4931 1.66675 10.9761 1.70957 11.4457 1.7917M10 1.66675C5.39765 1.66675 1.66669 5.39771 1.66669 10.0001C1.66669 14.6024 5.39765 18.3334 10 18.3334M10 1.66675V18.3334M10 18.3334C10.4925 18.3334 10.975 18.2907 11.444 18.2087M14.7817 3.17425C15.5769 3.73232 16.2701 4.42582 16.8279 5.22126M18.2084 8.55475C18.2905 9.02416 18.3334 9.50716 18.3334 10.0001C18.3334 10.493 18.2905 10.976 18.2084 11.4454M16.8244 14.7839C16.2669 15.5776 15.5747 16.2695 14.7808 16.8265" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="contrast01-clip0_118_41577">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
