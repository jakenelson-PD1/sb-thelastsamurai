import { clsx } from 'clsx';

export interface Lightbulb02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Lightbulb02Icon({ size = 20, className, ...props }: Lightbulb02IconProps) {
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
      <g clipPath="url(#lightbulb02-clip0_118_43856)">
<path d="M8.33335 14.7153V16.6665C8.33335 17.587 9.07952 18.3332 10 18.3332C10.9205 18.3332 11.6667 17.587 11.6667 16.6665V14.7153M10 1.6665V2.49984M2.50002 9.99984H1.66669M4.58335 4.58317L4.08327 4.08309M15.4167 4.58317L15.9169 4.08309M18.3334 9.99984H17.5M15 9.99984C15 12.7613 12.7614 14.9998 10 14.9998C7.2386 14.9998 5.00002 12.7613 5.00002 9.99984C5.00002 7.23841 7.2386 4.99984 10 4.99984C12.7614 4.99984 15 7.23841 15 9.99984Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="lightbulb02-clip0_118_43856">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
