import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface StatusOutstandingIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function StatusOutstandingIcon({ size = 'lg', className, ...props }: StatusOutstandingIconProps) {
  const px = resolveIconSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('inline-block', className)}
      aria-hidden={!props['aria-label']}
      {...props}
    >
      <path d="M10.9292 13.3281C10.0827 14.3675 8.92545 14.9569 7.71462 14.9569C6.50378 14.9569 5.37866 14.3675 4.5 13.3281" stroke="currentColor" strokeWidth="2.18436" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.5 10.6707C18.6535 9.6313 17.4963 9.04196 16.2854 9.04196C15.0746 9.04196 13.9495 9.6313 13.0708 10.6707L10.9277 13.3281" stroke="currentColor" strokeWidth="2.18436" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
