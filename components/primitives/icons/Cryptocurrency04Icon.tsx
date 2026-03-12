import { clsx } from 'clsx';

export interface Cryptocurrency04IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Cryptocurrency04Icon({ size = 20, className, ...props }: Cryptocurrency04IconProps) {
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
      <g clipPath="url(#cryptocurrency04-clip0_118_45329)">
<path d="M1.66667 1.6665L3.33334 3.33317M18.3333 1.6665L16.6667 3.33317M18.3333 18.3332L16.6667 16.6665M1.66667 18.3332L3.33334 16.6665M1.66667 13.3332H2.91667M6.66667 1.6665V2.9165M18.3333 6.6665H17.0833M13.3333 18.3332V17.0832M15 13.3332H17.9167M13.3333 1.6665V4.99984M1.66667 6.6665H5.00001M6.66667 18.3332V14.9998M9.52859 6.30458L6.30475 9.52842C6.13974 9.69342 6.05723 9.77592 6.02632 9.87109C5.99913 9.95475 5.99913 10.0449 6.02632 10.1286C6.05723 10.2238 6.13974 10.3063 6.30475 10.4713L9.52859 13.6951C9.69359 13.8601 9.77609 13.9426 9.87125 13.9735C9.95492 14.0008 10.0451 14.0008 10.1288 13.9735C10.2239 13.9426 10.3064 13.8601 10.4714 13.6951L13.6953 10.4713C13.8603 10.3063 13.9428 10.2238 13.9737 10.1286C14.0009 10.0449 14.0009 9.95475 13.9737 9.87109C13.9428 9.77592 13.8603 9.69342 13.6953 9.52842L10.4714 6.30458C10.3064 6.13957 10.2239 6.05706 10.1288 6.02615C10.0451 5.99896 9.95492 5.99896 9.87125 6.02615C9.77609 6.05706 9.69359 6.13957 9.52859 6.30458Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="cryptocurrency04-clip0_118_45329">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
