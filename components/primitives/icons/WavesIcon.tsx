import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface WavesIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function WavesIcon({ size = 'md', className, ...props }: WavesIconProps) {
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
      <path d="M1.66666 5.00033C2.16666 5.41699 2.66666 5.83366 3.75 5.83366C5.83333 5.83366 5.83333 4.16699 7.91666 4.16699C9 4.16699 9.5 4.58366 10 5.00033C10.5 5.41699 11 5.83366 12.0833 5.83366C14.1667 5.83366 14.1667 4.16699 16.25 4.16699C17.3333 4.16699 17.8333 4.58366 18.3333 5.00033M1.66666 15.0003C2.16666 15.417 2.66666 15.8337 3.75 15.8337C5.83333 15.8337 5.83333 14.167 7.91666 14.167C9 14.167 9.5 14.5837 10 15.0003C10.5 15.417 11 15.8337 12.0833 15.8337C14.1667 15.8337 14.1667 14.167 16.25 14.167C17.3333 14.167 17.8333 14.5837 18.3333 15.0003M1.66666 10.0003C2.16666 10.417 2.66666 10.8337 3.75 10.8337C5.83333 10.8337 5.83333 9.16699 7.91666 9.16699C9 9.16699 9.5 9.58366 10 10.0003C10.5 10.417 11 10.8337 12.0833 10.8337C14.1667 10.8337 14.1667 9.16699 16.25 9.16699C17.3333 9.16699 17.8333 9.58366 18.3333 10.0003" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
