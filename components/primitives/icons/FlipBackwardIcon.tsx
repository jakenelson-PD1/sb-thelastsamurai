import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface FlipBackwardIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function FlipBackwardIcon({ size = 'md', className, ...props }: FlipBackwardIconProps) {
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
      <path d="M2.5 7.50008H13.75C15.8211 7.50008 17.5 9.179 17.5 11.2501C17.5 13.3212 15.8211 15.0001 13.75 15.0001H10M2.5 7.50008L5.83333 4.16675M2.5 7.50008L5.83333 10.8334" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
