import { clsx } from 'clsx';

export interface CurrencyRubleCircleIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function CurrencyRubleCircleIcon({ size = 20, className, ...props }: CurrencyRubleCircleIconProps) {
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
      <g clipPath="url(#currencyrublecircle-clip0_118_45485)">
<path d="M7.91669 5.4165H11.6667C12.8173 5.4165 13.75 6.34925 13.75 7.49984C13.75 8.65042 12.8173 9.58317 11.6667 9.58317H7.91669V5.4165ZM7.91669 5.4165V14.5832M8.12502 9.58317H6.66669M10.8334 12.2915H6.66669M18.3334 9.99984C18.3334 14.6022 14.6024 18.3332 10 18.3332C5.39765 18.3332 1.66669 14.6022 1.66669 9.99984C1.66669 5.39746 5.39765 1.6665 10 1.6665C14.6024 1.6665 18.3334 5.39746 18.3334 9.99984Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="currencyrublecircle-clip0_118_45485">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
