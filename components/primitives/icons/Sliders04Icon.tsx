import { clsx } from 'clsx';

export interface Sliders04IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Sliders04Icon({ size = 20, className, ...props }: Sliders04IconProps) {
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
      <path d="M2.5 6.6665H12.5M12.5 6.6665C12.5 8.04722 13.6192 9.1665 15 9.1665C16.3807 9.1665 17.5 8.04721 17.5 6.6665C17.5 5.2858 16.3807 4.1665 15 4.1665C13.6192 4.1665 12.5 5.2858 12.5 6.6665ZM7.5 13.3332H17.5M7.5 13.3332C7.5 14.7139 6.38071 15.8332 5 15.8332C3.61929 15.8332 2.5 14.7139 2.5 13.3332C2.5 11.9524 3.61929 10.8332 5 10.8332C6.38071 10.8332 7.5 11.9524 7.5 13.3332Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
