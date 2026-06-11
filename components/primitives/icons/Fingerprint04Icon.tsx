import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Fingerprint04IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Fingerprint04Icon({ size = 'md', className, ...props }: Fingerprint04IconProps) {
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
      <path d="M4.83907 15.442C4.85383 15.4171 4.86894 15.3924 4.88442 15.3677C6.01317 13.5734 6.66659 11.4515 6.66659 9.16667C6.66659 7.32572 8.15898 5.83333 9.99992 5.83333C11.8408 5.83333 13.3333 7.32572 13.3333 9.16667C13.3333 10.0142 13.2756 10.8488 13.1638 11.6667M11.3993 17.3697C11.9091 16.3522 12.327 15.2807 12.6423 14.1667M15.8414 15.11C16.3789 13.2214 16.6667 11.2277 16.6667 9.16667C16.6667 5.48477 13.6819 2.5 10 2.5C8.78575 2.5 7.64724 2.82465 6.66667 3.39188M2.5 12.8034C3.03388 11.7045 3.33333 10.4705 3.33333 9.16667C3.33333 7.95237 3.65798 6.81391 4.22522 5.83333M9.99992 9.16667C9.99992 12.0977 9.15925 14.8323 7.70589 17.1427" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
