import { clsx } from 'clsx';

export interface Lightbulb01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Lightbulb01Icon({ size = 20, className, ...props }: Lightbulb01IconProps) {
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
      <path d="M12.5 13.7498V15.8332C12.5 16.6098 12.5 16.998 12.3732 17.3043C12.204 17.7127 11.8795 18.0372 11.4712 18.2063C11.1648 18.3332 10.7766 18.3332 10 18.3332C9.22342 18.3332 8.83517 18.3332 8.52883 18.2063C8.12048 18.0372 7.79602 17.7127 7.62687 17.3043C7.5 16.998 7.5 16.6098 7.5 15.8332V13.7498M12.5 13.7498C14.7074 12.7854 16.25 10.4794 16.25 7.9165C16.25 4.46472 13.4517 1.6665 10 1.6665C6.54822 1.6665 3.75 4.46472 3.75 7.9165C3.75 10.4794 5.29262 12.7854 7.5 13.7498M12.5 13.7498H7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
