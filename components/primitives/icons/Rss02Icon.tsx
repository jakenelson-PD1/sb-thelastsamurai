import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Rss02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Rss02Icon({ size = 'md', className, ...props }: Rss02IconProps) {
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
      <path d="M2.5002 10.8521C6.82102 10.2024 9.79658 13.1788 9.14783 17.4997M2.5002 6.6982C9.115 6.04853 13.9514 10.8849 13.3017 17.4997M2.5002 2.54343C11.4099 1.8947 18.1053 8.59016 17.4567 17.4998M4.16667 17.5C3.24638 17.5 2.5 16.7536 2.5 15.8333C2.5 14.9131 3.24638 14.1667 4.16667 14.1667C5.08695 14.1667 5.83333 14.9131 5.83333 15.8333C5.83333 16.7536 5.08695 17.5 4.16667 17.5Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
