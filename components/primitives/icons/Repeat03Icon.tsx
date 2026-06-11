import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Repeat03IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Repeat03Icon({ size = 'md', className, ...props }: Repeat03IconProps) {
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
      <g clipPath="url(#repeat03-clip0_118_44336)">
<path d="M10.8333 18.3332L8.33332 15.8332M8.33332 15.8332L10.8333 13.3332M8.33332 15.8332H12.5C15.7217 15.8332 18.3333 13.2215 18.3333 9.99984C18.3333 7.67284 16.9707 5.66409 15 4.72786M4.99999 15.2718C3.0292 14.3356 1.66666 12.3268 1.66666 9.99984C1.66666 6.77818 4.27833 4.1665 7.49999 4.1665H11.6667M11.6667 4.1665L9.16666 1.6665M11.6667 4.1665L9.16666 6.6665" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="repeat03-clip0_118_44336">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
