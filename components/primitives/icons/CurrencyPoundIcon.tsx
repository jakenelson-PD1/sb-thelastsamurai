import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CurrencyPoundIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CurrencyPoundIcon({ size = 'md', className, ...props }: CurrencyPoundIconProps) {
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
      <path d="M14.5833 17.0832H5.41666C5.41666 17.0832 8.33332 14.7843 8.33332 11.2498C8.33332 8.89359 6.59479 8.05086 6.56974 6.08731C6.57137 2.20049 11.2504 2.40715 12.8767 3.95199M5.41666 11.2498H12.5" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
