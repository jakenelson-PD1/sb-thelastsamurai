import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface BluetoothSignalIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function BluetoothSignalIcon({ size = 'md', className, ...props }: BluetoothSignalIconProps) {
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
      <g clipPath="url(#bluetoothsignal-clip0_118_43578)">
<path d="M1.66666 5.83317L11.6667 14.1665L6.66666 18.3332V1.6665L11.6667 5.83317L1.66666 14.1665M16.7871 5.4165C17.7151 6.70654 18.2617 8.28936 18.2617 9.99984C18.2617 11.7103 17.7151 13.2932 16.7871 14.5832M14.1667 7.38087C14.6845 8.12326 14.9882 9.02609 14.9882 9.99992C14.9882 10.9737 14.6845 11.8766 14.1667 12.619" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="bluetoothsignal-clip0_118_43578">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
