import { clsx } from 'clsx';

export interface ArrowCircleBrokenDownIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ArrowCircleBrokenDownIcon({ size = 20, className, ...props }: ArrowCircleBrokenDownIconProps) {
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
      <g clipPath="url(#arrowcirclebrokendown-clip0_118_39399)">
<path d="M14.1667 2.78148C16.6575 4.22235 18.3334 6.91545 18.3334 9.99996C18.3334 14.6023 14.6024 18.3333 10 18.3333C5.39765 18.3333 1.66669 14.6023 1.66669 9.99996C1.66669 6.91545 3.34251 4.22235 5.83335 2.78148M6.66669 9.99996L10 13.3333M10 13.3333L13.3334 9.99996M10 13.3333V1.66663" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="arrowcirclebrokendown-clip0_118_39399">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
