import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface BellOff03IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function BellOff03Icon({ size = 'md', className, ...props }: BellOff03IconProps) {
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
      <path d="M12.5 15.8332C12.5 17.2139 11.3807 18.3332 10 18.3332C8.61925 18.3332 7.5 17.2139 7.5 15.8332M6.1479 6.5705C5.40907 7.34422 5 8.32042 5 9.33317C5 11.2347 4.52844 12.6253 3.94005 13.6204C3.26945 14.7545 2.93415 15.3216 2.94738 15.457C2.96253 15.612 2.99043 15.6609 3.11612 15.7528C3.22598 15.8332 3.77793 15.8332 4.88182 15.8332H16.5667M10 4.99984C9.75592 4.99984 9.51367 5.0153 9.275 5.04561C8.95708 5.086 8.79808 5.10619 8.6385 5.06281C8.52367 5.03159 8.3505 4.9309 8.26649 4.84654C8.14985 4.72935 8.12435 4.66753 8.07334 4.5439C7.97237 4.29918 7.91667 4.03101 7.91667 3.74984C7.91667 2.59925 8.84942 1.6665 10 1.6665C11.1506 1.6665 12.0833 2.59925 12.0833 3.74984C12.0833 4.31285 11.86 4.8237 11.4971 5.19864C11.0169 5.06804 10.5125 4.99984 10 4.99984ZM10 4.99984C11.3261 4.99984 12.5978 5.45639 13.5355 6.26904C14.4732 7.0817 15 8.1839 15 9.33317C15 9.61217 15.0076 9.88009 15.022 10.1375M17.5 16.6665L2.5 3.33317" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
