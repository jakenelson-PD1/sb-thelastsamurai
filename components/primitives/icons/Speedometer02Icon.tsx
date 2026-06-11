import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Speedometer02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Speedometer02Icon({ size = 'md', className, ...props }: Speedometer02IconProps) {
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
      <g clipPath="url(#speedometer02-clip0_118_37498)">
<path d="M18.3333 9.99999C18.3333 14.6023 14.6023 18.3333 9.99999 18.3333C5.39761 18.3333 1.66666 14.6023 1.66666 9.99999M18.3333 9.99999C18.3333 5.39761 14.6023 1.66666 9.99999 1.66666M18.3333 9.99999H16.25M1.66666 9.99999C1.66666 5.39761 5.39761 1.66666 9.99999 1.66666M1.66666 9.99999H3.74999M9.99999 1.66666V3.74999M15.8987 4.16666L11.2499 8.74999M15.8987 15.8987L15.7287 15.7287C15.1522 15.1522 14.864 14.864 14.5276 14.6578C14.2294 14.4751 13.9042 14.3404 13.5641 14.2587C13.1805 14.1667 12.7728 14.1667 11.9575 14.1667H8.04246C7.22716 14.1667 6.81951 14.1667 6.43588 14.2588C6.09576 14.3405 5.77061 14.4752 5.47237 14.6579C5.13599 14.8641 4.84774 15.1523 4.27123 15.7288L4.10135 15.8987M4.10135 4.16666L5.54839 5.6137M11.6667 9.99999C11.6667 10.9205 10.9205 11.6667 9.99999 11.6667C9.07949 11.6667 8.33332 10.9205 8.33332 9.99999C8.33332 9.07949 9.07949 8.33332 9.99999 8.33332C10.9205 8.33332 11.6667 9.07949 11.6667 9.99999Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="speedometer02-clip0_118_37498">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
