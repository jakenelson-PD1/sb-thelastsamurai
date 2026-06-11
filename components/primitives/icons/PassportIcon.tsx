import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface PassportIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function PassportIcon({ size = 'md', className, ...props }: PassportIconProps) {
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
      <path d="M8.33334 13.3337H11.6667M7.33334 18.3337H12.6667C14.0668 18.3337 14.7668 18.3337 15.3017 18.0612C15.7721 17.8215 16.1545 17.4391 16.3942 16.9687C16.6667 16.4338 16.6667 15.7338 16.6667 14.3337V5.66699C16.6667 4.26686 16.6667 3.56679 16.3942 3.03202C16.1545 2.56161 15.7721 2.17916 15.3017 1.93948C14.7668 1.66699 14.0668 1.66699 12.6667 1.66699H7.33334C5.93321 1.66699 5.23314 1.66699 4.69837 1.93948C4.22796 2.17916 3.84551 2.56161 3.60583 3.03202C3.33334 3.56679 3.33334 4.26686 3.33334 5.66699V14.3337C3.33334 15.7338 3.33334 16.4338 3.60583 16.9687C3.84551 17.4391 4.22796 17.8215 4.69837 18.0612C5.23314 18.3337 5.93321 18.3337 7.33334 18.3337ZM12.5 7.50033C12.5 8.88108 11.3808 10.0003 10 10.0003C8.61926 10.0003 7.50001 8.88108 7.50001 7.50033C7.50001 6.11962 8.61926 5.00033 10 5.00033C11.3808 5.00033 12.5 6.11962 12.5 7.50033Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
