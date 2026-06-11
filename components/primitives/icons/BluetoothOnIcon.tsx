import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface BluetoothOnIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function BluetoothOnIcon({ size = 'md', className, ...props }: BluetoothOnIconProps) {
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
      <path d="M5 5.83317L15 14.1665L10 18.3332V1.6665L15 5.83317L5 14.1665" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
