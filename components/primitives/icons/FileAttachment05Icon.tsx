import { clsx } from 'clsx';

export interface FileAttachment05IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function FileAttachment05Icon({ size = 20, className, ...props }: FileAttachment05IconProps) {
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
      <path d="M10 11.6667V7.08341C10 6.39306 10.5597 5.83341 11.25 5.83341C11.9403 5.83341 12.5 6.39306 12.5 7.08341V11.6667C12.5 13.0475 11.3808 14.1667 10 14.1667C8.61926 14.1667 7.50001 13.0475 7.50001 11.6667V8.33341M7.33334 18.3334H12.6667C14.0668 18.3334 14.7668 18.3334 15.3017 18.0609C15.7721 17.8212 16.1545 17.4388 16.3942 16.9684C16.6667 16.4336 16.6667 15.7336 16.6667 14.3334V5.66675C16.6667 4.26661 16.6667 3.56655 16.3942 3.03177C16.1545 2.56136 15.7721 2.17891 15.3017 1.93923C14.7668 1.66675 14.0668 1.66675 12.6667 1.66675H7.33334C5.93321 1.66675 5.23314 1.66675 4.69837 1.93923C4.22796 2.17891 3.84551 2.56136 3.60583 3.03177C3.33334 3.56655 3.33334 4.26661 3.33334 5.66675V14.3334C3.33334 15.7336 3.33334 16.4336 3.60583 16.9684C3.84551 17.4388 4.22796 17.8212 4.69837 18.0609C5.23314 18.3334 5.93321 18.3334 7.33334 18.3334Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
