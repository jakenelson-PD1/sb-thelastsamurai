import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Italic01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Italic01Icon({ size = 'md', className, ...props }: Italic01IconProps) {
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
      <path d="M15.8334 3.33325H8.33335M11.6667 16.6666H4.16669M12.5 3.33325L7.50002 16.6666" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
