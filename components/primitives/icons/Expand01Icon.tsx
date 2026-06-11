import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Expand01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Expand01Icon({ size = 'md', className, ...props }: Expand01IconProps) {
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
      <path d="M11.6667 8.33333L17.5 2.5M17.5 2.5H12.5M17.5 2.5V7.5M8.33333 11.6667L2.5 17.5M2.5 17.5H7.5M2.5 17.5V12.5" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
