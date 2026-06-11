import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface AlignJustifyIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function AlignJustifyIcon({ size = 'md', className, ...props }: AlignJustifyIconProps) {
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
      <path d="M17.5 8.33333H2.5M17.5 15H2.5M17.5 5H2.5M17.5 11.6667H2.5" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
