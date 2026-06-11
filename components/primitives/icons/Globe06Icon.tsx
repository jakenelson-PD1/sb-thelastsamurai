import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Globe06IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Globe06Icon({ size = 'md', className, ...props }: Globe06IconProps) {
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
      <g clipPath="url(#globe06-clip0_118_50961)">
<path d="M2.23896 13.0379L3.82912 12.1199C3.91526 12.0702 4.01634 12.0529 4.11409 12.0712L7.24284 12.6568C7.49996 12.7049 7.73732 12.507 7.73615 12.2454L7.72397 9.50408C7.72364 9.42958 7.74328 9.35633 7.78085 9.29199L9.35975 6.58883C9.44192 6.44815 9.43459 6.27248 9.34092 6.13916L6.68244 2.35506M15.8335 4.04953C11.2502 6.25036 13.75 9.16699 14.5835 9.58366C16.1478 10.3657 18.323 10.417 18.323 10.417C18.3298 10.279 18.3333 10.1401 18.3333 10.0003C18.3333 5.39795 14.6023 1.66699 10 1.66699C5.39763 1.66699 1.66667 5.39795 1.66667 10.0003C1.66667 14.6027 5.39763 18.3337 10 18.3337C10.1398 18.3337 10.2787 18.3302 10.4167 18.3234M13.9648 18.2835L11.3258 11.3262L18.2832 13.9652L15.198 15.1983L13.9648 18.2835Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="globe06-clip0_118_50961">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
