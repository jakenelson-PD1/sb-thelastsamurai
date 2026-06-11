import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CloudSnowing02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CloudSnowing02Icon({ size = 'md', className, ...props }: CloudSnowing02IconProps) {
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
      <path d="M6.66669 15.0003H6.67502M6.66669 17.5003H6.67502M10 15.417H10.0084M10 17.917H10.0084M13.3334 15.0003H13.3417M13.3334 17.5003H13.3417M5.83335 12.5003C3.53217 12.5003 1.66669 10.6348 1.66669 8.33366C1.66669 6.03248 3.53217 4.16699 5.83335 4.16699C5.86098 4.16699 5.88854 4.16726 5.91604 4.1678C6.67452 2.68333 8.21858 1.66699 10 1.66699C12.0994 1.66699 13.8691 3.07845 14.4119 5.00418C14.4688 5.00162 14.5259 5.00033 14.5834 5.00033C16.6544 5.00033 18.3334 6.67926 18.3334 8.75033C18.3334 10.8214 16.6544 12.5003 14.5834 12.5003C11.4529 12.5003 9.36269 12.5003 5.83335 12.5003Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
