import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Bold02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Bold02Icon({ size = 'md', className, ...props }: Bold02IconProps) {
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
      <path d="M5.00001 3.33325V16.6666M7.91668 3.33325H12.9167C14.7576 3.33325 16.25 4.82564 16.25 6.66659C16.25 8.5075 14.7576 9.99992 12.9167 9.99992H7.91668H13.75C15.5909 9.99992 17.0833 11.4923 17.0833 13.3333C17.0833 15.1742 15.5909 16.6666 13.75 16.6666H7.91668M7.91668 3.33325V16.6666M7.91668 3.33325H3.33334M7.91668 16.6666H3.33334" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
