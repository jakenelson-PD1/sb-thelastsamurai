import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface SwitchHorizontal01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function SwitchHorizontal01Icon({ size = 'md', className, ...props }: SwitchHorizontal01IconProps) {
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
      <path d="M16.6667 14.1667H3.33334M3.33334 14.1667L6.66667 10.8333M3.33334 14.1667L6.66667 17.5M3.33334 5.83333H16.6667M16.6667 5.83333L13.3333 2.5M16.6667 5.83333L13.3333 9.16667" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
