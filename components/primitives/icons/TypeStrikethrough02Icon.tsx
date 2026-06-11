import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface TypeStrikethrough02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function TypeStrikethrough02Icon({ size = 'md', className, ...props }: TypeStrikethrough02IconProps) {
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
      <path d="M6.66667 16.6667H13.3333M8.54167 8.75V16.6667M11.4583 11.6667V16.6667M2.5 2.5L17.5 17.5M3.33333 5.83329V4.99996C3.33333 4.54894 3.51247 4.13977 3.80349 3.83972M7.91667 3.33333H14.1667C14.9432 3.33333 15.3315 3.33333 15.6378 3.4602C16.0462 3.62936 16.3707 3.95382 16.5398 4.36219C16.6667 4.66848 16.6667 5.05677 16.6667 5.83333M8.54167 3.33333V4.16667M11.4583 3.33333V6.66667" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
