import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface BookmarkCheckIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function BookmarkCheckIcon({ size = 'md', className, ...props }: BookmarkCheckIconProps) {
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
      <path d="M7.50001 8.75L9.16667 10.4167L12.9167 6.66667M15.8333 17.5V6.5C15.8333 5.09987 15.8333 4.3998 15.5608 3.86503C15.3212 3.39462 14.9388 3.01217 14.4683 2.77248C13.9335 2.5 13.2335 2.5 11.8333 2.5H8.16667C6.76654 2.5 6.06647 2.5 5.5317 2.77248C5.06129 3.01217 4.67884 3.39462 4.43916 3.86503C4.16667 4.3998 4.16667 5.09987 4.16667 6.5V17.5L10 14.1667L15.8333 17.5Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
