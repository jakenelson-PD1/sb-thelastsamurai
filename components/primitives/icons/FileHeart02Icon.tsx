import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface FileHeart02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function FileHeart02Icon({ size = 'md', className, ...props }: FileHeart02IconProps) {
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
      <path d="M16.6667 8.33341V5.66675C16.6667 4.26661 16.6667 3.56655 16.3942 3.03177C16.1545 2.56136 15.7721 2.17891 15.3017 1.93923C14.7668 1.66675 14.0668 1.66675 12.6667 1.66675H7.33334C5.93321 1.66675 5.23314 1.66675 4.69837 1.93923C4.22796 2.17891 3.84551 2.56136 3.60583 3.03177C3.33334 3.56655 3.33334 4.26661 3.33334 5.66675V14.3334C3.33334 15.7336 3.33334 16.4336 3.60583 16.9684C3.84551 17.4388 4.22796 17.8212 4.69837 18.0609C5.23314 18.3334 5.93321 18.3334 7.33334 18.3334H10M10.4167 9.16675H6.66668M7.50001 12.5001H6.66668M13.3333 5.83341H6.66668M14.1644 12.3589C13.4979 11.6014 12.3866 11.3977 11.5516 12.0912C10.7166 12.7849 10.599 13.9447 11.2548 14.765C11.9105 15.5854 14.1644 17.5001 14.1644 17.5001C14.1644 17.5001 16.4183 15.5854 17.074 14.765C17.7298 13.9447 17.6266 12.7777 16.7772 12.0912C15.9278 11.4049 14.8308 11.6014 14.1644 12.3589Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
