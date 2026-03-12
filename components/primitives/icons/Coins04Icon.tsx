import { clsx } from 'clsx';

export interface Coins04IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Coins04Icon({ size = 20, className, ...props }: Coins04IconProps) {
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
      <g clipPath="url(#coins04-clip0_118_44991)">
<path d="M8.41752 3.33317C9.46969 2.30218 10.9106 1.6665 12.5 1.6665C15.7217 1.6665 18.3334 4.27818 18.3334 7.49984C18.3334 9.08925 17.6977 10.5303 16.6666 11.5823M6.25002 10.8332L7.50002 9.99984V14.5832M6.25002 14.5832H8.75002M13.3334 12.4998C13.3334 15.7215 10.7217 18.3332 7.50002 18.3332C4.27836 18.3332 1.66669 15.7215 1.66669 12.4998C1.66669 9.27817 4.27836 6.6665 7.50002 6.6665C10.7217 6.6665 13.3334 9.27817 13.3334 12.4998Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="coins04-clip0_118_44991">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
