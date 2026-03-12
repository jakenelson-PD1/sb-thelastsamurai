import { clsx } from 'clsx';

export interface Power02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Power02Icon({ size = 20, className, ...props }: Power02IconProps) {
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
      <g clipPath="url(#power02-clip0_118_44232)">
<path d="M9.99999 5.83317V9.99984M6.66666 7.49943C6.1434 8.19589 5.83332 9.06167 5.83332 9.99984C5.83332 12.301 7.69881 14.1665 9.99999 14.1665C12.3012 14.1665 14.1667 12.301 14.1667 9.99984C14.1667 9.06167 13.8566 8.19589 13.3333 7.49943M18.3333 9.99984C18.3333 14.6022 14.6023 18.3332 9.99999 18.3332C5.39761 18.3332 1.66666 14.6022 1.66666 9.99984C1.66666 5.39746 5.39761 1.6665 9.99999 1.6665C14.6023 1.6665 18.3333 5.39746 18.3333 9.99984Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="power02-clip0_118_44232">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
