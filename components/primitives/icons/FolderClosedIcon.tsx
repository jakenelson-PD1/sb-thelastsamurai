import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface FolderClosedIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function FolderClosedIcon({ size = 'md', className, ...props }: FolderClosedIconProps) {
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
      <path d="M10.8333 5.83333L9.90374 3.9741C9.63616 3.439 9.50241 3.17144 9.30282 2.97597C9.12632 2.80311 8.91357 2.67164 8.68007 2.59109C8.41599 2.5 8.11683 2.5 7.51856 2.5H4.33332C3.39991 2.5 2.93319 2.5 2.57667 2.68166C2.26306 2.84144 2.0081 3.09641 1.84831 3.41002C1.66666 3.76653 1.66666 4.23325 1.66666 5.16667V5.83333M1.66666 5.83333H14.3333C15.7335 5.83333 16.4335 5.83333 16.9683 6.10582C17.4387 6.3455 17.8212 6.72795 18.0608 7.19836C18.3333 7.73313 18.3333 8.43317 18.3333 9.83333V13.5C18.3333 14.9002 18.3333 15.6002 18.0608 16.135C17.8212 16.6054 17.4387 16.9878 16.9683 17.2275C16.4335 17.5 15.7335 17.5 14.3333 17.5H5.66666C4.26652 17.5 3.56646 17.5 3.03168 17.2275C2.56127 16.9878 2.17882 16.6054 1.93914 16.135C1.66666 15.6002 1.66666 14.9002 1.66666 13.5V5.83333ZM7.91666 9.58333L12.0833 13.75M13.3333 11.6667C13.3333 13.5076 11.8409 15 9.99999 15C8.15904 15 6.66666 13.5076 6.66666 11.6667C6.66666 9.82575 8.15904 8.33333 9.99999 8.33333C11.8409 8.33333 13.3333 9.82575 13.3333 11.6667Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
