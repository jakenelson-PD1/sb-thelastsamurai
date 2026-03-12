import { clsx } from 'clsx';

export interface FileQuestion01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function FileQuestion01Icon({ size = 20, className, ...props }: FileQuestion01IconProps) {
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
      <path d="M16.6667 7.91675V5.66675C16.6667 4.26661 16.6667 3.56655 16.3942 3.03177C16.1545 2.56136 15.7721 2.17891 15.3017 1.93923C14.7668 1.66675 14.0668 1.66675 12.6667 1.66675H7.33334C5.93321 1.66675 5.23314 1.66675 4.69837 1.93923C4.22796 2.17891 3.84551 2.56136 3.60583 3.03177C3.33334 3.56655 3.33334 4.26661 3.33334 5.66675V14.3334C3.33334 15.7336 3.33334 16.4336 3.60583 16.9684C3.84551 17.4388 4.22796 17.8212 4.69837 18.0609C5.23314 18.3334 5.93321 18.3334 7.33334 18.3334H11.6667M13.75 12.5019C13.8968 12.0846 14.1867 11.7326 14.5681 11.5084C14.9496 11.2842 15.3981 11.2022 15.8342 11.2771C16.2703 11.3518 16.6658 11.5786 16.9508 11.9171C17.2358 12.2556 17.3917 12.684 17.391 13.1265C17.391 14.3756 15.5174 15.0001 15.5174 15.0001M15.5417 17.5001H15.55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
