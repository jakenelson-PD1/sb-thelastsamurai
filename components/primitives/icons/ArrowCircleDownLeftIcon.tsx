import { clsx } from 'clsx';

export interface ArrowCircleDownLeftIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ArrowCircleDownLeftIcon({ size = 20, className, ...props }: ArrowCircleDownLeftIconProps) {
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
      <g clipPath="url(#arrowcircledownleft-clip0_118_39516)">
<path d="M7.50018 7.5V12.5M7.50018 12.5H12.5002M7.50018 12.5L12.5002 7.49991M18.3334 9.99996C18.3334 14.6023 14.6024 18.3333 10 18.3333C5.39765 18.3333 1.66669 14.6023 1.66669 9.99996C1.66669 5.39758 5.39765 1.66663 10 1.66663C14.6024 1.66663 18.3334 5.39758 18.3334 9.99996Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="arrowcircledownleft-clip0_118_39516">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
