import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface UsbFlashDriveIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function UsbFlashDriveIcon({ size = 'md', className, ...props }: UsbFlashDriveIconProps) {
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
      <path d="M15 7.49984V2.99984C15 2.53313 15 2.29977 14.9091 2.12151C14.8292 1.96471 14.7018 1.83723 14.545 1.75733C14.3667 1.6665 14.1334 1.6665 13.6666 1.6665H6.33331C5.8666 1.6665 5.63325 1.6665 5.45499 1.75733C5.29819 1.83723 5.1707 1.96471 5.0908 2.12151C4.99998 2.29977 4.99998 2.53313 4.99998 2.99984V7.49984M8.33331 4.99984V4.1665M11.6666 4.99984V4.1665M7.33331 18.3332H12.6666C14.0668 18.3332 14.7668 18.3332 15.3016 18.0607C15.7721 17.821 16.1545 17.4386 16.3941 16.9682C16.6666 16.4333 16.6666 15.7333 16.6666 14.3332V10.1665C16.6666 9.23309 16.6666 8.76634 16.485 8.40984C16.3252 8.09625 16.0702 7.84128 15.7566 7.6815C15.4001 7.49984 14.9334 7.49984 14 7.49984H5.99998C5.06656 7.49984 4.59985 7.49984 4.24333 7.6815C3.92972 7.84128 3.67475 8.09625 3.51497 8.40984C3.33331 8.76634 3.33331 9.23309 3.33331 10.1665V14.3332C3.33331 15.7333 3.33331 16.4333 3.6058 16.9682C3.84548 17.4386 4.22793 17.821 4.69834 18.0607C5.23311 18.3332 5.93318 18.3332 7.33331 18.3332Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
