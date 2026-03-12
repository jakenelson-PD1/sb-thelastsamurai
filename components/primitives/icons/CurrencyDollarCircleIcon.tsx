import { clsx } from 'clsx';

export interface CurrencyDollarCircleIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function CurrencyDollarCircleIcon({ size = 20, className, ...props }: CurrencyDollarCircleIconProps) {
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
      <g clipPath="url(#currencydollarcircle-clip0_118_45381)">
<path d="M7.08335 12.2221C7.08335 13.2959 7.95391 14.1665 9.02777 14.1665H10.8334C11.9839 14.1665 12.9167 13.2338 12.9167 12.0832C12.9167 10.9326 11.9839 9.99984 10.8334 9.99984H9.16669C8.0161 9.99984 7.08335 9.06709 7.08335 7.9165C7.08335 6.76591 8.0161 5.83317 9.16669 5.83317H10.9723C12.0461 5.83317 12.9167 6.70373 12.9167 7.77761M10 4.58317V5.83317M10 14.1665V15.4165M18.3334 9.99984C18.3334 14.6022 14.6024 18.3332 10 18.3332C5.39765 18.3332 1.66669 14.6022 1.66669 9.99984C1.66669 5.39746 5.39765 1.6665 10 1.6665C14.6024 1.6665 18.3334 5.39746 18.3334 9.99984Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="currencydollarcircle-clip0_118_45381">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
