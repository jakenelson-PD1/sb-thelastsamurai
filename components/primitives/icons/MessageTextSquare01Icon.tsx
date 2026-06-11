import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface MessageTextSquare01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function MessageTextSquare01Icon({ size = 'md', className, ...props }: MessageTextSquare01IconProps) {
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
      <path d="M5.83333 7.08333H10M5.83333 10H12.5M8.06979 15H13.5C14.9002 15 15.6002 15 16.135 14.7275C16.6054 14.4878 16.9878 14.1054 17.2275 13.635C17.5 13.1002 17.5 12.4002 17.5 11V6.5C17.5 5.09987 17.5 4.3998 17.2275 3.86503C16.9878 3.39462 16.6054 3.01217 16.135 2.77248C15.6002 2.5 14.9002 2.5 13.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86503 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86503C2.5 4.3998 2.5 5.09987 2.5 6.5V16.9463C2.5 17.3903 2.5 17.6123 2.59103 17.7263C2.67018 17.8255 2.79023 17.8833 2.91712 17.8831C3.06303 17.8829 3.23639 17.7443 3.58313 17.4668L5.57101 15.8765C5.9771 15.5517 6.18014 15.3893 6.40624 15.2738C6.60683 15.1713 6.82036 15.0963 7.04101 15.0511C7.28973 15 7.54975 15 8.06979 15Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
