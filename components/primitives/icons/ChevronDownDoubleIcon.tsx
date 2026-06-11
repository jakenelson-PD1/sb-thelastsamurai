import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface ChevronDownDoubleIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function ChevronDownDoubleIcon({ size = 'md', className, ...props }: ChevronDownDoubleIconProps) {
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
      <path d="M5.83334 10.8333L10 15L14.1667 10.8333M5.83334 5L10 9.16667L14.1667 5" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
