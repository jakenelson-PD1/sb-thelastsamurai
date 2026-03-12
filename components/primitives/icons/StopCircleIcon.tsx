import { clsx } from 'clsx';

export interface StopCircleIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function StopCircleIcon({ size = 20, className, ...props }: StopCircleIconProps) {
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
      <g clipPath="url(#stopcircle-clip0_118_44606)">
<path d="M10 18.3332C14.6024 18.3332 18.3334 14.6022 18.3334 9.99984C18.3334 5.39746 14.6024 1.6665 10 1.6665C5.39765 1.6665 1.66669 5.39746 1.66669 9.99984C1.66669 14.6022 5.39765 18.3332 10 18.3332Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.66669 7.99984C6.66669 7.53313 6.66669 7.29977 6.75751 7.12151C6.83741 6.96471 6.9649 6.83723 7.1217 6.75733C7.29995 6.6665 7.53331 6.6665 8.00002 6.6665H12C12.4668 6.6665 12.7001 6.6665 12.8784 6.75733C13.0352 6.83723 13.1626 6.96471 13.2425 7.12151C13.3334 7.29977 13.3334 7.53313 13.3334 7.99984V11.9998C13.3334 12.4666 13.3334 12.6999 13.2425 12.8782C13.1626 13.035 13.0352 13.1624 12.8784 13.2423C12.7001 13.3332 12.4668 13.3332 12 13.3332H8.00002C7.53331 13.3332 7.29995 13.3332 7.1217 13.2423C6.9649 13.1624 6.83741 13.035 6.75751 12.8782C6.66669 12.6999 6.66669 12.4666 6.66669 11.9998V7.99984Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="stopcircle-clip0_118_44606">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
