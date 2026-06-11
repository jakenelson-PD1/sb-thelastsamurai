import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CloudSnowing01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CloudSnowing01Icon({ size = 'md', className, ...props }: CloudSnowing01IconProps) {
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
      <path d="M16.6667 12.7022C17.6717 12.0295 18.3334 10.8838 18.3334 9.58366C18.3334 7.63068 16.8404 6.0264 14.9336 5.8498C14.5435 3.4771 12.4832 1.66699 10 1.66699C7.51689 1.66699 5.45653 3.4771 5.06647 5.8498C3.15961 6.0264 1.66669 7.63068 1.66669 9.58366C1.66669 10.8838 2.32836 12.0295 3.33335 12.7022M6.66669 12.5003H6.67502M6.66669 15.8337H6.67502M10 14.167H10.0084M10 17.5003H10.0084M13.3334 12.5003H13.3417M13.3334 15.8337H13.3417" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
