import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CloudBlank01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CloudBlank01Icon({ size = 'md', className, ...props }: CloudBlank01IconProps) {
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
      <path d="M5.41669 15.8333C3.34562 15.8333 1.66669 14.1544 1.66669 12.0833C1.66669 10.1303 3.15961 8.52607 5.06647 8.34949C5.45653 5.97676 7.51689 4.16666 10 4.16666C12.4832 4.16666 14.5435 5.97676 14.9336 8.34949C16.8404 8.52607 18.3334 10.1303 18.3334 12.0833C18.3334 14.1544 16.6544 15.8333 14.5834 15.8333C10.9252 15.8333 8.61944 15.8333 5.41669 15.8333Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
