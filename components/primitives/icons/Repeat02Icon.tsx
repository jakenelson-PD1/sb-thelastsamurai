import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Repeat02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Repeat02Icon({ size = 'md', className, ...props }: Repeat02IconProps) {
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
      <g clipPath="url(#repeat02-clip0_118_44323)">
<path d="M9.16666 1.6665L11.6667 4.1665M11.6667 4.1665L9.16666 6.6665M11.6667 4.1665H5.66666C4.26652 4.1665 3.56646 4.1665 3.03168 4.43899C2.56127 4.67867 2.17882 5.06112 1.93914 5.53153C1.66666 6.0663 1.66666 6.76637 1.66666 8.1665V12.9165C1.66666 13.3035 1.66666 13.497 1.68805 13.6595C1.83574 14.7813 2.71851 15.6641 3.84034 15.8118C4.0028 15.8332 4.19631 15.8332 4.58332 15.8332M8.33332 15.8332H14.3333C15.7335 15.8332 16.4335 15.8332 16.9683 15.5607C17.4387 15.321 17.8212 14.9386 18.0608 14.4682C18.3333 13.9333 18.3333 13.2333 18.3333 11.8332V7.08317C18.3333 6.69615 18.3333 6.50265 18.3119 6.34019C18.1642 5.21835 17.2815 4.33559 16.1597 4.1879C15.9972 4.1665 15.8037 4.1665 15.4167 4.1665M8.33332 15.8332L10.8333 18.3332M8.33332 15.8332L10.8333 13.3332" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="repeat02-clip0_118_44323">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
