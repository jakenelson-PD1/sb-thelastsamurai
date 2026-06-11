import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface MessageSquare01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function MessageSquare01Icon({ size = 'md', className, ...props }: MessageSquare01IconProps) {
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
      <path d="M2.5 6.5C2.5 5.09987 2.5 4.3998 2.77248 3.86503C3.01217 3.39462 3.39462 3.01217 3.86503 2.77248C4.3998 2.5 5.09987 2.5 6.5 2.5H13.5C14.9002 2.5 15.6002 2.5 16.135 2.77248C16.6054 3.01217 16.9878 3.39462 17.2275 3.86503C17.5 4.3998 17.5 5.09987 17.5 6.5V11C17.5 12.4002 17.5 13.1002 17.2275 13.635C16.9878 14.1054 16.6054 14.4878 16.135 14.7275C15.6002 15 14.9002 15 13.5 15H8.06979C7.54975 15 7.28973 15 7.04101 15.0511C6.82036 15.0963 6.60683 15.1713 6.40624 15.2738C6.18014 15.3893 5.9771 15.5517 5.57101 15.8765L3.58313 17.4668C3.23639 17.7443 3.06303 17.8829 2.91712 17.8831C2.79023 17.8833 2.67018 17.8255 2.59103 17.7263C2.5 17.6123 2.5 17.3903 2.5 16.9463V6.5Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
