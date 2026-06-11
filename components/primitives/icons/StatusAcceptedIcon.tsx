import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface StatusAcceptedIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function StatusAcceptedIcon({ size = 'lg', className, ...props }: StatusAcceptedIconProps) {
  const px = resolveIconSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('inline-block', className)}
      aria-hidden={!props['aria-label']}
      {...props}
    >
      <path d="M6.00183 12.001L10.0018 16.001L17.9982 7.99902" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
