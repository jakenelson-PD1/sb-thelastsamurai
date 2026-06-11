import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Percent02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Percent02Icon({ size = 'md', className, ...props }: Percent02IconProps) {
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
      <path d="M15.8333 4.16669L4.16666 15.8334M7.49999 5.83335C7.49999 6.75383 6.7538 7.50002 5.83332 7.50002C4.91285 7.50002 4.16666 6.75383 4.16666 5.83335C4.16666 4.91288 4.91285 4.16669 5.83332 4.16669C6.7538 4.16669 7.49999 4.91288 7.49999 5.83335ZM15.8333 14.1667C15.8333 15.0872 15.0872 15.8334 14.1667 15.8334C13.2462 15.8334 12.5 15.0872 12.5 14.1667C12.5 13.2462 13.2462 12.5 14.1667 12.5C15.0872 12.5 15.8333 13.2462 15.8333 14.1667Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
