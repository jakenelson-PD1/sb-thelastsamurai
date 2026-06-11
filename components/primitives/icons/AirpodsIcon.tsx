import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface AirpodsIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function AirpodsIcon({ size = 'md', className, ...props }: AirpodsIconProps) {
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
      <path d="M1.66667 6.354C1.66667 8.25248 3.2057 9.7915 5.10417 9.7915C5.35908 9.7915 5.48653 9.7915 5.55257 9.81425C5.69074 9.86192 5.76288 9.93409 5.81056 10.0723C5.83334 10.1383 5.83334 10.2418 5.83334 10.4487V15.729C5.83334 16.4769 6.43962 17.0832 7.1875 17.0832C7.93539 17.0832 8.54167 16.4769 8.54167 15.729V6.354C8.54167 4.45553 7.00265 2.9165 5.10417 2.9165C3.2057 2.9165 1.66667 4.45553 1.66667 6.354Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.3333 6.354C18.3333 8.25248 16.7943 9.7915 14.8958 9.7915C14.6409 9.7915 14.5135 9.7915 14.4474 9.81425C14.3093 9.86192 14.2371 9.93409 14.1894 10.0723C14.1667 10.1383 14.1667 10.2418 14.1667 10.4487V15.729C14.1667 16.4769 13.5604 17.0832 12.8125 17.0832C12.0646 17.0832 11.4583 16.4769 11.4583 15.729V6.354C11.4583 4.45553 12.9973 2.9165 14.8958 2.9165C16.7943 2.9165 18.3333 4.45553 18.3333 6.354Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
