import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Type01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Type01Icon({ size = 'md', className, ...props }: Type01IconProps) {
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
      <path d="M3.33331 5.83325C3.33331 5.05669 3.33331 4.6684 3.46018 4.36211C3.62934 3.95374 3.9538 3.62928 4.36217 3.46012C4.66846 3.33325 5.05675 3.33325 5.83331 3.33325H14.1666C14.9432 3.33325 15.3315 3.33325 15.6378 3.46012C16.0461 3.62928 16.3706 3.95374 16.5398 4.36211C16.6666 4.6684 16.6666 5.05669 16.6666 5.83325M7.49998 16.6666H12.5M9.99998 3.33325V16.6666" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
