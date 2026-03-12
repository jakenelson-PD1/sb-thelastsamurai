import { clsx } from 'clsx';

export interface Trash02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Trash02Icon({ size = 20, className, ...props }: Trash02IconProps) {
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
      <path d="M13.3333 5.00002V4.33335C13.3333 3.39994 13.3333 2.93322 13.1517 2.5767C12.9919 2.2631 12.7369 2.00813 12.4233 1.84835C12.0668 1.66669 11.6001 1.66669 10.6667 1.66669H9.33333C8.39992 1.66669 7.9332 1.66669 7.57668 1.84835C7.26307 2.00813 7.00811 2.2631 6.84832 2.5767C6.66667 2.93322 6.66667 3.39994 6.66667 4.33335V5.00002M2.5 5.00002H17.5M15.8333 5.00002V14.3334C15.8333 15.7335 15.8333 16.4335 15.5608 16.9684C15.3212 17.4388 14.9387 17.8212 14.4683 18.0609C13.9335 18.3334 13.2335 18.3334 11.8333 18.3334H8.16667C6.76653 18.3334 6.06647 18.3334 5.53169 18.0609C5.06128 17.8212 4.67883 17.4388 4.43915 16.9684C4.16667 16.4335 4.16667 15.7335 4.16667 14.3334V5.00002" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
