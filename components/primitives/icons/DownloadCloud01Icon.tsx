import { clsx } from 'clsx';

export interface DownloadCloud01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function DownloadCloud01Icon({ size = 20, className, ...props }: DownloadCloud01IconProps) {
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
      <path d="M3.33332 13.5352C2.32833 12.8625 1.66666 11.7168 1.66666 10.4167C1.66666 8.46367 3.15958 6.85941 5.06644 6.68281C5.4565 4.31011 7.51686 2.5 9.99999 2.5C12.4832 2.5 14.5435 4.31011 14.9336 6.68281C16.8404 6.85941 18.3333 8.46367 18.3333 10.4167C18.3333 11.7168 17.6717 12.8625 16.6667 13.5352M6.66666 14.1667L9.99999 17.5M9.99999 17.5L13.3333 14.1667M9.99999 17.5V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
