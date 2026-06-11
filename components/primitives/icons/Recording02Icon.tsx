import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Recording02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Recording02Icon({ size = 'md', className, ...props }: Recording02IconProps) {
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
      <path d="M2.5 8.33333V11.6667M6.25 9.16667V10.8333M10 5V15M13.75 2.5V17.5M17.5 8.33333V11.6667" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
