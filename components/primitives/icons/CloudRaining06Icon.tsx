import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CloudRaining06IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CloudRaining06Icon({ size = 'md', className, ...props }: CloudRaining06IconProps) {
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
      <path d="M10.8333 17.5003H4.99999M15.8333 15.0003H8.33332M5.83332 15.0003H4.16666M15 17.5003H13.3333M5.83332 12.5003C3.53214 12.5003 1.66666 10.6348 1.66666 8.33366C1.66666 6.03248 3.53214 4.16699 5.83332 4.16699C5.86095 4.16699 5.88851 4.16726 5.91601 4.1678C6.67449 2.68333 8.21855 1.66699 9.99999 1.66699C12.0993 1.66699 13.8691 3.07845 14.4119 5.00418C14.4687 5.00162 14.5259 5.00033 14.5833 5.00033C16.6544 5.00033 18.3333 6.67926 18.3333 8.75033C18.3333 10.8214 16.6544 12.5003 14.5833 12.5003C11.4528 12.5003 9.36266 12.5003 5.83332 12.5003Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
