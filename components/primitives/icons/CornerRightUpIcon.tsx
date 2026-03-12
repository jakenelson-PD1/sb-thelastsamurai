import { clsx } from 'clsx';

export interface CornerRightUpIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function CornerRightUpIcon({ size = 20, className, ...props }: CornerRightUpIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('inline-block', className)}
      aria-hidden={!props['aria-label']}
      {...props}
    >
      <path d="M2.5 16.6666H5.33333C8.13359 16.6666 9.53375 16.6666 10.6032 16.1216C11.5441 15.6423 12.309 14.8773 12.7883 13.9365C13.3333 12.867 13.3333 11.4668 13.3333 8.66658V3.33325M13.3333 3.33325L9.16667 7.49992M13.3333 3.33325L17.5 7.49992" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
