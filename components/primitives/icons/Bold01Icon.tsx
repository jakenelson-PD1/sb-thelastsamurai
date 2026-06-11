import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Bold01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Bold01Icon({ size = 'md', className, ...props }: Bold01IconProps) {
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
      <path d="M5 9.99992H11.6667C13.5076 9.99992 15 8.5075 15 6.66659C15 4.82564 13.5076 3.33325 11.6667 3.33325H5V9.99992ZM5 9.99992H12.5C14.3409 9.99992 15.8333 11.4923 15.8333 13.3333C15.8333 15.1742 14.3409 16.6666 12.5 16.6666H5V9.99992Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
