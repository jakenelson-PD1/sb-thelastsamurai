import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface FileQuestion02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function FileQuestion02Icon({ size = 'md', className, ...props }: FileQuestion02IconProps) {
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
      <path d="M16.6666 7.91675V5.66675C16.6666 4.26661 16.6666 3.56655 16.3941 3.03177C16.1545 2.56136 15.7721 2.17891 15.3016 1.93923C14.7668 1.66675 14.0668 1.66675 12.6666 1.66675H7.33331C5.93318 1.66675 5.23311 1.66675 4.69834 1.93923C4.22793 2.17891 3.84548 2.56136 3.6058 3.03177C3.33331 3.56655 3.33331 4.26661 3.33331 5.66675V14.3334C3.33331 15.7336 3.33331 16.4336 3.6058 16.9684C3.84548 17.4388 4.22793 17.8212 4.69834 18.0609C5.23311 18.3334 5.93318 18.3334 7.33331 18.3334H11.6666M11.6666 9.16675H6.66665M8.33331 12.5001H6.66665M13.3333 5.83341H6.66665M13.75 12.5019C13.8968 12.0846 14.1866 11.7326 14.5681 11.5084C14.9496 11.2842 15.3981 11.2022 15.8341 11.2771C16.2702 11.3518 16.6658 11.5786 16.9507 11.9171C17.2357 12.2556 17.3916 12.684 17.391 13.1265C17.391 14.3756 15.5174 15.0001 15.5174 15.0001M15.5416 17.5001H15.5499" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
