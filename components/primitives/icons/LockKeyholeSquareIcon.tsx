import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface LockKeyholeSquareIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function LockKeyholeSquareIcon({ size = 'md', className, ...props }: LockKeyholeSquareIconProps) {
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
      <path d="M13.5 17.5C14.9002 17.5 15.6002 17.5 16.135 17.2275C16.6054 16.9878 16.9878 16.6054 17.2275 16.135C17.5 15.6002 17.5 14.9002 17.5 13.5V6.5C17.5 5.09987 17.5 4.39981 17.2275 3.86503C16.9878 3.39462 16.6054 3.01217 16.135 2.77248C15.6002 2.5 14.9002 2.5 13.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86503 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86503C2.5 4.3998 2.5 5.09987 2.5 6.5V13.5C2.5 14.9002 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86503 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5H13.5Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.443 10.9953C11.3842 10.8189 11.3547 10.7307 11.3563 10.6586C11.3579 10.5827 11.3681 10.5429 11.403 10.4756C11.4363 10.4115 11.525 10.3288 11.7027 10.1636C12.1932 9.70709 12.5 9.05592 12.5 8.33301C12.5 6.9523 11.3807 5.83301 10 5.83301C8.61925 5.83301 7.5 6.9523 7.5 8.33301C7.5 9.05592 7.80682 9.70717 8.29734 10.1636C8.475 10.3288 8.56375 10.4115 8.597 10.4756C8.63192 10.5429 8.64208 10.5827 8.64367 10.6586C8.64525 10.7307 8.61583 10.8189 8.557 10.9953L7.79249 13.2888C7.69374 13.5851 7.64437 13.7333 7.67397 13.8512C7.69989 13.9543 7.76432 14.0438 7.85403 14.101C7.95652 14.1663 8.11267 14.1663 8.42492 14.1663H11.5751C11.8873 14.1663 12.0435 14.1663 12.146 14.101C12.2357 14.0438 12.3001 13.9543 12.326 13.8512C12.3557 13.7333 12.3063 13.5851 12.2075 13.2888L11.443 10.9953Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
