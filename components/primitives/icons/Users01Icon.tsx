import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Users01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Users01Icon({ size = 'md', className, ...props }: Users01IconProps) {
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
      <path d="M18.3334 17.5V15.8333C18.3334 14.2802 17.271 12.9751 15.8334 12.605M12.9167 2.7423C14.1383 3.23679 15 4.43442 15 5.83333C15 7.23224 14.1383 8.42992 12.9167 8.92433M14.1667 17.5C14.1667 15.9468 14.1667 15.1703 13.9129 14.5577C13.5746 13.741 12.9257 13.0921 12.1089 12.7537C11.4964 12.5 10.7199 12.5 9.16669 12.5H6.66669C5.11355 12.5 4.33698 12.5 3.72441 12.7537C2.90765 13.0921 2.25874 13.741 1.92042 14.5577C1.66669 15.1703 1.66669 15.9468 1.66669 17.5M11.25 5.83333C11.25 7.67428 9.7576 9.16667 7.91669 9.16667C6.07574 9.16667 4.58335 7.67428 4.58335 5.83333C4.58335 3.99238 6.07574 2.5 7.91669 2.5C9.7576 2.5 11.25 3.99238 11.25 5.83333Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
