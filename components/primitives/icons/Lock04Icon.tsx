import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Lock04IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Lock04Icon({ size = 'md', className, ...props }: Lock04IconProps) {
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
      <path d="M5.91751 8.33333H5.83332V6.66667C5.83332 4.36548 7.69881 2.5 9.99999 2.5C12.3012 2.5 14.1667 4.36548 14.1667 6.66667V8.33333H14.0825M9.99999 11.6667V13.3333M15.8333 12.5C15.8333 15.7217 13.2217 18.3333 9.99999 18.3333C6.77833 18.3333 4.16666 15.7217 4.16666 12.5C4.16666 9.27833 6.77833 6.66667 9.99999 6.66667C13.2217 6.66667 15.8333 9.27833 15.8333 12.5Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
