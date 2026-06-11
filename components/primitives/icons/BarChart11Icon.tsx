import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface BarChart11IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function BarChart11Icon({ size = 'md', className, ...props }: BarChart11IconProps) {
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
      <path d="M7.5 17.5H3.83333C3.36662 17.5 3.13327 17.5 2.95501 17.4092C2.79821 17.3293 2.67072 17.2018 2.59082 17.045C2.5 16.8668 2.5 16.6334 2.5 16.1667V3.83333C2.5 3.36662 2.5 3.13327 2.59082 2.95501C2.67072 2.79821 2.79821 2.67072 2.95501 2.59082C3.13327 2.5 3.36662 2.5 3.83333 2.5H6.16667C6.63337 2.5 6.86673 2.5 7.04499 2.59082C7.20179 2.67072 7.32928 2.79821 7.40918 2.95501C7.5 3.13327 7.5 3.36662 7.5 3.83333V5.83333M7.5 17.5H12.5M7.5 17.5V5.83333M7.5 5.83333H11.1667C11.6334 5.83333 11.8668 5.83333 12.045 5.92416C12.2018 6.00406 12.3292 6.13154 12.4092 6.28834C12.5 6.4666 12.5 6.69996 12.5 7.16667V17.5M12.5 17.5H16.1667C16.6334 17.5 16.8668 17.5 17.045 17.4092C17.2018 17.3293 17.3293 17.2018 17.4092 17.045C17.5 16.8668 17.5 16.6334 17.5 16.1667V10.5C17.5 10.0333 17.5 9.79992 17.4092 9.62167C17.3293 9.46483 17.2018 9.33742 17.045 9.2575C16.8668 9.16667 16.6334 9.16667 16.1667 9.16667H12.5" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
