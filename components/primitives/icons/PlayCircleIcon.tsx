import { clsx } from 'clsx';

export interface PlayCircleIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function PlayCircleIcon({ size = 20, className, ...props }: PlayCircleIconProps) {
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
      <g clipPath="url(#playcircle-clip0_118_44172)">
<path d="M10 18.3332C14.6024 18.3332 18.3334 14.6022 18.3334 9.99984C18.3334 5.39746 14.6024 1.6665 10 1.6665C5.39765 1.6665 1.66669 5.39746 1.66669 9.99984C1.66669 14.6022 5.39765 18.3332 10 18.3332Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.91669 7.47083C7.91669 7.0731 7.91669 6.87423 7.9998 6.7632C8.07224 6.66645 8.18311 6.60592 8.30367 6.5973C8.44202 6.58743 8.60927 6.69496 8.94385 6.91004L12.8777 9.43897C13.168 9.62555 13.3132 9.71889 13.3633 9.83755C13.4071 9.94122 13.4071 10.0582 13.3633 10.1619C13.3132 10.2806 13.168 10.3739 12.8777 10.5605L8.94385 13.0894C8.60927 13.3045 8.44202 13.4121 8.30367 13.4021C8.18311 13.3936 8.07224 13.333 7.9998 13.2362C7.91669 13.1252 7.91669 12.9264 7.91669 12.5286V7.47083Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="playcircle-clip0_118_44172">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
