import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface SubscriptIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function SubscriptIcon({ size = 'md', className, ...props }: SubscriptIconProps) {
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
      <path d="M2.5 4.16675L10.8333 12.5001M10.8333 4.16675L2.5 12.5001M17.5 15.8335H14.1667C14.1667 14.5835 14.5333 14.1668 15.4167 13.7502C16.3 13.3335 17.5 12.7752 17.5 11.6668C17.5 11.2752 17.3583 10.8918 17.1 10.5918C16.8333 10.2897 16.4708 10.0885 16.0733 10.0217C15.6758 9.955 15.2675 10.0268 14.9167 10.2252C14.5667 10.4252 14.3 10.7418 14.1667 11.1168" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
