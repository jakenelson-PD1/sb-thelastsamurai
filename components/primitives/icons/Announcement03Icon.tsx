import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Announcement03IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Announcement03Icon({ size = 'md', className, ...props }: Announcement03IconProps) {
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
      <path d="M15.4167 13.3333C17.0275 13.3333 18.3334 10.9082 18.3334 7.91667C18.3334 4.92512 17.0275 2.5 15.4167 2.5M15.4167 13.3333C13.8059 13.3333 12.5 10.9082 12.5 7.91667C12.5 4.92512 13.8059 2.5 15.4167 2.5M15.4167 13.3333L4.5363 11.3551C3.7634 11.2146 3.37695 11.1442 3.06446 10.9908C2.42875 10.6785 1.95532 10.1112 1.7618 9.42992C1.66669 9.095 1.66669 8.70225 1.66669 7.91667C1.66669 7.13108 1.66669 6.73829 1.7618 6.40339C1.95532 5.72208 2.42875 5.15481 3.06446 4.84254C3.37695 4.68904 3.7634 4.61878 4.5363 4.47825L15.4167 2.5M4.16669 11.6667L4.4949 16.2617C4.52607 16.698 4.54165 16.9162 4.63658 17.0816C4.72016 17.2272 4.84576 17.3441 4.99693 17.4171C5.16862 17.5 5.38736 17.5 5.82485 17.5H7.31019C7.8103 17.5 8.06037 17.5 8.24545 17.4003C8.4081 17.3126 8.53694 17.1734 8.61185 17.0046C8.6971 16.8124 8.67794 16.5631 8.6396 16.0644L8.33335 12.0833" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
