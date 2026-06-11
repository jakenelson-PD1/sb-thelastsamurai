import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface FilePlus02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function FilePlus02Icon({ size = 'md', className, ...props }: FilePlus02IconProps) {
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
      <path d="M16.6667 8.75008V5.66675C16.6667 4.26661 16.6667 3.56655 16.3942 3.03177C16.1545 2.56136 15.7721 2.17891 15.3017 1.93923C14.7668 1.66675 14.0668 1.66675 12.6667 1.66675H7.33333C5.9332 1.66675 5.23313 1.66675 4.69835 1.93923C4.22794 2.17891 3.8455 2.56136 3.60581 3.03177C3.33333 3.56655 3.33333 4.26661 3.33333 5.66675V14.3334C3.33333 15.7336 3.33333 16.4336 3.60581 16.9684C3.8455 17.4388 4.22794 17.8212 4.69835 18.0609C5.23313 18.3334 5.9332 18.3334 7.33333 18.3334H10M11.6667 9.16675H6.66666M8.33333 12.5001H6.66666M13.3333 5.83341H6.66666M15 17.5001V12.5001M12.5 15.0001H17.5" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
