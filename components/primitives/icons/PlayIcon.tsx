import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface PlayIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function PlayIcon({ size = 'md', className, ...props }: PlayIconProps) {
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
      <path d="M4.16669 4.15809C4.16669 3.34879 4.16669 2.94414 4.33543 2.72108C4.48243 2.52675 4.70712 2.4065 4.95035 2.39198C5.22955 2.3753 5.56624 2.59977 6.23962 3.04869L15.0026 8.89066C15.559 9.26158 15.8372 9.44708 15.9341 9.68083C16.0189 9.88525 16.0189 10.1149 15.9341 10.3193C15.8372 10.5531 15.559 10.7385 15.0026 11.1095L6.23962 16.9514C5.56624 17.4003 5.22955 17.6248 4.95035 17.6082C4.70712 17.5937 4.48243 17.4734 4.33543 17.2791C4.16669 17.056 4.16669 16.6513 4.16669 15.8421V4.15809Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
