import { clsx } from 'clsx';

export interface GridDotsHorizontalCenterIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function GridDotsHorizontalCenterIcon({ size = 20, className, ...props }: GridDotsHorizontalCenterIconProps) {
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
      <path d="M2.5 2.5H2.50833M2.5 10H2.50833M2.5 17.5H2.50833M2.5 13.75H2.50833M2.5 6.25H2.50833M6.25 2.5H6.25833M6.25 10H6.25833M6.25 17.5H6.25833M13.75 2.5H13.7583M13.75 10H13.7583M13.75 17.5H13.7583M17.5 2.5H17.5083M17.5 10H17.5083M17.5 17.5H17.5083M17.5 13.75H17.5083M17.5 6.25H17.5083M10 17.5V2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
