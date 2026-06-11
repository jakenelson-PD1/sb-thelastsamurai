import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Thermometer02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Thermometer02Icon({ size = 'md', className, ...props }: Thermometer02IconProps) {
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
      <path d="M12.0833 3.75033C12.0833 2.59973 11.1506 1.66699 10 1.66699C8.84942 1.66699 7.91667 2.59973 7.91667 3.75033V11.4652C6.91168 12.1378 6.25 13.2835 6.25 14.5837C6.25 16.6547 7.92893 18.3337 10 18.3337C12.0711 18.3337 13.75 16.6547 13.75 14.5837C13.75 13.2835 13.0883 12.1378 12.0833 11.4652V3.75033Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 15.4167C10.4603 15.4167 10.8333 15.0436 10.8333 14.5833C10.8333 14.1231 10.4603 13.75 10 13.75C9.53976 13.75 9.16667 14.1231 9.16667 14.5833C9.16667 15.0436 9.53976 15.4167 10 15.4167Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
