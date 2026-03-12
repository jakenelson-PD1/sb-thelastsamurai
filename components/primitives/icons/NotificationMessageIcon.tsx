import { clsx } from 'clsx';

export interface NotificationMessageIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function NotificationMessageIcon({ size = 20, className, ...props }: NotificationMessageIconProps) {
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
      <path d="M9.16667 3.33333H6.5C5.09987 3.33333 4.3998 3.33333 3.86503 3.60581C3.39462 3.8455 3.01217 4.22795 2.77248 4.69836C2.5 5.23313 2.5 5.9332 2.5 7.33333V11.6667C2.5 12.4417 2.5 12.8292 2.58518 13.1471C2.81635 14.0097 3.49022 14.6837 4.35295 14.9148C4.67087 15 5.05836 15 5.83333 15V16.9462C5.83333 17.3903 5.83333 17.6123 5.92436 17.7263C6.00352 17.8255 6.12356 17.8832 6.25045 17.8831C6.39636 17.8829 6.56972 17.7442 6.91647 17.4668L8.90433 15.8765C9.31042 15.5517 9.5135 15.3892 9.73958 15.2737C9.94017 15.1712 10.1537 15.0963 10.3743 15.0511C10.6231 15 10.8831 15 11.4031 15H12.6667C14.0668 15 14.7668 15 15.3017 14.7275C15.7721 14.4878 16.1545 14.1054 16.3942 13.635C16.6667 13.1002 16.6667 12.4002 16.6667 11V10.8333M16.7677 3.23223C17.7441 4.20854 17.7441 5.79146 16.7677 6.76776C15.7914 7.74407 14.2086 7.74407 13.2322 6.76776C12.2559 5.79146 12.2559 4.20854 13.2322 3.23223C14.2086 2.25592 15.7914 2.25592 16.7677 3.23223Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
