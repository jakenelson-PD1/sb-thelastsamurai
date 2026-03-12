import { clsx } from 'clsx';

export interface CloudSun01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function CloudSun01Icon({ size = 20, className, ...props }: CloudSun01IconProps) {
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
      <path d="M16.14 10.3373C17.4459 9.63383 18.3334 8.25392 18.3334 6.66667C18.3334 4.36548 16.4679 2.5 14.1667 2.5C11.8655 2.5 10 4.36548 10 6.66667M10 6.66667C8.21858 6.66667 6.67452 7.683 5.91604 9.1675C5.88854 9.16692 5.86098 9.16667 5.83335 9.16667C3.53217 9.16667 1.66669 11.0322 1.66669 13.3333C1.66669 15.6345 3.53217 17.5 5.83335 17.5C9.36269 17.5 11.4529 17.5 14.5834 17.5C16.6544 17.5 18.3334 15.8211 18.3334 13.75C18.3334 11.6789 16.6544 10 14.5834 10C14.5259 10 14.4688 10.0013 14.4119 10.0038C13.8691 8.07812 12.0994 6.66667 10 6.66667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
