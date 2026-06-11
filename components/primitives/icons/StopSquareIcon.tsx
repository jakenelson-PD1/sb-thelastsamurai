import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface StopSquareIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function StopSquareIcon({ size = 'md', className, ...props }: StopSquareIconProps) {
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
<path d="M6.66666 7.99984C6.66666 7.53313 6.66666 7.29977 6.75749 7.12151C6.83739 6.96471 6.96487 6.83723 7.12167 6.75733C7.29993 6.6665 7.53329 6.6665 8 6.6665H12C12.4667 6.6665 12.7001 6.6665 12.8783 6.75733C13.0352 6.83723 13.1626 6.96471 13.2425 7.12151C13.3333 7.29977 13.3333 7.53313 13.3333 7.99984V11.9998C13.3333 12.4666 13.3333 12.6999 13.2425 12.8782C13.1626 13.035 13.0352 13.1624 12.8783 13.2423C12.7001 13.3332 12.4667 13.3332 12 13.3332H8C7.53329 13.3332 7.29993 13.3332 7.12167 13.2423C6.96487 13.1624 6.83739 13.035 6.75749 12.8782C6.66666 12.6999 6.66666 12.4666 6.66666 11.9998V7.99984Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
