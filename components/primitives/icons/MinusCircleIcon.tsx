import { clsx } from 'clsx';

export interface MinusCircleIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function MinusCircleIcon({ size = 20, className, ...props }: MinusCircleIconProps) {
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
      <g clipPath="url(#minuscircle-clip0_118_38349)">
<path d="M6.66666 10H13.3333M18.3333 10C18.3333 14.6024 14.6023 18.3334 10 18.3334C5.39762 18.3334 1.66666 14.6024 1.66666 10C1.66666 5.39765 5.39762 1.66669 10 1.66669C14.6023 1.66669 18.3333 5.39765 18.3333 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="minuscircle-clip0_118_38349">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
