import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface MusicNotePlusIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function MusicNotePlusIcon({ size = 'md', className, ...props }: MusicNotePlusIconProps) {
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
      <path d="M12.0833 15.0002V4.65756C12.0833 3.94321 12.0833 3.58605 12.2338 3.37093C12.3652 3.1831 12.5681 3.05766 12.7948 3.02416C13.0546 2.9858 13.374 3.14553 14.0129 3.465L17.0833 5.00019M12.0833 15.0002C12.0833 16.3809 10.9641 17.5002 9.58334 17.5002C8.20263 17.5002 7.08334 16.3809 7.08334 15.0002C7.08334 13.6195 8.20263 12.5002 9.58334 12.5002C10.9641 12.5002 12.0833 13.6195 12.0833 15.0002ZM5.41667 8.3335V3.33352M2.91667 5.83352H7.91667" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
