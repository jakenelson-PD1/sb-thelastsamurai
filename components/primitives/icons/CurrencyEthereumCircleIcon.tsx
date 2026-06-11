import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CurrencyEthereumCircleIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CurrencyEthereumCircleIcon({ size = 'md', className, ...props }: CurrencyEthereumCircleIconProps) {
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
      <g clipPath="url(#currencyethereumcircle-clip0_118_45407)">
<path d="M5.41669 12.9165L10.0002 14.9998L14.5834 12.9165M18.3334 9.99984C18.3334 14.6022 14.6024 18.3332 10 18.3332C5.39765 18.3332 1.66669 14.6022 1.66669 9.99984C1.66669 5.39746 5.39765 1.6665 10 1.6665C14.6024 1.6665 18.3334 5.39746 18.3334 9.99984ZM5.41669 9.58317L10.0002 11.6665L14.5834 9.58317L10.0002 4.1665L5.41669 9.58317Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="currencyethereumcircle-clip0_118_45407">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
