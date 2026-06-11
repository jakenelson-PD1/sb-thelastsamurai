import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface File02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function File02Icon({ size = 'md', className, ...props }: File02IconProps) {
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
      <path d="M11.6667 9.16675H6.66666M8.33333 12.5001H6.66666M13.3333 5.83341H6.66666M16.6667 5.66675V14.3334C16.6667 15.7336 16.6667 16.4336 16.3942 16.9684C16.1545 17.4388 15.7721 17.8212 15.3017 18.0609C14.7668 18.3334 14.0668 18.3334 12.6667 18.3334H7.33333C5.93319 18.3334 5.23313 18.3334 4.69835 18.0609C4.22794 17.8212 3.8455 17.4388 3.60581 16.9684C3.33333 16.4336 3.33333 15.7336 3.33333 14.3334V5.66675C3.33333 4.26661 3.33333 3.56655 3.60581 3.03177C3.8455 2.56136 4.22794 2.17891 4.69835 1.93923C5.23313 1.66675 5.93319 1.66675 7.33333 1.66675H12.6667C14.0668 1.66675 14.7668 1.66675 15.3017 1.93923C15.7721 2.17891 16.1545 2.56136 16.3942 3.03177C16.6667 3.56655 16.6667 4.26661 16.6667 5.66675Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
