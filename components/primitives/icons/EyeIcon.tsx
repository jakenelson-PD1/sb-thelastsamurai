import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface EyeIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function EyeIcon({ size = 'md', className, ...props }: EyeIconProps) {
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
      <path d="M2.01677 10.5943C1.90329 10.4145 1.84654 10.3247 1.81477 10.1861C1.79091 10.082 1.79091 9.91788 1.81477 9.81379C1.84654 9.67521 1.90329 9.58538 2.01677 9.40563C2.95461 7.92066 5.74617 4.16663 10.0003 4.16663C14.2545 4.16663 17.0461 7.92066 17.9839 9.40563C18.0974 9.58538 18.1542 9.67521 18.1859 9.81379C18.2098 9.91788 18.2098 10.082 18.1859 10.1861C18.1542 10.3247 18.0974 10.4145 17.9839 10.5943C17.0461 12.0793 14.2545 15.8333 10.0003 15.8333C5.74617 15.8333 2.95461 12.0793 2.01677 10.5943Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.0003 12.5C11.3811 12.5 12.5003 11.3807 12.5003 10C12.5003 8.61925 11.3811 7.5 10.0003 7.5C8.61959 7.5 7.50034 8.61925 7.50034 10C7.50034 11.3807 8.61959 12.5 10.0003 12.5Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
