import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Target03IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Target03Icon({ size = 'md', className, ...props }: Target03IconProps) {
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
      <g clipPath="url(#target03-clip0_118_37563)">
<path d="M18.3334 9.99999H15M5.00002 9.99999H1.66669M10 4.99999V1.66666M10 18.3333V15M16.6667 9.99999C16.6667 13.6819 13.6819 16.6667 10 16.6667C6.31812 16.6667 3.33335 13.6819 3.33335 9.99999C3.33335 6.31809 6.31812 3.33332 10 3.33332C13.6819 3.33332 16.6667 6.31809 16.6667 9.99999ZM12.5 9.99999C12.5 11.3807 11.3808 12.5 10 12.5C8.61927 12.5 7.50002 11.3807 7.50002 9.99999C7.50002 8.61924 8.61927 7.49999 10 7.49999C11.3808 7.49999 12.5 8.61924 12.5 9.99999Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="target03-clip0_118_37563">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
