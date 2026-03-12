import { clsx } from 'clsx';

export interface BluetoothConnectIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function BluetoothConnectIcon({ size = 20, className, ...props }: BluetoothConnectIconProps) {
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
      <path d="M2.5 5.83317L12.5 14.1665L7.5 18.3332V1.6665L12.5 5.83317L2.5 14.1665M15 9.99984H15.0083M12.5 9.99984H12.5083M17.5 9.99984H17.5083" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
