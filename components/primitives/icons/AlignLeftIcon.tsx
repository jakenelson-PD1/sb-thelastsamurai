import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface AlignLeftIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function AlignLeftIcon({ size = 'md', className, ...props }: AlignLeftIconProps) {
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
      <path d="M13.3333 8.33333H2.5M16.6667 5H2.5M16.6667 11.6667H2.5M13.3333 15H2.5" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
