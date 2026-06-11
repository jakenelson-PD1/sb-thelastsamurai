import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CornerLeftUpIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CornerLeftUpIcon({ size = 'md', className, ...props }: CornerLeftUpIconProps) {
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
      <path d="M17.5 16.6667H14.6667C11.8664 16.6667 10.4662 16.6667 9.39675 16.1217C8.45592 15.6424 7.691 14.8775 7.21163 13.9366C6.66667 12.8671 6.66667 11.467 6.66667 8.66671V3.33337M6.66667 3.33337L10.8333 7.50004M6.66667 3.33337L2.5 7.50004" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
