import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Target04IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Target04Icon({ size = 'md', className, ...props }: Target04IconProps) {
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
      <g clipPath="url(#target04-clip0_118_37576)">
<path d="M13.3333 6.66669V4.16669L15.8333 1.66669L16.6667 3.33335L18.3333 4.16669L15.8333 6.66669H13.3333ZM13.3333 6.66669L10 9.99994M18.3333 10C18.3333 14.6024 14.6023 18.3334 10 18.3334C5.39762 18.3334 1.66666 14.6024 1.66666 10C1.66666 5.39765 5.39762 1.66669 10 1.66669M14.1667 10C14.1667 12.3012 12.3012 14.1667 10 14.1667C7.69881 14.1667 5.83333 12.3012 5.83333 10C5.83333 7.69884 7.69881 5.83335 10 5.83335" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="target04-clip0_118_37576">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
