import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface BracketsEllipsesIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function BracketsEllipsesIcon({ size = 'md', className, ...props }: BracketsEllipsesIconProps) {
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
      <path d="M15.4757 16.6668C16.5273 16.6668 17.3807 15.8143 17.3807 14.7618V10.9527L18.3332 10.0002L17.3807 9.04766V5.2385C17.3807 4.186 16.5282 3.3335 15.4757 3.3335M4.52416 3.3335C3.47166 3.3335 2.61916 4.186 2.61916 5.2385V9.04766L1.66666 10.0002L2.61916 10.9527V14.7618C2.61916 15.8143 3.47166 16.6668 4.52416 16.6668M6.24999 10.0002H6.25832M9.99999 10.0002H10.0083M13.75 10.0002H13.7583M6.66666 10.0002C6.66666 10.2302 6.48011 10.4168 6.24999 10.4168C6.01987 10.4168 5.83332 10.2302 5.83332 10.0002C5.83332 9.77008 6.01987 9.5835 6.24999 9.5835C6.48011 9.5835 6.66666 9.77008 6.66666 10.0002ZM10.4167 10.0002C10.4167 10.2302 10.2301 10.4168 9.99999 10.4168C9.76991 10.4168 9.58332 10.2302 9.58332 10.0002C9.58332 9.77008 9.76991 9.5835 9.99999 9.5835C10.2301 9.5835 10.4167 9.77008 10.4167 10.0002ZM14.1667 10.0002C14.1667 10.2302 13.9801 10.4168 13.75 10.4168C13.5199 10.4168 13.3333 10.2302 13.3333 10.0002C13.3333 9.77008 13.5199 9.5835 13.75 9.5835C13.9801 9.5835 14.1667 9.77008 14.1667 10.0002Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
