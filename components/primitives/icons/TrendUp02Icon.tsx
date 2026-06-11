import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface TrendUp02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function TrendUp02Icon({ size = 'md', className, ...props }: TrendUp02IconProps) {
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
      <path d="M5.83334 14.1668L14.1667 5.8335M14.1667 5.8335H5.83334M14.1667 5.8335V14.1668" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
