import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface DistributeSpacingHorizontalIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function DistributeSpacingHorizontalIcon({ size = 'md', className, ...props }: DistributeSpacingHorizontalIconProps) {
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
      <path d="M17.5 17.5V2.5M2.5 17.5V2.5M7.5 6.66667V13.3333C7.5 14.1099 7.5 14.4982 7.62687 14.8045C7.79602 15.2128 8.12048 15.5373 8.52883 15.7065C8.83517 15.8333 9.22342 15.8333 10 15.8333C10.7766 15.8333 11.1648 15.8333 11.4712 15.7065C11.8795 15.5373 12.204 15.2128 12.3732 14.8045C12.5 14.4982 12.5 14.1099 12.5 13.3333V6.66667C12.5 5.8901 12.5 5.50182 12.3732 5.19553C12.204 4.78715 11.8795 4.46269 11.4712 4.29353C11.1648 4.16667 10.7766 4.16667 10 4.16667C9.22342 4.16667 8.83517 4.16667 8.52883 4.29353C8.12048 4.46269 7.79602 4.78715 7.62687 5.19553C7.5 5.50182 7.5 5.8901 7.5 6.66667Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
