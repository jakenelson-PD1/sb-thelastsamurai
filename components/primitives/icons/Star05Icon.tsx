import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Star05IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Star05Icon({ size = 'md', className, ...props }: Star05IconProps) {
  const px = resolveIconSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('inline-block', className)}
      aria-hidden={!props['aria-label']}
      {...props}
    >
      <g clipPath="url(#star05-clip0_118_50279)">
<path d="M10 1.66699L8.91544 6.00532C8.70377 6.85187 8.59802 7.27514 8.3776 7.61957C8.18264 7.92423 7.92392 8.18295 7.61926 8.37791C7.27484 8.59833 6.85156 8.70408 6.00501 8.91574L1.66669 10.0003L6.00501 11.0849C6.85156 11.2966 7.27484 11.4023 7.61926 11.6227C7.92392 11.8177 8.18264 12.0764 8.3776 12.3811C8.59802 12.7255 8.70377 13.1488 8.91544 13.9953L10 18.3337L11.0846 13.9953C11.2963 13.1488 11.402 12.7255 11.6224 12.3811C11.8174 12.0764 12.0761 11.8177 12.3808 11.6227C12.7252 11.4023 13.1485 11.2966 13.995 11.0849L18.3334 10.0003L13.995 8.91574C13.1485 8.70408 12.7252 8.59833 12.3808 8.37791C12.0761 8.18295 11.8174 7.92423 11.6224 7.61957C11.402 7.27514 11.2963 6.85187 11.0846 6.00532L10 1.66699Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="star05-clip0_118_50279">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
