import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Share02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Share02Icon({ size = 'md', className, ...props }: Share02IconProps) {
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
      <path d="M5.83333 9.16667C5.05836 9.16667 4.67087 9.16667 4.35295 9.25183C3.49022 9.483 2.81635 10.1569 2.58518 11.0196C2.5 11.3375 2.5 11.725 2.5 12.5V13.5C2.5 14.9002 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86503 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5H13.5C14.9002 17.5 15.6002 17.5 16.135 17.2275C16.6054 16.9878 16.9878 16.6054 17.2275 16.135C17.5 15.6002 17.5 14.9002 17.5 13.5V12.5C17.5 11.725 17.5 11.3375 17.4148 11.0196C17.1837 10.1569 16.5098 9.483 15.6471 9.25183C15.3292 9.16667 14.9417 9.16667 14.1667 9.16667M13.3333 5.83333L10 2.5M10 2.5L6.66667 5.83333M10 2.5V12.5" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
