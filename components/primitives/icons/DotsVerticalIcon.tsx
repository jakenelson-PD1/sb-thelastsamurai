import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface DotsVerticalIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function DotsVerticalIcon({ size = 'md', className, ...props }: DotsVerticalIconProps) {
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
      <path d="M10 10.8334C10.4603 10.8334 10.8334 10.4603 10.8334 10C10.8334 9.53977 10.4603 9.16669 10 9.16669C9.53977 9.16669 9.16669 9.53977 9.16669 10C9.16669 10.4603 9.53977 10.8334 10 10.8334Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 5.00001C10.4603 5.00001 10.8334 4.62691 10.8334 4.16668C10.8334 3.70644 10.4603 3.33334 10 3.33334C9.53977 3.33334 9.16669 3.70644 9.16669 4.16668C9.16669 4.62691 9.53977 5.00001 10 5.00001Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 16.6667C10.4603 16.6667 10.8334 16.2936 10.8334 15.8333C10.8334 15.3731 10.4603 15 10 15C9.53977 15 9.16669 15.3731 9.16669 15.8333C9.16669 16.2936 9.53977 16.6667 10 16.6667Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
