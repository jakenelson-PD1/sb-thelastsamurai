import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface AlignCenterIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function AlignCenterIcon({ size = 'md', className, ...props }: AlignCenterIconProps) {
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
      <path d="M15 8.33333H5M17.5 5H2.5M17.5 11.6667H2.5M15 15H5" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
