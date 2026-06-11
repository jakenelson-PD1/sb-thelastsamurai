import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface VolumeXIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function VolumeXIcon({ size = 'md', className, ...props }: VolumeXIconProps) {
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
      <path d="M18.3334 7.5001L13.3334 12.5001M13.3334 7.5001L18.3334 12.5001M8.02862 3.63817L5.39055 6.27624C5.24642 6.42037 5.17435 6.49243 5.09025 6.54397C5.0157 6.58966 4.93441 6.62333 4.84938 6.64374C4.75347 6.66677 4.65156 6.66677 4.44774 6.66677H3.00002C2.53331 6.66677 2.29995 6.66677 2.1217 6.75759C1.9649 6.83748 1.83741 6.96497 1.75751 7.12178C1.66669 7.30003 1.66669 7.53338 1.66669 8.0001V12.0001C1.66669 12.4668 1.66669 12.7002 1.75751 12.8784C1.83741 13.0352 1.9649 13.1627 2.1217 13.2426C2.29995 13.3334 2.53331 13.3334 3.00002 13.3334H4.44774C4.65156 13.3334 4.75347 13.3334 4.84938 13.3565C4.93441 13.3769 5.0157 13.4106 5.09025 13.4562C5.17435 13.5077 5.24642 13.5798 5.39055 13.724L8.02861 16.362C8.3856 16.719 8.5641 16.8975 8.71735 16.9096C8.85027 16.92 8.98027 16.8662 9.06685 16.7647C9.16669 16.6479 9.16669 16.3955 9.16669 15.8907V4.10958C9.16669 3.60473 9.16669 3.3523 9.06685 3.23542C8.98027 3.134 8.85027 3.08018 8.71735 3.09064C8.5641 3.1027 8.3856 3.28119 8.02862 3.63817Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
