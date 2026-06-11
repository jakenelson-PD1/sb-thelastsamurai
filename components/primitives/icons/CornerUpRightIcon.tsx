import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CornerUpRightIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CornerUpRightIcon({ size = 'md', className, ...props }: CornerUpRightIconProps) {
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
      <path d="M3.33334 16.6666V15.4999C3.33334 12.6997 3.33334 11.2995 3.87831 10.23C4.35768 9.28917 5.12258 8.52425 6.06339 8.04489C7.13295 7.49992 8.53309 7.49992 11.3333 7.49992H16.6667M16.6667 7.49992L12.5 11.6666M16.6667 7.49992L12.5 3.33325" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
