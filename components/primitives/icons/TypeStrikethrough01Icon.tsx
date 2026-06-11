import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface TypeStrikethrough01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function TypeStrikethrough01Icon({ size = 'md', className, ...props }: TypeStrikethrough01IconProps) {
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
      <path d="M3.33333 5.83333V5C3.33333 4.54899 3.51247 4.13982 3.80349 3.83977M7.5 16.6667H12.5M10 10V16.6667M2.5 2.5L17.5 17.5M7.91667 3.33333H14.1667C14.9432 3.33333 15.3315 3.33333 15.6378 3.4602C16.0462 3.62936 16.3707 3.95382 16.5398 4.36219C16.6667 4.66848 16.6667 5.05677 16.6667 5.83333M10 3.33333V5.41667" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
