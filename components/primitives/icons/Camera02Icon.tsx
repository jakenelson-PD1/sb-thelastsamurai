import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Camera02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Camera02Icon({ size = 'md', className, ...props }: Camera02IconProps) {
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
      <path d="M1.66667 6.41848C1.66667 5.17502 2.6747 4.16699 3.91815 4.16699C4.56422 4.16699 5.13781 3.75358 5.34211 3.14066L5.41667 2.91699C5.45183 2.81152 5.46941 2.75878 5.48822 2.71199C5.72838 2.11459 6.29116 1.70897 6.93385 1.67004C6.98418 1.66699 7.03977 1.66699 7.15095 1.66699H12.8491C12.9603 1.66699 13.0158 1.66699 13.0662 1.67004C13.7088 1.70897 14.2717 2.11459 14.5118 2.71199C14.5306 2.75878 14.5482 2.81152 14.5833 2.91699L14.6579 3.14066C14.8622 3.75358 15.4358 4.16699 16.0818 4.16699C17.3253 4.16699 18.3333 5.17502 18.3333 6.41848V13.5003C18.3333 14.9005 18.3333 15.6005 18.0608 16.1353C17.8212 16.6057 17.4388 16.9882 16.9683 17.2278C16.4335 17.5003 15.7335 17.5003 14.3333 17.5003H5.66667C4.26654 17.5003 3.56647 17.5003 3.0317 17.2278C2.56129 16.9882 2.17884 16.6057 1.93916 16.1353C1.66667 15.6005 1.66667 14.9005 1.66667 13.5003V6.41848Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 13.75C12.0711 13.75 13.75 12.0711 13.75 10C13.75 7.92893 12.0711 6.25 10 6.25C7.92893 6.25 6.25 7.92893 6.25 10C6.25 12.0711 7.92893 13.75 10 13.75Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
