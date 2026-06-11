import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface ChevronUpDoubleIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function ChevronUpDoubleIcon({ size = 'md', className, ...props }: ChevronUpDoubleIconProps) {
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
      <path d="M14.1667 15L10 10.8333L5.83334 15M14.1667 9.16667L10 5L5.83334 9.16667" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
