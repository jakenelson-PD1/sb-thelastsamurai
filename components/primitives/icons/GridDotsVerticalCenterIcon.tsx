import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface GridDotsVerticalCenterIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function GridDotsVerticalCenterIcon({ size = 'md', className, ...props }: GridDotsVerticalCenterIconProps) {
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
      <path d="M2.5 2.5H2.50833M2.5 17.5H2.50833M2.5 13.75H2.50833M2.5 6.25H2.50833M6.25 2.5H6.25833M6.25 17.5H6.25833M13.75 2.5H13.7583M13.75 17.5H13.7583M10 2.5H10.0083M10 17.5H10.0083M10 13.75H10.0083M10 6.25H10.0083M17.5 2.5H17.5083M17.5 17.5H17.5083M17.5 13.75H17.5083M17.5 6.25H17.5083M17.5 10H2.5" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
