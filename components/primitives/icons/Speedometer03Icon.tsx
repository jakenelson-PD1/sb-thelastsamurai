import { clsx } from 'clsx';

export interface Speedometer03IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Speedometer03Icon({ size = 20, className, ...props }: Speedometer03IconProps) {
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
      <g clipPath="url(#speedometer03-clip0_118_37511)">
<path d="M4.16666 9.99999C4.16666 6.77833 6.77833 4.16666 9.99999 4.16666M13.7499 6.24999L9.99991 9.99999M18.3333 9.99999C18.3333 14.6023 14.6023 18.3333 9.99999 18.3333C5.39761 18.3333 1.66666 14.6023 1.66666 9.99999C1.66666 5.39761 5.39761 1.66666 9.99999 1.66666C14.6023 1.66666 18.3333 5.39761 18.3333 9.99999ZM10.8333 9.99999C10.8333 10.4602 10.4602 10.8333 9.99999 10.8333C9.53974 10.8333 9.16666 10.4602 9.16666 9.99999C9.16666 9.53974 9.53974 9.16666 9.99999 9.16666C10.4602 9.16666 10.8333 9.53974 10.8333 9.99999Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="speedometer03-clip0_118_37511">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
