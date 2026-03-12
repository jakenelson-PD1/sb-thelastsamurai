import { clsx } from 'clsx';

export interface ParagraphWrapIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ParagraphWrapIcon({ size = 20, className, ...props }: ParagraphWrapIconProps) {
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
      <path d="M2.5 5H17.5M2.5 10H15C15.663 10 16.2989 10.2634 16.7677 10.7323C17.2366 11.2011 17.5 11.837 17.5 12.5C17.5 13.163 17.2366 13.7989 16.7677 14.2678C16.2989 14.7366 15.663 15 15 15H11.6667M11.6667 15L13.3333 13.3333M11.6667 15L13.3333 16.6667M2.5 15H8.33333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
