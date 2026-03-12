import { clsx } from 'clsx';

export interface Speedometer04IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Speedometer04Icon({ size = 20, className, ...props }: Speedometer04IconProps) {
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
      <g clipPath="url(#speedometer04-clip0_118_37524)">
<path d="M14.7878 13.3333C15.4469 12.3884 15.8334 11.2393 15.8334 9.99999C15.8334 9.57091 15.787 9.15266 15.6991 8.74999M5.21226 13.3333C4.5532 12.3885 4.16669 11.2393 4.16669 9.99999C4.16669 6.77833 6.77836 4.16666 10 4.16666C10.3518 4.16666 10.6963 4.1978 11.0309 4.25746M13.7499 6.24999L9.99994 9.99999M18.3334 9.99999C18.3334 14.6023 14.6024 18.3333 10 18.3333C5.39765 18.3333 1.66669 14.6023 1.66669 9.99999C1.66669 5.39761 5.39765 1.66666 10 1.66666C14.6024 1.66666 18.3334 5.39761 18.3334 9.99999ZM10.8334 9.99999C10.8334 10.4602 10.4603 10.8333 10 10.8333C9.53977 10.8333 9.16669 10.4602 9.16669 9.99999C9.16669 9.53974 9.53977 9.16666 10 9.16666C10.4603 9.16666 10.8334 9.53974 10.8334 9.99999Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="speedometer04-clip0_118_37524">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
