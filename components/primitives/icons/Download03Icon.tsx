import { clsx } from 'clsx';

export interface Download03IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Download03Icon({ size = 20, className, ...props }: Download03IconProps) {
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
      <g clipPath="url(#download03-clip0_118_37368)">
<path d="M6.66666 9.99999L10 13.3333M10 13.3333L13.3333 9.99999M10 13.3333V6.66666M18.3333 9.99999C18.3333 14.6023 14.6023 18.3333 10 18.3333C5.39762 18.3333 1.66666 14.6023 1.66666 9.99999C1.66666 5.39761 5.39762 1.66666 10 1.66666C14.6023 1.66666 18.3333 5.39761 18.3333 9.99999Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="download03-clip0_118_37368">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
