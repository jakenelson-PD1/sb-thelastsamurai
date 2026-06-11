import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CloudOffIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CloudOffIcon({ size = 'md', className, ...props }: CloudOffIconProps) {
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
      <path d="M18.0836 13.4317C18.2449 13.0133 18.3334 12.5587 18.3334 12.0833C18.3334 10.1303 16.8404 8.52608 14.9336 8.3495C14.5435 5.97677 12.4832 4.16667 10 4.16667C9.62785 4.16667 9.26527 4.20733 8.91627 4.28443M6.0729 6.07154C5.561 6.72016 5.20635 7.49865 5.06647 8.3495C3.15961 8.52608 1.66669 10.1303 1.66669 12.0833C1.66669 14.1544 3.34562 15.8333 5.41669 15.8333H14.5834C14.9634 15.8333 15.3303 15.7768 15.676 15.6717M2.50002 2.5L17.5 17.5" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
