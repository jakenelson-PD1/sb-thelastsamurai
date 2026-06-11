import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Fingerprint02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Fingerprint02Icon({ size = 'md', className, ...props }: Fingerprint02IconProps) {
  const px = resolveIconSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('inline-block', className)}
      aria-hidden={!props['aria-label']}
      {...props}
    >
      <path d="M9.99999 8.33366V11.667M6.20593 2.85118C7.28284 2.10452 8.59033 1.66699 9.99999 1.66699C13.6819 1.66699 16.6667 4.65176 16.6667 8.33366V9.36424M3.68026 6.20538C3.45527 6.87373 3.33333 7.58946 3.33333 8.33366V11.667C3.33333 14.6961 5.35346 17.2532 8.11996 18.0649M16.3823 13.5992C15.7745 15.6098 14.2426 17.2192 12.2806 17.9333M11.9375 5.12228C11.372 4.78041 10.709 4.58366 9.99999 4.58366C7.92893 4.58366 6.24999 6.26259 6.24999 8.33366V10.792M13.75 9.20033V11.667C13.75 13.7381 12.0711 15.417 9.99999 15.417C9.29283 15.417 8.63133 15.2212 8.06678 14.8809" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
