import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Atom02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Atom02Icon({ size = 'md', className, ...props }: Atom02IconProps) {
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
      <path d="M14.2627 12.7987C14.0372 13.0537 13.8005 13.3056 13.5529 13.5531C9.97316 17.1329 5.4882 18.452 3.53558 16.4994C2.19691 15.1607 2.39599 12.6318 3.80705 10.0203M5.74139 7.27121C5.97614 7.00429 6.2231 6.74079 6.48186 6.48203C10.0617 2.90222 14.5466 1.58313 16.4992 3.53575C17.8388 4.87534 17.6385 7.40679 16.2248 10.0202M13.5529 6.48203C17.1327 10.0618 18.4518 14.5467 16.4992 16.4994C14.5466 18.452 10.0617 17.1329 6.48186 13.5531C2.90205 9.97333 1.58296 5.48837 3.53558 3.53575C5.4882 1.58313 9.97316 2.90222 13.5529 6.48203ZM10.8334 10.0002C10.8334 10.4604 10.4602 10.8335 10.0001 10.8335C9.53983 10.8335 9.16675 10.4604 9.16675 10.0002C9.16675 9.53991 9.53983 9.16683 10.0001 9.16683C10.4602 9.16683 10.8334 9.53991 10.8334 10.0002Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
