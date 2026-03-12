import { clsx } from 'clsx';

export interface CodeCircle02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function CodeCircle02Icon({ size = 20, className, ...props }: CodeCircle02IconProps) {
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
      <g clipPath="url(#codecircle02-clip0_118_48499)">
<path d="M11.6667 14.1665L14.1667 11.6665L11.6667 9.1665M8.33335 5.83317L5.83335 8.33317L8.33335 10.8332M18.3334 9.99984C18.3334 14.6022 14.6024 18.3332 10 18.3332C5.39765 18.3332 1.66669 14.6022 1.66669 9.99984C1.66669 5.39746 5.39765 1.6665 10 1.6665C14.6024 1.6665 18.3334 5.39746 18.3334 9.99984Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="codecircle02-clip0_118_48499">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
