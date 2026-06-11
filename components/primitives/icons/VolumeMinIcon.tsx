import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface VolumeMinIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function VolumeMinIcon({ size = 'md', className, ...props }: VolumeMinIconProps) {
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
      <path d="M15.2042 6.66677C15.8633 7.61163 16.2498 8.76074 16.2498 10.0001C16.2498 11.2395 15.8633 12.3886 15.2042 13.3334M10.1119 3.63817L7.47386 6.27624C7.32973 6.42037 7.25767 6.49243 7.17357 6.54397C7.09901 6.58966 7.01772 6.62333 6.93269 6.64374C6.83678 6.66677 6.73487 6.66677 6.53105 6.66677H5.08333C4.61662 6.66677 4.38327 6.66677 4.20501 6.75759C4.04821 6.83748 3.92073 6.96497 3.84083 7.12178C3.75 7.30003 3.75 7.53338 3.75 8.0001V12.0001C3.75 12.4668 3.75 12.7002 3.84083 12.8784C3.92073 13.0352 4.04821 13.1627 4.20501 13.2426C4.38327 13.3334 4.61662 13.3334 5.08333 13.3334H6.53105C6.73487 13.3334 6.83678 13.3334 6.93269 13.3565C7.01772 13.3769 7.09901 13.4106 7.17357 13.4562C7.25767 13.5077 7.32973 13.5798 7.47386 13.724L10.1119 16.362C10.4689 16.719 10.6474 16.8975 10.8007 16.9096C10.9336 16.92 11.0636 16.8662 11.1502 16.7647C11.25 16.6479 11.25 16.3955 11.25 15.8907V4.10958C11.25 3.60473 11.25 3.3523 11.1502 3.23542C11.0636 3.134 10.9336 3.08018 10.8007 3.09064C10.6474 3.1027 10.4689 3.28119 10.1119 3.63817Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
