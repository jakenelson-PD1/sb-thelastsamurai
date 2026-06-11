import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface RefreshCw04IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function RefreshCw04Icon({ size = 'md', className, ...props }: RefreshCw04IconProps) {
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
      <path d="M14.1667 4.27108C15.9344 5.55903 17.0834 7.6453 17.0834 9.99994C17.0834 13.9119 13.912 17.0833 10 17.0833H9.58335M5.83335 15.7288C4.06558 14.4408 2.91669 12.3545 2.91669 9.99994C2.91669 6.08789 6.088 2.91659 10 2.91659H10.4167M10.8334 18.6666L9.16669 16.9999L10.8334 15.3333M9.16669 4.66659L10.8334 2.99992L9.16669 1.33325" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
