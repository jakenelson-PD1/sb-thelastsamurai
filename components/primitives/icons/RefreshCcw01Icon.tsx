import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface RefreshCcw01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function RefreshCcw01Icon({ size = 'md', className, ...props }: RefreshCcw01IconProps) {
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
      <path d="M1.66669 8.33333C1.66669 8.33333 3.3375 6.05685 4.69489 4.69853C6.05226 3.34022 7.92802 2.5 10 2.5C14.1422 2.5 17.5 5.85787 17.5 10C17.5 14.1422 14.1422 17.5 10 17.5C6.58078 17.5 3.69595 15.2119 2.79316 12.0833M1.66669 8.33333V3.33333M1.66669 8.33333H6.66669" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
