import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface BluetoothConnectIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function BluetoothConnectIcon({ size = 'md', className, ...props }: BluetoothConnectIconProps) {
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
      <path d="M2.5 5.83317L12.5 14.1665L7.5 18.3332V1.6665L12.5 5.83317L2.5 14.1665M15 9.99984H15.0083M12.5 9.99984H12.5083M17.5 9.99984H17.5083" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
