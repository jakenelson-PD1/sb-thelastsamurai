import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface MessageNotificationCircleIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function MessageNotificationCircleIcon({ size = 'md', className, ...props }: MessageNotificationCircleIconProps) {
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
      <path d="M9.75582 2.53039C6.15349 2.86351 3.333 5.89404 3.333 9.58333C3.333 10.375 3.46287 11.1363 3.70247 11.8472C3.79264 12.1147 3.83772 12.2484 3.84586 12.3512C3.85389 12.4527 3.84782 12.5238 3.82272 12.6224C3.79729 12.7223 3.74117 12.8262 3.62892 13.034L2.26587 15.557C2.07144 15.9168 1.97422 16.0967 1.99598 16.2357C2.01493 16.3566 2.08612 16.4631 2.19065 16.5268C2.31065 16.6001 2.51408 16.579 2.92096 16.537L7.18847 16.0958C7.31766 16.0825 7.38233 16.0758 7.44122 16.0781C7.49915 16.0802 7.54004 16.0857 7.59653 16.0987C7.65397 16.112 7.72619 16.1398 7.87063 16.1954C8.66065 16.4998 9.51898 16.6667 10.4163 16.6667C14.1086 16.6667 17.1411 13.8415 17.4701 10.2349M16.7674 3.23223C17.7437 4.20854 17.7437 5.79146 16.7674 6.76776C15.7911 7.74407 14.2082 7.74407 13.2319 6.76776C12.2556 5.79146 12.2556 4.20854 13.2319 3.23223C14.2082 2.25592 15.7911 2.25592 16.7674 3.23223Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
