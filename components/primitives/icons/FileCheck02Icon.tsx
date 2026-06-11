import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface FileCheck02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function FileCheck02Icon({ size = 'md', className, ...props }: FileCheck02IconProps) {
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
      <path d="M16.6666 10.4167V5.66675C16.6666 4.26661 16.6666 3.56655 16.3941 3.03177C16.1545 2.56136 15.7721 2.17891 15.3016 1.93923C14.7668 1.66675 14.0668 1.66675 12.6666 1.66675H7.33331C5.93318 1.66675 5.23311 1.66675 4.69834 1.93923C4.22793 2.17891 3.84548 2.56136 3.6058 3.03177C3.33331 3.56655 3.33331 4.26661 3.33331 5.66675V14.3334C3.33331 15.7336 3.33331 16.4336 3.6058 16.9684C3.84548 17.4388 4.22793 17.8212 4.69834 18.0609C5.23311 18.3334 5.93318 18.3334 7.33331 18.3334H9.99998M11.6666 9.16675H6.66665M8.33331 12.5001H6.66665M13.3333 5.83341H6.66665M12.0833 15.8334L13.75 17.5001L17.5 13.7501" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
