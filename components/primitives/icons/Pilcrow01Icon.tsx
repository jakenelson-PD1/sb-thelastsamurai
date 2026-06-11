import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Pilcrow01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Pilcrow01Icon({ size = 'md', className, ...props }: Pilcrow01IconProps) {
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
      <path d="M13.3333 3.33325V16.6666M13.3333 3.33325H15M13.3333 3.33325H8.75C6.67893 3.33325 5 5.01219 5 7.08325C5 9.15434 6.67893 10.8333 8.75 10.8333H13.3333V3.33325ZM11.6667 16.6666H15" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
