import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface BluetoothOffIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function BluetoothOffIcon({ size = 'md', className, ...props }: BluetoothOffIconProps) {
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
      <path d="M5 14.1665L10 9.99984V18.3332L14.5332 14.5555M10 5.83317V1.6665L15 5.83317L12.5681 7.85979M17.5 17.4998L2.5 2.49984" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
