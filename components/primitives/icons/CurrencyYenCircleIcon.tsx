import { clsx } from 'clsx';

export interface CurrencyYenCircleIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function CurrencyYenCircleIcon({ size = 20, className, ...props }: CurrencyYenCircleIconProps) {
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
      <g clipPath="url(#currencyyencircle-clip0_118_45537)">
<path d="M10 14.9998V9.99984M10 9.99984L13.3333 5.83317M10 9.99984L6.66667 5.83317M13.3333 9.99984H6.66667M12.9167 12.4998H7.08334M18.3333 9.99984C18.3333 14.6022 14.6023 18.3332 10 18.3332C5.39763 18.3332 1.66667 14.6022 1.66667 9.99984C1.66667 5.39746 5.39763 1.6665 10 1.6665C14.6023 1.6665 18.3333 5.39746 18.3333 9.99984Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="currencyyencircle-clip0_118_45537">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
