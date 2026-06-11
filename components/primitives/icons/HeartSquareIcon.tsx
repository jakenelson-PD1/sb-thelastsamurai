import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface HeartSquareIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function HeartSquareIcon({ size = 'md', className, ...props }: HeartSquareIconProps) {
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
      <path d="M2.5 6.5C2.5 5.09987 2.5 4.3998 2.77248 3.86503C3.01217 3.39462 3.39462 3.01217 3.86503 2.77248C4.3998 2.5 5.09987 2.5 6.5 2.5H13.5C14.9002 2.5 15.6002 2.5 16.135 2.77248C16.6054 3.01217 16.9878 3.39462 17.2275 3.86503C17.5 4.3998 17.5 5.09987 17.5 6.5V13.5C17.5 14.9002 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9002 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86503 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9002 2.5 13.5V6.5Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M9.99716 7.55655C9.16408 6.58263 7.77489 6.32064 6.73112 7.21247C5.68735 8.10428 5.5404 9.59538 6.36008 10.6501C6.88509 11.3257 8.22965 12.5785 9.1285 13.392C9.42725 13.6622 9.57658 13.7974 9.7555 13.8516C9.90925 13.8982 10.085 13.8982 10.2388 13.8516C10.4177 13.7974 10.5671 13.6622 10.8657 13.392C11.7647 12.5785 13.1092 11.3257 13.6342 10.6501C14.4539 9.59538 14.3249 8.0949 13.2632 7.21247C12.2014 6.33003 10.8302 6.58263 9.99716 7.55655Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
