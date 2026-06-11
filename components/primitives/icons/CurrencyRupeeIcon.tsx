import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CurrencyRupeeIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CurrencyRupeeIcon({ size = 'md', className, ...props }: CurrencyRupeeIconProps) {
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
      <path d="M5 2.5H15M5 6.66667H15M12.0833 17.5L5 10.8333H7.5C13.0558 10.8333 13.0558 2.5 7.5 2.5" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
