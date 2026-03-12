import { clsx } from 'clsx';

export interface CoinsSwap02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function CoinsSwap02Icon({ size = 20, className, ...props }: CoinsSwap02IconProps) {
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
      <g clipPath="url(#coinsswap02-clip0_118_45082)">
<path d="M5.00002 4.99984L6.66669 3.33317M6.66669 3.33317L5.00002 1.6665M6.66669 3.33317H5.00002C3.15907 3.33317 1.66669 4.82555 1.66669 6.6665M15 14.9998L13.3334 16.6665M13.3334 16.6665L15 18.3332M13.3334 16.6665H15C16.8409 16.6665 18.3334 15.1741 18.3334 13.3332M8.49085 5.4165C9.04594 3.25997 11.0035 1.6665 13.3334 1.6665C16.0948 1.6665 18.3334 3.90508 18.3334 6.6665C18.3334 8.99625 16.7399 10.9539 14.5834 11.509M11.6667 13.3332C11.6667 16.0946 9.4281 18.3332 6.66669 18.3332C3.90526 18.3332 1.66669 16.0946 1.66669 13.3332C1.66669 10.5718 3.90526 8.33317 6.66669 8.33317C9.4281 8.33317 11.6667 10.5718 11.6667 13.3332Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="coinsswap02-clip0_118_45082">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
