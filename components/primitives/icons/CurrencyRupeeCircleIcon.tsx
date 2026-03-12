import { clsx } from 'clsx';

export interface CurrencyRupeeCircleIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function CurrencyRupeeCircleIcon({ size = 20, className, ...props }: CurrencyRupeeCircleIconProps) {
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
      <g clipPath="url(#currencyrupeecircle-clip0_118_45498)">
<path d="M7.08335 8.33304H12.9167M7.08335 5.4165H12.9167M11.6667 15L7.08335 11.25L8.33335 11.2498C12.0373 11.2498 12.0373 5.4165 8.33335 5.4165M18.3334 9.99984C18.3334 14.6022 14.6024 18.3332 10 18.3332C5.39765 18.3332 1.66669 14.6022 1.66669 9.99984C1.66669 5.39746 5.39765 1.6665 10 1.6665C14.6024 1.6665 18.3334 5.39746 18.3334 9.99984Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="currencyrupeecircle-clip0_118_45498">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
