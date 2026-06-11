import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface ArrowsLeftIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function ArrowsLeftIcon({ size = 'md', className, ...props }: ArrowsLeftIconProps) {
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
      <path d="M16.6666 14.1667H3.33331M3.33331 14.1667L6.66665 17.5M3.33331 14.1667L6.66665 10.8333M16.6666 5.83333H7.49998M7.49998 5.83333L10.8333 9.16667M7.49998 5.83333L10.8333 2.5" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
