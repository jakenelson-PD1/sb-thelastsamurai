import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Image01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Image01Icon({ size = 'md', className, ...props }: Image01IconProps) {
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
      <path d="M13.5 17.5H5.77614C5.27129 17.5 5.01887 17.5 4.90198 17.4002C4.80057 17.3136 4.74674 17.1836 4.75721 17.0507C4.76927 16.8974 4.94776 16.7189 5.30474 16.3619L12.3905 9.27617C12.7205 8.94617 12.8856 8.78108 13.0758 8.71933C13.2432 8.66492 13.4235 8.66492 13.5908 8.71933C13.7811 8.78108 13.9462 8.94617 14.2762 9.27617L17.5 12.5V13.5M13.5 17.5C14.9002 17.5 15.6002 17.5 16.135 17.2275C16.6054 16.9878 16.9878 16.6054 17.2275 16.135C17.5 15.6002 17.5 14.9002 17.5 13.5M13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86503 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9002 2.5 13.5V6.5C2.5 5.09987 2.5 4.3998 2.77248 3.86503C3.01217 3.39462 3.39462 3.01217 3.86503 2.77248C4.3998 2.5 5.09987 2.5 6.5 2.5H13.5C14.9002 2.5 15.6002 2.5 16.135 2.77248C16.6054 3.01217 16.9878 3.39462 17.2275 3.86503C17.5 4.3998 17.5 5.09987 17.5 6.5V13.5M8.75 7.08333C8.75 8.00381 8.00381 8.75 7.08333 8.75C6.16286 8.75 5.41667 8.00381 5.41667 7.08333C5.41667 6.16286 6.16286 5.41667 7.08333 5.41667C8.00381 5.41667 8.75 6.16286 8.75 7.08333Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
