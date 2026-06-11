import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CoinsStacked04IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CoinsStacked04Icon({ size = 'md', className, ...props }: CoinsStacked04IconProps) {
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
      <path d="M16.6666 4.1665C16.6666 5.54721 13.6819 6.6665 9.99998 6.6665C6.31808 6.6665 3.33331 5.54721 3.33331 4.1665M16.6666 4.1665C16.6666 2.7858 13.6819 1.6665 9.99998 1.6665C6.31808 1.6665 3.33331 2.7858 3.33331 4.1665M16.6666 4.1665V15.8332C16.6666 17.2139 13.6819 18.3332 9.99998 18.3332C6.31808 18.3332 3.33331 17.2139 3.33331 15.8332V4.1665M16.6666 8.05534C16.6666 9.43609 13.6819 10.5553 9.99998 10.5553C6.31808 10.5553 3.33331 9.43609 3.33331 8.05534M16.6666 11.9415C16.6666 13.3223 13.6819 14.4415 9.99998 14.4415C6.31808 14.4415 3.33331 13.3223 3.33331 11.9415" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
