import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface ChevronSelectorHorizontalIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function ChevronSelectorHorizontalIcon({ size = 'md', className, ...props }: ChevronSelectorHorizontalIconProps) {
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
      <path d="M7.49998 5.83337L3.33331 10L7.49998 14.1667M12.5 5.83337L16.6666 10L12.5 14.1667" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
