import { clsx } from 'clsx';

export interface BluetoothOnIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function BluetoothOnIcon({ size = 20, className, ...props }: BluetoothOnIconProps) {
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
      <path d="M5 5.83317L15 14.1665L10 18.3332V1.6665L15 5.83317L5 14.1665" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
