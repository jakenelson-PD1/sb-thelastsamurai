import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface FlipForwardIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function FlipForwardIcon({ size = 'md', className, ...props }: FlipForwardIconProps) {
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
      <path d="M17.5 7.50008H6.25C4.17893 7.50008 2.5 9.179 2.5 11.2501C2.5 13.3212 4.17893 15.0001 6.25 15.0001H10M17.5 7.50008L14.1667 4.16675M17.5 7.50008L14.1667 10.8334" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
