import { clsx } from 'clsx';

export interface CheckCircleIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function CheckCircleIcon({ size = 20, className, ...props }: CheckCircleIconProps) {
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
      <g clipPath="url(#checkcircle-clip0_118_36972)">
<path d="M6.25002 10L8.75002 12.5L13.75 7.5M18.3334 10C18.3334 14.6023 14.6024 18.3333 10 18.3333C5.39765 18.3333 1.66669 14.6023 1.66669 10C1.66669 5.39763 5.39765 1.66667 10 1.66667C14.6024 1.66667 18.3334 5.39763 18.3334 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="checkcircle-clip0_118_36972">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
