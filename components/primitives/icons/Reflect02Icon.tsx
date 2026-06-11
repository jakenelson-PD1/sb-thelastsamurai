import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Reflect02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Reflect02Icon({ size = 'md', className, ...props }: Reflect02IconProps) {
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
      <path d="M10 2.5V5M10 8.75V11.25M10 15V17.5M18.3334 10H12.9167M12.9167 10L16.25 13.3333M12.9167 10L16.25 6.66667M1.66669 10H7.08335M7.08335 10L3.75002 13.3333M7.08335 10L3.75002 6.66667" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
