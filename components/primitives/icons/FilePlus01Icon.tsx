import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface FilePlus01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function FilePlus01Icon({ size = 'md', className, ...props }: FilePlus01IconProps) {
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
      <path d="M16.6667 8.75008V5.66675C16.6667 4.26661 16.6667 3.56655 16.3942 3.03177C16.1545 2.56136 15.7721 2.17891 15.3017 1.93923C14.7668 1.66675 14.0668 1.66675 12.6667 1.66675H7.33334C5.9332 1.66675 5.23314 1.66675 4.69836 1.93923C4.22795 2.17891 3.8455 2.56136 3.60582 3.03177C3.33334 3.56655 3.33334 4.26661 3.33334 5.66675V14.3334C3.33334 15.7336 3.33334 16.4336 3.60582 16.9684C3.8455 17.4388 4.22795 17.8212 4.69836 18.0609C5.23314 18.3334 5.9332 18.3334 7.33334 18.3334H10M15 17.5001V12.5001M12.5 15.0001H17.5" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
