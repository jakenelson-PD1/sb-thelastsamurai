import { clsx } from 'clsx';

export interface MarkerPin05IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function MarkerPin05Icon({ size = 20, className, ...props }: MarkerPin05IconProps) {
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
      <path d="M13.3334 11.1453C16.2765 11.724 18.3334 13.0456 18.3334 14.5833C18.3334 16.6544 14.6024 18.3333 10 18.3333C5.39765 18.3333 1.66669 16.6544 1.66669 14.5833C1.66669 13.0456 3.72351 11.724 6.66669 11.1453M10 14.1667V2.5L14.4314 5.22703C14.7547 5.42595 14.9163 5.52541 14.9679 5.65071C15.0129 5.76 15.0093 5.88325 14.9581 5.98976C14.8994 6.11188 14.7323 6.20185 14.3981 6.38179L10 8.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
