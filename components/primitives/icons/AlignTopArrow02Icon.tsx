import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface AlignTopArrow02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function AlignTopArrow02Icon({ size = 'md', className, ...props }: AlignTopArrow02IconProps) {
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
      <path d="M8.33333 15V5C8.33333 4.22343 8.33333 3.83515 8.20646 3.52886C8.0373 3.12048 7.71285 2.79603 7.30447 2.62687C6.99818 2.5 6.60989 2.5 5.83333 2.5C5.05676 2.5 4.66848 2.5 4.36219 2.62687C3.95381 2.79603 3.62935 3.12048 3.46019 3.52886C3.33333 3.83515 3.33333 4.22343 3.33333 5V15C3.33333 15.7766 3.33333 16.1648 3.46019 16.4712C3.62935 16.8795 3.95381 17.204 4.36219 17.3732C4.66848 17.5 5.05676 17.5 5.83333 17.5C6.60989 17.5 6.99818 17.5 7.30447 17.3732C7.71285 17.204 8.0373 16.8795 8.20646 16.4712C8.33333 16.1648 8.33333 15.7766 8.33333 15Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.6667 11.6667V5C16.6667 4.22343 16.6667 3.83515 16.5398 3.52886C16.3707 3.12048 16.0462 2.79603 15.6378 2.62687C15.3315 2.5 14.9432 2.5 14.1667 2.5C13.3901 2.5 13.0018 2.5 12.6955 2.62687C12.2872 2.79603 11.9627 3.12048 11.7935 3.52886C11.6667 3.83515 11.6667 4.22343 11.6667 5V11.6667C11.6667 12.4433 11.6667 12.8315 11.7935 13.1378C11.9627 13.5462 12.2872 13.8707 12.6955 14.0398C13.0018 14.1667 13.3901 14.1667 14.1667 14.1667C14.9432 14.1667 15.3315 14.1667 15.6378 14.0398C16.0462 13.8707 16.3707 13.5462 16.5398 13.1378C16.6667 12.8315 16.6667 12.4433 16.6667 11.6667Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
