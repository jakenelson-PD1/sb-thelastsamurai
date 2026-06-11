import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Bell03IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Bell03Icon({ size = 'md', className, ...props }: Bell03IconProps) {
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
      <path d="M12.4997 15.8332C12.4997 17.2139 11.3805 18.3332 9.99975 18.3332C8.61908 18.3332 7.49976 17.2139 7.49976 15.8332M11.4968 5.19864C11.8597 4.8237 12.0831 4.31285 12.0831 3.74984C12.0831 2.59925 11.1503 1.6665 9.99975 1.6665C8.84916 1.6665 7.91643 2.59925 7.91643 3.74984C7.91643 4.31285 8.13976 4.8237 8.50266 5.19864M14.9997 9.33317C14.9997 8.1839 14.473 7.0817 13.5353 6.26904C12.5976 5.45639 11.3258 4.99984 9.99975 4.99984C8.67366 4.99984 7.40191 5.45639 6.46423 6.26904C5.52655 7.0817 4.99976 8.1839 4.99976 9.33317C4.99976 11.2347 4.5282 12.6253 3.93981 13.6204C3.26921 14.7545 2.93391 15.3216 2.94715 15.457C2.9623 15.612 2.9902 15.6609 3.11588 15.7528C3.22574 15.8332 3.77769 15.8332 4.88159 15.8332H15.1179C16.2218 15.8332 16.7738 15.8332 16.8837 15.7528C17.0093 15.6609 17.0372 15.612 17.0524 15.457C17.0656 15.3216 16.7303 14.7545 16.0597 13.6204C15.4713 12.6253 14.9997 11.2347 14.9997 9.33317Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
