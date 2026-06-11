import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CurrencyEuroCircleIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CurrencyEuroCircleIcon({ size = 'md', className, ...props }: CurrencyEuroCircleIconProps) {
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
      <g clipPath="url(#currencyeurocircle-clip0_118_45433)">
<path d="M12.7778 6.89414C12.0406 6.23435 11.0672 5.83317 10 5.83317C7.69882 5.83317 5.83334 7.69865 5.83334 9.99984C5.83334 12.301 7.69882 14.1665 10 14.1665C11.0672 14.1665 12.0406 13.7653 12.7778 13.1055M5.00001 11.2498H9.16667M5.00001 8.74984H9.16667M18.3333 9.99984C18.3333 14.6022 14.6023 18.3332 10 18.3332C5.39763 18.3332 1.66667 14.6022 1.66667 9.99984C1.66667 5.39746 5.39763 1.6665 10 1.6665C14.6023 1.6665 18.3333 5.39746 18.3333 9.99984Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="currencyeurocircle-clip0_118_45433">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
