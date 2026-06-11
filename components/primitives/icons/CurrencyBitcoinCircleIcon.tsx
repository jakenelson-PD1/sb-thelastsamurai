import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CurrencyBitcoinCircleIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CurrencyBitcoinCircleIcon({ size = 'md', className, ...props }: CurrencyBitcoinCircleIconProps) {
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
      <g clipPath="url(#currencybitcoincircle-clip0_118_45355)">
<path d="M7.91666 6.24984H11.4583C12.4938 6.24984 13.3333 7.0893 13.3333 8.12484C13.3333 9.16034 12.4938 9.99984 11.4583 9.99984H7.91666H11.875C12.9105 9.99984 13.75 10.8393 13.75 11.8748C13.75 12.9103 12.9105 13.7498 11.875 13.7498H7.91666M7.91666 6.24984H6.66666M7.91666 6.24984V13.7498M7.91666 13.7498H6.66666M8.33332 4.99984V6.24984M8.33332 13.7498V14.9998M10.8333 4.99984V6.24984M10.8333 13.7498V14.9998M18.3333 9.99984C18.3333 14.6022 14.6023 18.3332 9.99999 18.3332C5.39761 18.3332 1.66666 14.6022 1.66666 9.99984C1.66666 5.39746 5.39761 1.6665 9.99999 1.6665C14.6023 1.6665 18.3333 5.39746 18.3333 9.99984Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="currencybitcoincircle-clip0_118_45355">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
