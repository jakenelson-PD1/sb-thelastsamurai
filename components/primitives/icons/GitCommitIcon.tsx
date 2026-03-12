import { clsx } from 'clsx';

export interface GitCommitIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function GitCommitIcon({ size = 20, className, ...props }: GitCommitIconProps) {
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
      <path d="M13.3333 9.99984C13.3333 11.8408 11.8409 13.3332 9.99999 13.3332C8.15903 13.3332 6.66665 11.8408 6.66665 9.99984M13.3333 9.99984C13.3333 8.15889 11.8409 6.6665 9.99999 6.6665C8.15903 6.6665 6.66665 8.15889 6.66665 9.99984M13.3333 9.99984H18.3333M6.66665 9.99984H1.66681" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
