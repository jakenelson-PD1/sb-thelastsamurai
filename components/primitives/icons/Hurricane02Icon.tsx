import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Hurricane02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Hurricane02Icon({ size = 'md', className, ...props }: Hurricane02IconProps) {
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
      <path d="M15 9.99967C15 12.7611 12.7614 14.9997 10 14.9997C7.2386 14.9997 5.00002 12.7611 5.00002 9.99967M15 9.99967C15 7.23825 12.7614 4.99967 10 4.99967C7.2386 4.99967 5.00002 7.23825 5.00002 9.99967M15 9.99967C15 13.6816 12.0153 16.6663 8.33335 16.6663C4.65145 16.6663 1.66669 13.6816 1.66669 9.99967M5.00002 9.99967C5.00002 6.31777 7.98479 3.33301 11.6667 3.33301C15.3486 3.33301 18.3334 6.31777 18.3334 9.99967M10.8334 9.99967C10.8334 10.4599 10.4603 10.833 10 10.833C9.53977 10.833 9.16669 10.4599 9.16669 9.99967C9.16669 9.53942 9.53977 9.16634 10 9.16634C10.4603 9.16634 10.8334 9.53942 10.8334 9.99967Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
