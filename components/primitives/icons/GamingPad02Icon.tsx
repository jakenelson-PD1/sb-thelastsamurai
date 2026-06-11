import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface GamingPad02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function GamingPad02Icon({ size = 'md', className, ...props }: GamingPad02IconProps) {
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
      <path d="M5.00002 10H8.33335M6.66669 8.33333V11.6667M12.5 10.8333H12.5084M15 9.16667H15.0084M4.33335 15H15.6667C16.6001 15 17.0669 15 17.4234 14.8183C17.7369 14.6586 17.9919 14.4036 18.1517 14.09C18.3334 13.7335 18.3334 13.2667 18.3334 12.3333V7.66667C18.3334 6.73325 18.3334 6.26653 18.1517 5.91002C17.9919 5.59641 17.7369 5.34144 17.4234 5.18166C17.0669 5 16.6001 5 15.6667 5H4.33335C3.39993 5 2.93322 5 2.5767 5.18166C2.2631 5.34144 2.00813 5.59641 1.84835 5.91002C1.66669 6.26653 1.66669 6.73324 1.66669 7.66667V12.3333C1.66669 13.2667 1.66669 13.7335 1.84835 14.09C2.00813 14.4036 2.2631 14.6586 2.5767 14.8183C2.93322 15 3.39994 15 4.33335 15Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
