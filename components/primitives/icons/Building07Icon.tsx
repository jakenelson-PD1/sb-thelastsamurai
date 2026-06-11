import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Building07IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Building07Icon({ size = 'md', className, ...props }: Building07IconProps) {
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
      <path d="M6.24999 9.16667H3.83332C3.36661 9.16667 3.13326 9.16667 2.955 9.2575C2.7982 9.33742 2.67071 9.46483 2.59081 9.62167C2.49999 9.79992 2.49999 10.0333 2.49999 10.5V17.5M13.75 9.16667H16.1667C16.6334 9.16667 16.8667 9.16667 17.045 9.2575C17.2018 9.33742 17.3292 9.46483 17.4092 9.62167C17.5 9.79992 17.5 10.0333 17.5 10.5V17.5M13.75 17.5V5.16667C13.75 4.23325 13.75 3.76653 13.5683 3.41002C13.4086 3.09641 13.1536 2.84144 12.84 2.68166C12.4835 2.5 12.0167 2.5 11.0833 2.5H8.91666C7.98323 2.5 7.51652 2.5 7.16001 2.68166C6.8464 2.84144 6.59143 3.09641 6.43165 3.41002C6.24999 3.76653 6.24999 4.23325 6.24999 5.16667V17.5M18.3333 17.5H1.66666M9.16666 5.83333H10.8333M9.16666 9.16667H10.8333M9.16666 12.5H10.8333" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
