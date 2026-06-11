import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Repeat01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Repeat01Icon({ size = 'md', className, ...props }: Repeat01IconProps) {
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
      <path d="M14.1667 1.6665L17.5 4.99984M17.5 4.99984L14.1667 8.33317M17.5 4.99984H6.5C5.09987 4.99984 4.3998 4.99984 3.86503 5.27232C3.39462 5.512 3.01217 5.89445 2.77248 6.36486C2.5 6.89964 2.5 7.5997 2.5 8.99984V9.1665M2.5 14.9998H13.5C14.9002 14.9998 15.6002 14.9998 16.135 14.7273C16.6054 14.4877 16.9878 14.1053 17.2275 13.6348C17.5 13.1 17.5 12.4 17.5 10.9998V10.8332M2.5 14.9998L5.83333 18.3332M2.5 14.9998L5.83333 11.6665" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
