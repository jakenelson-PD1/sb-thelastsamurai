import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Asterisk02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Asterisk02Icon({ size = 'md', className, ...props }: Asterisk02IconProps) {
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
      <path d="M9.99998 3.33334V16.6667M15 5L4.99998 15M16.6666 10H3.33331M15 15L4.99998 5" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
