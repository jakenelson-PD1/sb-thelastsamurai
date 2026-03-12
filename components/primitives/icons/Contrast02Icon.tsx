import { clsx } from 'clsx';

export interface Contrast02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Contrast02Icon({ size = 20, className, ...props }: Contrast02IconProps) {
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
      <g clipPath="url(#contrast02-clip0_118_41594)">
<path d="M10 18.3334C14.6024 18.3334 18.3334 14.6024 18.3334 10.0001C18.3334 5.39771 14.6024 1.66675 10 1.66675C5.39765 1.66675 1.66669 5.39771 1.66669 10.0001C1.66669 14.6024 5.39765 18.3334 10 18.3334Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 15.4168C12.9916 15.4168 15.4167 12.9917 15.4167 10.0002C15.4167 7.00862 12.9916 4.5835 10 4.5835V15.4168Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="contrast02-clip0_118_41594">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
