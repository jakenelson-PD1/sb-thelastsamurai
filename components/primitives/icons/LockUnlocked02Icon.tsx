import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface LockUnlocked02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function LockUnlocked02Icon({ size = 'md', className, ...props }: LockUnlocked02IconProps) {
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
      <path d="M5.83333 9.16667V6.66667C5.83333 4.36548 7.69882 2.5 10 2.5C12.0158 2.5 13.6972 3.93147 14.0833 5.83333M6.5 17.5H13.5C14.9002 17.5 15.6002 17.5 16.135 17.2275C16.6054 16.9878 16.9878 16.6054 17.2275 16.135C17.5 15.6002 17.5 14.9002 17.5 13.5V13.1667C17.5 11.7665 17.5 11.0665 17.2275 10.5317C16.9878 10.0612 16.6054 9.67883 16.135 9.43917C15.6002 9.16667 14.9002 9.16667 13.5 9.16667H6.5C5.09987 9.16667 4.3998 9.16667 3.86503 9.43917C3.39462 9.67883 3.01217 10.0612 2.77248 10.5317C2.5 11.0665 2.5 11.7665 2.5 13.1667V13.5C2.5 14.9002 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86503 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
