import { clsx } from 'clsx';

export interface FileX03IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function FileX03Icon({ size = 20, className, ...props }: FileX03IconProps) {
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
      <path d="M11.6667 1.89136V5.33347C11.6667 5.80018 11.6667 6.03354 11.7575 6.2118C11.8374 6.3686 11.9648 6.49608 12.1217 6.57598C12.2999 6.66681 12.5333 6.66681 13 6.66681H16.4421M7.91667 10.0001L12.0833 14.1667M12.0833 10.0001L7.91667 14.1667M11.6667 1.66675H7.33334C5.9332 1.66675 5.23314 1.66675 4.69836 1.93923C4.22795 2.17891 3.8455 2.56136 3.60582 3.03177C3.33334 3.56655 3.33334 4.26661 3.33334 5.66675V14.3334C3.33334 15.7336 3.33334 16.4336 3.60582 16.9684C3.8455 17.4388 4.22795 17.8212 4.69836 18.0609C5.23314 18.3334 5.9332 18.3334 7.33334 18.3334H12.6667C14.0668 18.3334 14.7668 18.3334 15.3017 18.0609C15.7721 17.8212 16.1545 17.4388 16.3942 16.9684C16.6667 16.4336 16.6667 15.7336 16.6667 14.3334V6.66675L11.6667 1.66675Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
