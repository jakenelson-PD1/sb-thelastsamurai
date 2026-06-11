import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Underline01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Underline01Icon({ size = 'md', className, ...props }: Underline01IconProps) {
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
      <path d="M15 3.33325V9.16659C15 11.928 12.7614 14.1666 10 14.1666C7.23859 14.1666 5.00001 11.928 5.00001 9.16659V3.33325M3.33334 17.4999H16.6667" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
