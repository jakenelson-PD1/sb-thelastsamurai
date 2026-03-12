import { clsx } from 'clsx';

export interface Rss01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Rss01Icon({ size = 20, className, ...props }: Rss01IconProps) {
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
      <path d="M3.33331 9.16683C5.32244 9.16683 7.23009 9.957 8.63665 11.3635C10.0431 12.7701 10.8333 14.6777 10.8333 16.6668M3.33331 3.3335C6.86953 3.3335 10.2609 4.73825 12.7614 7.23874C15.2619 9.73925 16.6666 13.1306 16.6666 16.6668M4.99998 15.8335C4.99998 16.2937 4.62688 16.6668 4.16665 16.6668C3.70641 16.6668 3.33331 16.2937 3.33331 15.8335C3.33331 15.3732 3.70641 15.0002 4.16665 15.0002C4.62688 15.0002 4.99998 15.3732 4.99998 15.8335Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
