import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface FeatherIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function FeatherIcon({ size = 'md', className, ...props }: FeatherIconProps) {
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
      <path d="M13.3334 6.66664L1.66669 18.3333M15 12.5H7.50002M5.50002 15.8333H11.1144C11.3182 15.8333 11.4201 15.8333 11.516 15.8103C11.6011 15.7898 11.6824 15.7562 11.7569 15.7105C11.841 15.659 11.9131 15.5869 12.0572 15.4428L16.25 11.25C16.4492 11.0508 16.5487 10.9513 16.6289 10.8631C18.3624 8.95609 18.3624 6.04388 16.6289 4.13684C16.5487 4.04868 16.4492 3.94911 16.25 3.74998C16.0509 3.55084 15.9514 3.45128 15.8632 3.37114C13.9561 1.63768 11.0439 1.63768 9.13685 3.37114C9.04869 3.45128 8.94919 3.55084 8.75002 3.74998L4.55721 7.94279C4.41309 8.08691 4.34102 8.15898 4.28949 8.24308C4.2438 8.31764 4.21013 8.39892 4.18971 8.48392C4.16669 8.57984 4.16669 8.68175 4.16669 8.88559V14.5C4.16669 14.9667 4.16669 15.2 4.25751 15.3783C4.33741 15.5351 4.4649 15.6626 4.6217 15.7425C4.79995 15.8333 5.03331 15.8333 5.50002 15.8333Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
