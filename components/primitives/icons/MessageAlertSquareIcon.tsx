import { clsx } from 'clsx';

export interface MessageAlertSquareIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function MessageAlertSquareIcon({ size = 20, className, ...props }: MessageAlertSquareIconProps) {
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
      <path d="M10 8.75V5.83333M10 11.6667H10.0083M5.83333 15V16.9463C5.83333 17.3903 5.83333 17.6123 5.92436 17.7263C6.00352 17.8255 6.12356 17.8833 6.25045 17.8831C6.39636 17.8829 6.56972 17.7443 6.91647 17.4668L8.90433 15.8765C9.31042 15.5517 9.5135 15.3893 9.73958 15.2738C9.94017 15.1713 10.1537 15.0963 10.3743 15.0511C10.6231 15 10.8831 15 11.4031 15H13.5C14.9002 15 15.6002 15 16.135 14.7275C16.6054 14.4878 16.9878 14.1054 17.2275 13.635C17.5 13.1002 17.5 12.4002 17.5 11V6.5C17.5 5.09987 17.5 4.3998 17.2275 3.86503C16.9878 3.39462 16.6054 3.01217 16.135 2.77248C15.6002 2.5 14.9002 2.5 13.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86503 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86503C2.5 4.3998 2.5 5.09987 2.5 6.5V11.6667C2.5 12.4417 2.5 12.8292 2.58518 13.1471C2.81635 14.0098 3.49022 14.6837 4.35295 14.9148C4.67087 15 5.05836 15 5.83333 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
