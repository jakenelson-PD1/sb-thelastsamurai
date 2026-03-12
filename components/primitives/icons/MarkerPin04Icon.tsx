import { clsx } from 'clsx';

export interface MarkerPin04IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function MarkerPin04Icon({ size = 20, className, ...props }: MarkerPin04IconProps) {
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
      <g clipPath="url(#markerpin04-clip0_118_51109)">
<path d="M4.16666 11.9057C2.62386 12.5862 1.66666 13.5347 1.66666 14.5837C1.66666 16.6547 5.39761 18.3337 9.99999 18.3337C14.6023 18.3337 18.3333 16.6547 18.3333 14.5837C18.3333 13.5347 17.3762 12.5862 15.8333 11.9057M15 6.66699C15 10.0534 11.25 11.667 9.99999 14.167C8.74999 11.667 4.99999 10.0534 4.99999 6.66699C4.99999 3.90557 7.23856 1.66699 9.99999 1.66699C12.7614 1.66699 15 3.90557 15 6.66699ZM10.8333 6.66699C10.8333 7.12723 10.4602 7.50033 9.99999 7.50033C9.53974 7.50033 9.16666 7.12723 9.16666 6.66699C9.16666 6.20676 9.53974 5.83366 9.99999 5.83366C10.4602 5.83366 10.8333 6.20676 10.8333 6.66699Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="markerpin04-clip0_118_51109">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
