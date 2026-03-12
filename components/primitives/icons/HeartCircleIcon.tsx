import { clsx } from 'clsx';

export interface HeartCircleIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function HeartCircleIcon({ size = 20, className, ...props }: HeartCircleIconProps) {
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
      <g clipPath="url(#heartcircle-clip0_118_38943)">
<path d="M10 18.3333C14.6024 18.3333 18.3334 14.6023 18.3334 9.99996C18.3334 5.39758 14.6024 1.66663 10 1.66663C5.39765 1.66663 1.66669 5.39758 1.66669 9.99996C1.66669 14.6023 5.39765 18.3333 10 18.3333Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M9.99721 7.55655C9.16413 6.58263 7.77493 6.32064 6.73117 7.21247C5.68739 8.10428 5.54044 9.59538 6.36013 10.6501C6.88513 11.3257 8.22969 12.5785 9.12854 13.392C9.42729 13.6622 9.57663 13.7974 9.75554 13.8516C9.90929 13.8982 10.085 13.8982 10.2389 13.8516C10.4177 13.7974 10.5671 13.6622 10.8658 13.392C11.7647 12.5785 13.1092 11.3257 13.6343 10.6501C14.454 9.59538 14.325 8.0949 13.2632 7.21247C12.2015 6.33003 10.8303 6.58263 9.99721 7.55655Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="heartcircle-clip0_118_38943">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
