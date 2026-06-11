import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Home03IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Home03Icon({ size = 'md', className, ...props }: Home03IconProps) {
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
      <path d="M7.5 17.5V11.3333C7.5 10.8666 7.50001 10.6332 7.59084 10.455C7.67073 10.2982 7.79821 10.1707 7.95501 10.0908C8.13328 10 8.36667 10 8.83334 10H11.1667C11.6334 10 11.8668 10 12.045 10.0908C12.2018 10.1707 12.3293 10.2982 12.4092 10.455C12.5 10.6332 12.5 10.8666 12.5 11.3333V17.5M1.66667 7.91667L9.2 2.26667C9.48692 2.05151 9.63034 1.94392 9.78784 1.90245C9.92692 1.86585 10.0731 1.86585 10.2122 1.90246C10.3697 1.94392 10.5131 2.05151 10.8 2.26667L18.3333 7.91667M3.33334 6.66667V14.8333C3.33334 15.7667 3.33334 16.2335 3.515 16.59C3.67479 16.9036 3.92976 17.1586 4.24336 17.3183C4.59988 17.5 5.06659 17.5 6 17.5H14C14.9334 17.5 15.4002 17.5 15.7567 17.3183C16.0703 17.1586 16.3253 16.9036 16.485 16.59C16.6667 16.2335 16.6667 15.7667 16.6667 14.8333V6.66667L11.6 2.86667C11.0263 2.43634 10.7393 2.22118 10.4243 2.13824C10.1462 2.06503 9.85384 2.06503 9.57575 2.13824C9.26067 2.22118 8.97375 2.43634 8.4 2.86667L3.33334 6.66667Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
