import { clsx } from 'clsx';

export interface ArrowBlockDownIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ArrowBlockDownIcon({ size = 20, className, ...props }: ArrowBlockDownIconProps) {
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
      <path d="M7.5 3.16667C7.5 2.93331 7.5 2.81663 7.54541 2.7275C7.58536 2.6491 7.6491 2.58536 7.7275 2.54542C7.81663 2.5 7.93331 2.5 8.16666 2.5H11.8333C12.0667 2.5 12.1833 2.5 12.2725 2.54542C12.3509 2.58536 12.4147 2.6491 12.4546 2.7275C12.5 2.81663 12.5 2.93331 12.5 3.16667V11.6667H15.8333L10 17.5L4.16666 11.6667H7.5V3.16667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
