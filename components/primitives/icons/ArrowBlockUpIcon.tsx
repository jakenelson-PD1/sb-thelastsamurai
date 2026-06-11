import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface ArrowBlockUpIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function ArrowBlockUpIcon({ size = 'md', className, ...props }: ArrowBlockUpIconProps) {
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
      <path d="M8.16666 17.5C7.9333 17.5 7.81662 17.5 7.72749 17.4546C7.64909 17.4147 7.58535 17.3509 7.54541 17.2725C7.49999 17.1833 7.49999 17.0667 7.49999 16.8333V8.33333H4.16666L9.99999 2.5L15.8333 8.33333H12.5V16.8333C12.5 17.0667 12.5 17.1833 12.4546 17.2725C12.4147 17.3509 12.3509 17.4147 12.2725 17.4546C12.1833 17.5 12.0667 17.5 11.8333 17.5H8.16666Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
