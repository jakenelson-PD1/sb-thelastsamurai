import { clsx } from 'clsx';

export interface Cryptocurrency03IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Cryptocurrency03Icon({ size = 20, className, ...props }: Cryptocurrency03IconProps) {
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
      <g clipPath="url(#cryptocurrency03-clip0_118_45316)">
<path d="M1.66666 1.6665L3.33333 3.33317M18.3333 1.6665L16.6667 3.33317M18.3333 18.3332L16.6667 16.6665M1.66666 18.3332L3.33333 16.6665M1.66666 13.3332H2.91666M6.66666 1.6665V2.9165M18.3333 6.6665H17.0833M13.3333 18.3332V17.0832M15 13.3332H17.9167M13.3333 1.6665V4.99984M1.66666 6.6665H5M6.66666 18.3332V14.9998M13.3333 9.99984C13.3333 11.8408 11.8409 13.3332 10 13.3332C8.15905 13.3332 6.66666 11.8408 6.66666 9.99984C6.66666 8.15889 8.15905 6.6665 10 6.6665C11.8409 6.6665 13.3333 8.15889 13.3333 9.99984Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="cryptocurrency03-clip0_118_45316">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
