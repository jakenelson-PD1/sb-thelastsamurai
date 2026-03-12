import { clsx } from 'clsx';

export interface StickerSquareIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function StickerSquareIcon({ size = 20, className, ...props }: StickerSquareIconProps) {
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
      <path d="M10.8333 2.91667V5.16667C10.8333 6.5668 10.8333 7.26687 11.1058 7.80164C11.3455 8.27205 11.7279 8.6545 12.1983 8.89417C12.7332 9.16667 13.4332 9.16667 14.8333 9.16667H17.0833M17.5 10.8235V13.5C17.5 14.9002 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9002 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86503 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9002 2.5 13.5V6.5C2.5 5.09987 2.5 4.3998 2.77248 3.86503C3.01217 3.39462 3.39462 3.01217 3.86503 2.77248C4.3998 2.5 5.09987 2.5 6.5 2.5H9.1765C9.78792 2.5 10.0937 2.5 10.3814 2.56908C10.6365 2.63032 10.8803 2.73133 11.1041 2.8684C11.3563 3.023 11.5725 3.23919 12.0049 3.67157L16.3284 7.99509C16.7608 8.4275 16.977 8.64367 17.1316 8.89592C17.2687 9.11967 17.3697 9.3635 17.4309 9.61858C17.5 9.90633 17.5 10.2121 17.5 10.8235Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
