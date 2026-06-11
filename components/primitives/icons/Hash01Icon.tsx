import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Hash01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Hash01Icon({ size = 'md', className, ...props }: Hash01IconProps) {
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
      <path d="M3.33333 6.66667H16.6667M3.33333 13.3333H16.6667M6.66666 2.5V17.5M13.3333 2.5V17.5" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
