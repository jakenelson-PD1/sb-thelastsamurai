import { clsx } from 'clsx';

export interface DropperIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function DropperIcon({ size = 20, className, ...props }: DropperIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('inline-block', className)}
      aria-hidden={!props['aria-label']}
      {...props}
    >
      <g clipPath="url(#dropper-clip0_118_41797)">
<path d="M8.75002 5.41659L14.5834 11.2499M1.66669 18.3332C1.66669 18.3332 5.41669 17.9166 7.50002 15.8332L17.5 5.83326C18.4205 4.91279 18.4205 3.4204 17.5 2.49993C16.5795 1.57946 15.0872 1.57945 14.1667 2.49992L4.16669 12.4999C2.08335 14.5832 1.66669 18.3332 1.66669 18.3332Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="dropper-clip0_118_41797">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
