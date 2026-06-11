import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface TrendDown02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function TrendDown02Icon({ size = 'md', className, ...props }: TrendDown02IconProps) {
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
      <path d="M5.83331 5.8335L14.1666 14.1668M14.1666 14.1668V5.8335M14.1666 14.1668H5.83331" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
