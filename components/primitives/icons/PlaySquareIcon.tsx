import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface PlaySquareIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function PlaySquareIcon({ size = 'md', className, ...props }: PlaySquareIconProps) {
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
      <path d="M7.91666 7.47132C7.91666 7.07358 7.91666 6.87472 7.99978 6.76369C8.07221 6.66693 8.18309 6.60641 8.30365 6.59779C8.442 6.58792 8.60925 6.69545 8.94383 6.91053L12.8777 9.43946C13.168 9.62604 13.3132 9.71937 13.3632 9.83804C13.4071 9.94171 13.4071 10.0587 13.3632 10.1624C13.3132 10.281 13.168 10.3744 12.8777 10.561L8.94383 13.0899C8.60925 13.305 8.442 13.4125 8.30365 13.4026C8.18309 13.394 8.07221 13.3335 7.99978 13.2367C7.91666 13.1257 7.91666 12.9269 7.91666 12.5291V7.47132Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.5 6.5C2.5 5.09987 2.5 4.3998 2.77248 3.86503C3.01217 3.39462 3.39462 3.01217 3.86503 2.77248C4.3998 2.5 5.09987 2.5 6.5 2.5H13.5C14.9002 2.5 15.6002 2.5 16.135 2.77248C16.6054 3.01217 16.9878 3.39462 17.2275 3.86503C17.5 4.3998 17.5 5.09987 17.5 6.5V13.5C17.5 14.9002 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9002 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86503 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9002 2.5 13.5V6.5Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
