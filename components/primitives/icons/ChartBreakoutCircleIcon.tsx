import { clsx } from 'clsx';

export interface ChartBreakoutCircleIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ChartBreakoutCircleIcon({ size = 20, className, ...props }: ChartBreakoutCircleIconProps) {
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
      <g clipPath="url(#chartbreakoutcircle-clip0_118_47998)">
<path d="M12.9167 2.9165V1.6665M16.1994 3.80039L17.0834 2.9165M17.0919 7.08317H18.3419M18.2922 10.8332C17.8741 15.0443 14.3211 18.3332 10 18.3332C5.39765 18.3332 1.66669 14.6022 1.66669 9.99984C1.66669 5.67871 4.95559 2.12575 9.16669 1.70765M10 6.6665H13.3334V9.99984M13.0164 6.6665C11.0544 9.4395 7.82199 11.2498 4.16669 11.2498C3.33094 11.2498 2.51729 11.1552 1.73587 10.9761" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="chartbreakoutcircle-clip0_118_47998">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
