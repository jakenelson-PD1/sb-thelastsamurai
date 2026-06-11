import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Luggage01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Luggage01Icon({ size = 'md', className, ...props }: Luggage01IconProps) {
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
      <path d="M6.66668 18.3337V16.667M7.91668 12.5003V5.83366M13.3333 18.3337V16.667M12.0833 12.5003V5.83366M7.33334 16.667H12.6667C14.0668 16.667 14.7668 16.667 15.3017 16.3945C15.7721 16.1548 16.1545 15.7724 16.3942 15.302C16.6667 14.7672 16.6667 14.0672 16.6667 12.667V5.66699C16.6667 4.26686 16.6667 3.56679 16.3942 3.03202C16.1545 2.56161 15.7721 2.17916 15.3017 1.93948C14.7668 1.66699 14.0668 1.66699 12.6667 1.66699H7.33334C5.93321 1.66699 5.23314 1.66699 4.69837 1.93948C4.22796 2.17916 3.84551 2.56161 3.60583 3.03202C3.33334 3.56679 3.33334 4.26686 3.33334 5.66699V12.667C3.33334 14.0672 3.33334 14.7672 3.60583 15.302C3.84551 15.7724 4.22796 16.1548 4.69837 16.3945C5.23314 16.667 5.93321 16.667 7.33334 16.667Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
