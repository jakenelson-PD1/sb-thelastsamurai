import { clsx } from 'clsx';

export interface PaletteIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function PaletteIcon({ size = 20, className, ...props }: PaletteIconProps) {
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
      <g clipPath="url(#palette-clip0_118_42117)">
<path d="M1.66669 10.0001C1.66669 14.6024 5.39765 18.3334 10 18.3334C11.3808 18.3334 12.5 17.2142 12.5 15.8334V15.4167C12.5 15.0297 12.5 14.8362 12.5214 14.6737C12.6691 13.5519 13.5519 12.6692 14.6737 12.5215C14.8362 12.5001 15.0297 12.5001 15.4167 12.5001H15.8334C17.2141 12.5001 18.3334 11.3808 18.3334 10.0001C18.3334 5.39771 14.6024 1.66675 10 1.66675C5.39765 1.66675 1.66669 5.39771 1.66669 10.0001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.83333 10.8334C6.29357 10.8334 6.66667 10.4603 6.66667 10.0001C6.66667 9.53983 6.29357 9.16675 5.83333 9.16675C5.3731 9.16675 5 9.53983 5 10.0001C5 10.4603 5.3731 10.8334 5.83333 10.8334Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.3333 7.50016C13.7936 7.50016 14.1667 7.12706 14.1667 6.66683C14.1667 6.2066 13.7936 5.8335 13.3333 5.8335C12.8731 5.8335 12.5 6.2066 12.5 6.66683C12.5 7.12706 12.8731 7.50016 13.3333 7.50016Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.33333 6.66667C8.79358 6.66667 9.16667 6.29357 9.16667 5.83333C9.16667 5.3731 8.79358 5 8.33333 5C7.8731 5 7.5 5.3731 7.5 5.83333C7.5 6.29357 7.8731 6.66667 8.33333 6.66667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="palette-clip0_118_42117">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
