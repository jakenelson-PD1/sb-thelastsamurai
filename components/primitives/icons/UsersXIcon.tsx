import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface UsersXIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function UsersXIcon({ size = 'md', className, ...props }: UsersXIconProps) {
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
      <path d="M13.75 13.3333L17.9167 17.5M17.9167 13.3333L13.75 17.5M12.9167 2.7423C14.1382 3.23679 15 4.43442 15 5.83333C15 7.23224 14.1382 8.42992 12.9167 8.92433M10 12.5H6.66666C5.11352 12.5 4.33696 12.5 3.72439 12.7537C2.90762 13.0921 2.25871 13.741 1.9204 14.5577C1.66666 15.1703 1.66666 15.9468 1.66666 17.5M11.25 5.83333C11.25 7.67428 9.75758 9.16667 7.91666 9.16667C6.07571 9.16667 4.58333 7.67428 4.58333 5.83333C4.58333 3.99238 6.07571 2.5 7.91666 2.5C9.75758 2.5 11.25 3.99238 11.25 5.83333Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
