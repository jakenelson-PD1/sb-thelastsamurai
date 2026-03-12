import { clsx } from 'clsx';

export interface MessageCircle01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function MessageCircle01Icon({ size = 20, className, ...props }: MessageCircle01IconProps) {
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
      <path d="M17.4996 9.58333C17.4996 13.4953 14.3283 16.6667 10.4163 16.6667C9.51898 16.6667 8.66065 16.4998 7.87063 16.1954C7.72619 16.1398 7.65397 16.112 7.59653 16.0988C7.54004 16.0858 7.49915 16.0803 7.44122 16.0781C7.38232 16.0758 7.31771 16.0825 7.18847 16.0958L2.92096 16.537C2.51408 16.579 2.31065 16.6001 2.19065 16.5268C2.08612 16.4631 2.01493 16.3566 1.99598 16.2357C1.97422 16.0968 2.07144 15.9168 2.26587 15.557L3.62892 13.034C3.74117 12.8263 3.79729 12.7223 3.82272 12.6224C3.84782 12.5238 3.85389 12.4527 3.84586 12.3512C3.83772 12.2484 3.79264 12.1147 3.70248 11.8472C3.46287 11.1363 3.333 10.375 3.333 9.58333C3.333 5.67132 6.50432 2.5 10.4163 2.5C14.3283 2.5 17.4996 5.67132 17.4996 9.58333Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
