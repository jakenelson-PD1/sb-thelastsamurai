import { clsx } from 'clsx';

export interface Target01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Target01Icon({ size = 20, className, ...props }: Target01IconProps) {
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
      <g clipPath="url(#target01-clip0_118_37537)">
<path d="M18.3334 9.99999C18.3334 14.6023 14.6024 18.3333 10 18.3333M18.3334 9.99999C18.3334 5.39761 14.6024 1.66666 10 1.66666M18.3334 9.99999H15M10 18.3333C5.39765 18.3333 1.66669 14.6023 1.66669 9.99999M10 18.3333V15M10 1.66666C5.39765 1.66666 1.66669 5.39761 1.66669 9.99999M10 1.66666V4.99999M1.66669 9.99999H5.00002" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="target01-clip0_118_37537">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
