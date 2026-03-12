import { clsx } from 'clsx';

export interface HeartsIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function HeartsIcon({ size = 20, className, ...props }: HeartsIconProps) {
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
      <g clipPath="url(#hearts-clip0_118_39041)">
<path d="M12.9546 8.27115C13.2662 7.71748 13.5261 7.21788 13.6863 6.83763C14.4644 4.99118 13.695 2.86727 11.8141 2.00089C9.93324 1.13453 8.0445 2.03288 7.21558 3.7674C5.63047 2.67971 3.51597 2.83945 2.3499 4.53683C1.18382 6.23419 1.54978 8.45163 3.1469 9.66163C3.87174 10.2108 5.30529 11.0201 6.65496 11.7403M13.581 9.79154C13.2292 7.90163 11.6212 6.51941 9.59632 6.89508C7.57159 7.27077 6.26239 9.09754 6.53612 11.0825C6.75603 12.6772 7.96992 16.4189 8.43866 17.8283C8.50266 18.0206 8.53457 18.1168 8.59791 18.1838C8.65307 18.2422 8.72641 18.2846 8.80457 18.3031C8.89432 18.3245 8.99357 18.304 9.19216 18.2633C10.6471 17.9645 14.4944 17.145 15.9855 16.538C17.8413 15.7826 18.7991 13.7367 18.0817 11.7941C17.3643 9.85154 15.3936 9.15121 13.581 9.79154Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="hearts-clip0_118_39041">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
