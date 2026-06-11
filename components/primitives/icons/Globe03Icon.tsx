import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Globe03IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Globe03Icon({ size = 'md', className, ...props }: Globe03IconProps) {
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
      <g clipPath="url(#globe03-clip0_118_50922)">
<path d="M10 1.66699C12.5 3.33366 13.269 6.91035 13.3334 10.0003C13.269 13.0903 12.5 16.667 10 18.3337M10 1.66699C7.50002 3.33366 6.73106 6.91035 6.66669 10.0003C6.73106 13.0903 7.50002 16.667 10 18.3337M10 1.66699C5.39765 1.66699 1.66669 5.39795 1.66669 10.0003M10 1.66699C14.6024 1.66699 18.3334 5.39795 18.3334 10.0003M10 18.3337C14.6024 18.3337 18.3334 14.6027 18.3334 10.0003M10 18.3337C5.39765 18.3337 1.66669 14.6027 1.66669 10.0003M1.66669 10.0003C3.33335 12.5003 6.91005 13.2693 10 13.3337C13.09 13.2693 16.6667 12.5003 18.3334 10.0003M1.66669 10.0003C3.33335 7.50033 6.91005 6.73137 10 6.66699C13.09 6.73137 16.6667 7.50033 18.3334 10.0003" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="globe03-clip0_118_50922">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
