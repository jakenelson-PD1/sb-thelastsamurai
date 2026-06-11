import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Underline02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Underline02Icon({ size = 'md', className, ...props }: Underline02IconProps) {
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
      <path d="M15.8333 3.33325V8.33325C15.8333 11.5549 13.2217 14.1666 10 14.1666C6.77834 14.1666 4.16667 11.5549 4.16667 8.33325V3.33325M7.08333 3.33325V8.33325C7.08333 11.0181 8.89717 13.2793 11.3662 13.9583M3.33333 17.4999H16.6667M2.5 3.33325H8.75M14.1667 3.33325H17.5" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
