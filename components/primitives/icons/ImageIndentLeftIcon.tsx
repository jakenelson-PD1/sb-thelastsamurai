import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface ImageIndentLeftIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function ImageIndentLeftIcon({ size = 'md', className, ...props }: ImageIndentLeftIconProps) {
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
      <path d="M17.5 7.70825H12.5M17.5 3.33325H2.5M17.5 12.2916H12.5M17.5 16.6666H2.5M3.83333 13.3333H7.83333C8.30004 13.3333 8.53342 13.3333 8.71167 13.2424C8.8685 13.1625 8.99592 13.0351 9.07583 12.8783C9.16667 12.7 9.16667 12.4667 9.16667 11.9999V7.99992C9.16667 7.53321 9.16667 7.29985 9.07583 7.12159C8.99592 6.96479 8.8685 6.83731 8.71167 6.75741C8.53342 6.66658 8.30004 6.66659 7.83333 6.66659H3.83333C3.36662 6.66659 3.13327 6.66658 2.95501 6.75741C2.79821 6.83731 2.67072 6.96479 2.59082 7.12159C2.5 7.29985 2.5 7.53321 2.5 7.99992V11.9999C2.5 12.4667 2.5 12.7 2.59082 12.8783C2.67072 13.0351 2.79821 13.1625 2.95501 13.2424C3.13327 13.3333 3.36662 13.3333 3.83333 13.3333Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
