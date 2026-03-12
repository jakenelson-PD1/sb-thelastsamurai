import { clsx } from 'clsx';

export interface ArrowCircleDownIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ArrowCircleDownIcon({ size = 20, className, ...props }: ArrowCircleDownIconProps) {
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
      <g clipPath="url(#arrowcircledown-clip0_118_39503)">
<path d="M6.66669 9.99996L10 13.3333M10 13.3333L13.3334 9.99996M10 13.3333V6.66663M18.3334 9.99996C18.3334 14.6023 14.6024 18.3333 10 18.3333C5.39765 18.3333 1.66669 14.6023 1.66669 9.99996C1.66669 5.39758 5.39765 1.66663 10 1.66663C14.6024 1.66663 18.3334 5.39758 18.3334 9.99996Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="arrowcircledown-clip0_118_39503">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
