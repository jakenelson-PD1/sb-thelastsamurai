import { clsx } from 'clsx';

export interface FileAttachment02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function FileAttachment02Icon({ size = 20, className, ...props }: FileAttachment02IconProps) {
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
      <path d="M10.4167 1.66675H12.6667C14.0668 1.66675 14.7668 1.66675 15.3017 1.93923C15.7721 2.17891 16.1545 2.56136 16.3942 3.03177C16.6667 3.56655 16.6667 4.26661 16.6667 5.66675V14.3334C16.6667 15.7336 16.6667 16.4336 16.3942 16.9684C16.1545 17.4388 15.7721 17.8212 15.3017 18.0609C14.7668 18.3334 14.0668 18.3334 12.6667 18.3334H7.33333C5.9332 18.3334 5.23313 18.3334 4.69836 18.0609C4.22795 17.8212 3.8455 17.4388 3.60582 16.9684C3.33333 16.4336 3.33333 15.7336 3.33333 14.3334V13.7501M13.3333 10.8334H9.58333M13.3333 7.50008H10.4167M13.3333 14.1667H6.66667M5 8.33341V3.75008C5 3.05972 5.55964 2.50008 6.25 2.50008C6.94036 2.50008 7.5 3.05972 7.5 3.75008V8.33341C7.5 9.71416 6.38071 10.8334 5 10.8334C3.61929 10.8334 2.5 9.71416 2.5 8.33341V5.00008" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
