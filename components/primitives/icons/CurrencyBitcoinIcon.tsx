import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CurrencyBitcoinIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CurrencyBitcoinIcon({ size = 'md', className, ...props }: CurrencyBitcoinIconProps) {
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
      <path d="M7.91668 1.6665V3.33317M7.91668 16.6665V18.3332M11.25 1.6665V3.33317M11.25 16.6665V18.3332M6.25001 3.33317H11.6667C13.5076 3.33317 15 4.82555 15 6.6665C15 8.50742 13.5076 9.99984 11.6667 9.99984H6.25001H12.5C14.3409 9.99984 15.8333 11.4923 15.8333 13.3332C15.8333 15.1741 14.3409 16.6665 12.5 16.6665H6.25001M6.25001 3.33317H4.58334M6.25001 3.33317V16.6665M6.25001 16.6665H4.58334" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
