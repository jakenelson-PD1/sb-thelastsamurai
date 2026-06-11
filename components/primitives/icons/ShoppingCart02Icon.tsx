import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface ShoppingCart02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function ShoppingCart02Icon({ size = 'md', className, ...props }: ShoppingCart02IconProps) {
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
      <path d="M5.4168 14.1665H14.4412C15.2328 14.1665 15.6286 14.1665 15.9512 14.0235C16.2356 13.8974 16.479 13.6943 16.6539 13.437C16.8524 13.1452 16.9232 12.7558 17.0648 11.9768L18.1904 5.78576C18.2395 5.51582 18.2641 5.38085 18.2262 5.27545C18.1929 5.183 18.128 5.10526 18.043 5.056C17.9461 4.99984 17.8089 4.99984 17.5345 4.99984H4.1668M1.66669 1.6665H2.76369C2.96593 1.6665 3.06705 1.6665 3.14884 1.70345C3.22091 1.736 3.28225 1.7884 3.32565 1.85453C3.37489 1.92955 3.39065 2.02943 3.4222 2.2292L5.7445 16.9372C5.77605 17.1369 5.79182 17.2368 5.84106 17.3118C5.88446 17.3779 5.9458 17.4303 6.01787 17.4629C6.09965 17.4998 6.20078 17.4998 6.40302 17.4998H15.8334" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
