import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface ArrowUpLeftIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function ArrowUpLeftIcon({ size = 'md', className, ...props }: ArrowUpLeftIconProps) {
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
      <path d="M14.1667 14.1667L5.83334 5.83337M5.83334 5.83337V14.1667M5.83334 5.83337H14.1667" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
