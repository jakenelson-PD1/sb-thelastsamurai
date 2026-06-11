import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Keyboard01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Keyboard01Icon({ size = 'md', className, ...props }: Keyboard01IconProps) {
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
      <path d="M4.99999 8.33333H5.00832M6.66666 11.6667H6.67499M8.33332 8.33333H8.34166M9.99999 11.6667H10.0083M11.6667 8.33333H11.675M13.3333 11.6667H13.3417M15 8.33333H15.0083M4.33332 15H15.6667C16.6001 15 17.0668 15 17.4233 14.8183C17.7369 14.6586 17.9919 14.4036 18.1517 14.09C18.3333 13.7335 18.3333 13.2667 18.3333 12.3333V7.66667C18.3333 6.73325 18.3333 6.26653 18.1517 5.91002C17.9919 5.59641 17.7369 5.34144 17.4233 5.18166C17.0668 5 16.6001 5 15.6667 5H4.33332C3.3999 5 2.93319 5 2.57667 5.18166C2.26306 5.34144 2.0081 5.59641 1.84831 5.91002C1.66666 6.26653 1.66666 6.73324 1.66666 7.66667V12.3333C1.66666 13.2667 1.66666 13.7335 1.84831 14.09C2.0081 14.4036 2.26306 14.6586 2.57667 14.8183C2.93319 15 3.39991 15 4.33332 15Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
