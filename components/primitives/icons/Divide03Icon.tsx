import { clsx } from 'clsx';

export interface Divide03IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Divide03Icon({ size = 20, className, ...props }: Divide03IconProps) {
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
      <g clipPath="url(#divide03-clip0_118_37245)">
<path d="M9.99999 6.66666H10.0083M9.99999 13.3333H10.0083M5.83332 9.99999H14.1667M10.4167 6.66666C10.4167 6.89677 10.2301 7.08332 9.99999 7.08332C9.76991 7.08332 9.58332 6.89677 9.58332 6.66666C9.58332 6.43654 9.76991 6.24999 9.99999 6.24999C10.2301 6.24999 10.4167 6.43654 10.4167 6.66666ZM10.4167 13.3333C10.4167 13.5634 10.2301 13.75 9.99999 13.75C9.76991 13.75 9.58332 13.5634 9.58332 13.3333C9.58332 13.1032 9.76991 12.9167 9.99999 12.9167C10.2301 12.9167 10.4167 13.1032 10.4167 13.3333ZM18.3333 9.99999C18.3333 14.6023 14.6023 18.3333 9.99999 18.3333C5.39761 18.3333 1.66666 14.6023 1.66666 9.99999C1.66666 5.39761 5.39761 1.66666 9.99999 1.66666C14.6023 1.66666 18.3333 5.39761 18.3333 9.99999Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="divide03-clip0_118_37245">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
