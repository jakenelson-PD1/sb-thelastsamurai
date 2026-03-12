import { clsx } from 'clsx';

export interface PlusCircleIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function PlusCircleIcon({ size = 20, className, ...props }: PlusCircleIconProps) {
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
      <g clipPath="url(#pluscircle-clip0_118_38466)">
<path d="M10 6.66669V13.3334M6.66667 10H13.3333M18.3333 10C18.3333 14.6024 14.6023 18.3334 10 18.3334C5.39763 18.3334 1.66667 14.6024 1.66667 10C1.66667 5.39765 5.39763 1.66669 10 1.66669C14.6023 1.66669 18.3333 5.39765 18.3333 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="pluscircle-clip0_118_38466">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
