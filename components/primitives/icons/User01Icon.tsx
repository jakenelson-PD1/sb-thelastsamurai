import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface User01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function User01Icon({ size = 'md', className, ...props }: User01IconProps) {
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
      <path d="M16.6666 17.5C16.6666 16.337 16.6666 15.7556 16.5231 15.2824C16.2 14.2171 15.3662 13.3833 14.3009 13.0602C13.8277 12.9167 13.2463 12.9167 12.0833 12.9167H7.91665C6.75368 12.9167 6.17219 12.9167 5.69903 13.0602C4.63369 13.3833 3.80001 14.2171 3.47685 15.2824C3.33331 15.7556 3.33331 16.337 3.33331 17.5M13.75 6.25C13.75 8.32107 12.0711 10 9.99998 10C7.92891 10 6.24998 8.32107 6.24998 6.25C6.24998 4.17893 7.92891 2.5 9.99998 2.5C12.0711 2.5 13.75 4.17893 13.75 6.25Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
