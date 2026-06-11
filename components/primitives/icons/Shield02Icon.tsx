import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Shield02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Shield02Icon({ size = 'md', className, ...props }: Shield02IconProps) {
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
      <path d="M9.41834 18.012C9.60284 18.1197 9.69509 18.1735 9.82526 18.2014C9.92634 18.2231 10.0737 18.2231 10.1748 18.2014C10.3049 18.1735 10.3972 18.1197 10.5817 18.012C12.205 17.065 16.6667 14.09 16.6667 9.99968V6.83298C16.6667 5.93807 16.6667 5.49062 16.5288 5.17298C16.3885 4.85015 16.2488 4.67841 15.9613 4.4754C15.6784 4.27567 15.1238 4.16033 14.0148 3.92967C12.7923 3.67543 11.8536 3.21634 10.9953 2.55242C10.5838 2.23403 10.378 2.07485 10.2169 2.03143C10.047 1.98562 9.95301 1.98562 9.78309 2.03143C9.62201 2.07485 9.41626 2.23404 9.00468 2.55242C8.14644 3.21634 7.20768 3.67543 5.98526 3.92967C4.87615 4.16033 4.3216 4.27567 4.03872 4.4754C3.75119 4.67841 3.6115 4.85015 3.47129 5.17298C3.33334 5.49062 3.33334 5.93807 3.33334 6.83298V9.99968C3.33334 14.09 7.79498 17.065 9.41834 18.012Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
