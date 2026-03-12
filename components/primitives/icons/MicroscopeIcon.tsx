import { clsx } from 'clsx';

export interface MicroscopeIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function MicroscopeIcon({ size = 20, className, ...props }: MicroscopeIconProps) {
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
      <path d="M2.5 18.3337H10M9.16667 5.21036C9.69933 5.07325 10.2578 5.00033 10.8333 5.00033C14.5152 5.00033 17.5 7.98509 17.5 11.667C17.5 14.4648 15.7765 16.8601 13.3333 17.8491M4.58333 10.8337H7.91667C8.30388 10.8337 8.4975 10.8337 8.6585 10.8657C9.31967 10.9972 9.8365 11.514 9.968 12.1752C10 12.3362 10 12.5297 10 12.917C10 13.3042 10 13.4978 9.968 13.6588C9.8365 14.32 9.31967 14.8368 8.6585 14.9683C8.4975 15.0003 8.30388 15.0003 7.91667 15.0003H4.58333C4.19612 15.0003 4.00252 15.0003 3.84152 14.9683C3.18037 14.8368 2.66353 14.32 2.53202 13.6588C2.5 13.4978 2.5 13.3042 2.5 12.917C2.5 12.5297 2.5 12.3362 2.53202 12.1752C2.66353 11.514 3.18037 10.9972 3.84152 10.8657C4.00252 10.8337 4.19612 10.8337 4.58333 10.8337ZM3.33333 4.58366V10.8337H9.16667V4.58366C9.16667 2.97283 7.86083 1.66699 6.25 1.66699C4.63917 1.66699 3.33333 2.97283 3.33333 4.58366Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
