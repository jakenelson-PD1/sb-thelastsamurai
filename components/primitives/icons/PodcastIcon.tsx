import { clsx } from 'clsx';

export interface PodcastIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function PodcastIcon({ size = 20, className, ...props }: PodcastIconProps) {
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
      <path d="M14.2657 14.9998C16.2186 13.6791 17.5 11.4814 17.5 8.98734C17.5 4.94425 14.142 1.6665 10 1.6665C5.85798 1.6665 2.5 4.94425 2.5 8.98734C2.5 11.4814 3.78143 13.6791 5.73428 14.9998M6.96639 11.6665C6.26562 10.9582 5.83333 10.007 5.83333 8.95859C5.83333 6.77243 7.69901 4.99984 10 4.99984C12.301 4.99984 14.1667 6.77243 14.1667 8.95859C14.1667 10.0078 13.7344 10.9582 13.0336 11.6665M10 18.3332C9.0795 18.3332 8.33333 17.587 8.33333 16.6665V14.9998C8.33333 14.0793 9.0795 13.3332 10 13.3332C10.9205 13.3332 11.6667 14.0793 11.6667 14.9998V16.6665C11.6667 17.587 10.9205 18.3332 10 18.3332ZM10.8333 9.1665C10.8333 9.62675 10.4602 9.99984 10 9.99984C9.53975 9.99984 9.16667 9.62675 9.16667 9.1665C9.16667 8.70625 9.53975 8.33317 10 8.33317C10.4602 8.33317 10.8333 8.70625 10.8333 9.1665Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
