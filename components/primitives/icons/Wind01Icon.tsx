import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Wind01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Wind01Icon({ size = 'md', className, ...props }: Wind01IconProps) {
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
      <path d="M17.5 15.0003C17.5 15.0003 16.508 14.6091 15.8333 14.4187C11.5664 13.2148 8.43358 16.7858 4.16667 15.5819C3.49201 15.3916 2.5 15.0003 2.5 15.0003M17.5 10.0003C17.5 10.0003 16.508 9.60908 15.8333 9.41874C11.5664 8.21482 8.43358 11.7858 4.16667 10.5819C3.49201 10.3916 2.5 10.0003 2.5 10.0003M17.5 5.00033C17.5 5.00033 16.508 4.60906 15.8333 4.41871C11.5664 3.21482 8.43358 6.78583 4.16667 5.58194C3.49201 5.39159 2.5 5.00033 2.5 5.00033" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
