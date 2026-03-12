import { clsx } from 'clsx';

export interface WifiIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function WifiIcon({ size = 20, className, ...props }: WifiIconProps) {
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
      <g clipPath="url(#wifi-clip0_118_44854)">
<path d="M9.99999 16.25H10.0083M19.0053 7.25063C16.6329 5.07666 13.4713 3.75 9.99991 3.75C6.52844 3.75 3.36685 5.07666 0.994461 7.25063M3.94327 10.2025C5.55838 8.77975 7.67839 7.91667 9.99999 7.91667C12.3216 7.91667 14.4416 8.77975 16.0567 10.2025M13.0819 13.1459C12.2327 12.4802 11.1627 12.0833 9.99991 12.0833C8.81958 12.0833 7.73476 12.4923 6.87947 13.1763" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="wifi-clip0_118_44854">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
