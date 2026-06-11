import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Flag06IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Flag06Icon({ size = 'md', className, ...props }: Flag06IconProps) {
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
      <path d="M3.33334 17.5V3.33333M3.33334 10.8333H9.50001C9.96676 10.8333 10.2001 10.8333 10.3783 10.7425C10.5352 10.6626 10.6626 10.5352 10.7425 10.3783C10.8333 10.2001 10.8333 9.96675 10.8333 9.5V3.83333C10.8333 3.36662 10.8333 3.13327 10.7425 2.95501C10.6626 2.79821 10.5352 2.67072 10.3783 2.59082C10.2001 2.5 9.96676 2.5 9.50001 2.5H4.66668C4.19997 2.5 3.96661 2.5 3.78835 2.59082C3.63155 2.67072 3.50407 2.79821 3.42417 2.95501C3.33334 3.13327 3.33334 3.36662 3.33334 3.83333V10.8333ZM10.8333 4.16667H16.1667C16.6334 4.16667 16.8668 4.16667 17.045 4.25749C17.2018 4.33739 17.3293 4.46487 17.4092 4.62167C17.5 4.79993 17.5 5.03329 17.5 5.5V11.1667C17.5 11.6334 17.5 11.8668 17.4092 12.045C17.3293 12.2018 17.2018 12.3292 17.045 12.4092C16.8668 12.5 16.6334 12.5 16.1667 12.5H12.1667C11.6999 12.5 11.4666 12.5 11.2883 12.4092C11.1315 12.3292 11.0041 12.2018 10.9242 12.045C10.8333 11.8668 10.8333 11.6334 10.8333 11.1667V4.16667Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
