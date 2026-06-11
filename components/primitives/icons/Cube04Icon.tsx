import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Cube04IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Cube04Icon({ size = 'md', className, ...props }: Cube04IconProps) {
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
      <path d="M17.0833 13.3333H6.66667M6.66667 13.3333V2.91667M6.66667 13.3333L2.91667 17.0833M2.91667 6.66667H13.3333M13.3333 6.66667V17.0833M13.3333 6.66667L17.0833 2.91667M17.5 12.7811V3.16667C17.5 2.93331 17.5 2.81663 17.4546 2.7275C17.4147 2.6491 17.3509 2.58536 17.2725 2.54542C17.1833 2.5 17.0667 2.5 16.8333 2.5H7.21895C7.01512 2.5 6.91322 2.5 6.81731 2.52303C6.73227 2.54344 6.65099 2.57711 6.57643 2.6228C6.49233 2.67433 6.42027 2.7464 6.27614 2.89053L2.89053 6.27614C2.7464 6.42027 2.67433 6.49233 2.6228 6.57643C2.57711 6.65099 2.54344 6.73227 2.52303 6.81731C2.5 6.91322 2.5 7.01512 2.5 7.21895V16.8333C2.5 17.0667 2.5 17.1833 2.54542 17.2725C2.58536 17.3509 2.6491 17.4147 2.7275 17.4546C2.81663 17.5 2.93331 17.5 3.16667 17.5H12.7811C12.9848 17.5 13.0867 17.5 13.1827 17.477C13.2677 17.4566 13.349 17.4229 13.4236 17.3772C13.5077 17.3257 13.5797 17.2536 13.7238 17.1095L17.1095 13.7238C17.2536 13.5797 17.3257 13.5077 17.3772 13.4236C17.4229 13.349 17.4566 13.2677 17.477 13.1827C17.5 13.0867 17.5 12.9848 17.5 12.7811Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
