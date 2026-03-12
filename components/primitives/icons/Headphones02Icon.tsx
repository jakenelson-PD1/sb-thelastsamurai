import { clsx } from 'clsx';

export interface Headphones02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Headphones02Icon({ size = 20, className, ...props }: Headphones02IconProps) {
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
      <path d="M18.3333 14.1667V10.8333C18.3333 6.23096 14.6023 2.5 10 2.5C5.39763 2.5 1.66667 6.23096 1.66667 10.8333V14.1667M6.25 17.5C5.09941 17.5 4.16667 16.5672 4.16667 15.4167V12.9167C4.16667 11.7661 5.09941 10.8333 6.25 10.8333C7.4006 10.8333 8.33334 11.7661 8.33334 12.9167V15.4167C8.33334 16.5672 7.4006 17.5 6.25 17.5ZM13.75 17.5C12.5994 17.5 11.6667 16.5672 11.6667 15.4167V12.9167C11.6667 11.7661 12.5994 10.8333 13.75 10.8333C14.9006 10.8333 15.8333 11.7661 15.8333 12.9167V15.4167C15.8333 16.5672 14.9006 17.5 13.75 17.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
