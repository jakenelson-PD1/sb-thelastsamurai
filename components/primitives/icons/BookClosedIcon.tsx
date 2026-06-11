import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface BookClosedIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function BookClosedIcon({ size = 'md', className, ...props }: BookClosedIconProps) {
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
      <path d="M16.6667 15.8337V13.3337H5.83334C4.45264 13.3337 3.33334 14.4529 3.33334 15.8337M7.33334 18.3337H14C14.9334 18.3337 15.4002 18.3337 15.7567 18.152C16.0703 17.9922 16.3253 17.7372 16.485 17.4237C16.6667 17.0672 16.6667 16.6004 16.6667 15.667V4.33366C16.6667 3.40023 16.6667 2.93353 16.485 2.57701C16.3253 2.2634 16.0703 2.00843 15.7567 1.84865C15.4002 1.66699 14.9334 1.66699 14 1.66699H7.33334C5.93321 1.66699 5.23314 1.66699 4.69837 1.93948C4.22796 2.17916 3.84551 2.56161 3.60583 3.03202C3.33334 3.56679 3.33334 4.26686 3.33334 5.66699V14.3337C3.33334 15.7338 3.33334 16.4338 3.60583 16.9687C3.84551 17.4391 4.22796 17.8215 4.69837 18.0612C5.23314 18.3337 5.93321 18.3337 7.33334 18.3337Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
