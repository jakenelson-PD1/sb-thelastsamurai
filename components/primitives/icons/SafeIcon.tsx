import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface SafeIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function SafeIcon({ size = 'md', className, ...props }: SafeIconProps) {
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
      <path d="M5 17.5H7.5M12.5 17.5H15M14.5833 5.41667V12.0833M2.5 5.16667V12.3333C2.5 13.2667 2.5 13.7335 2.68166 14.09C2.84144 14.4036 3.09641 14.6586 3.41002 14.8183C3.76653 15 4.23324 15 5.16667 15H14.8333C15.7667 15 16.2335 15 16.59 14.8183C16.9036 14.6586 17.1586 14.4036 17.3183 14.09C17.5 13.7335 17.5 13.2667 17.5 12.3333V5.16667C17.5 4.23325 17.5 3.76653 17.3183 3.41002C17.1586 3.09642 16.9036 2.84145 16.59 2.68166C16.2335 2.5 15.7667 2.5 14.8333 2.5H5.16667C4.23325 2.5 3.76653 2.5 3.41002 2.68166C3.09642 2.84144 2.84144 3.09641 2.68166 3.41002C2.5 3.76653 2.5 4.23324 2.5 5.16667ZM9.58333 8.75C9.58333 9.90058 8.65058 10.8333 7.5 10.8333C6.34941 10.8333 5.41667 9.90058 5.41667 8.75C5.41667 7.59941 6.34941 6.66667 7.5 6.66667C8.65058 6.66667 9.58333 7.59941 9.58333 8.75Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
