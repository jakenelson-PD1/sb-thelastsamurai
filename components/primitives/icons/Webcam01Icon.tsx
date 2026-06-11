import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Webcam01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Webcam01Icon({ size = 'md', className, ...props }: Webcam01IconProps) {
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
      <path d="M9.99998 14.9998C13.6819 14.9998 16.6666 12.0151 16.6666 8.33317C16.6666 4.65127 13.6819 1.6665 9.99998 1.6665C6.31808 1.6665 3.33331 4.65127 3.33331 8.33317C3.33331 12.0151 6.31808 14.9998 9.99998 14.9998ZM9.99998 14.9998V18.3332M9.99998 18.3332H5.83331M9.99998 18.3332H14.1666M12.5 8.33317C12.5 9.71392 11.3807 10.8332 9.99998 10.8332C8.61923 10.8332 7.49998 9.71392 7.49998 8.33317C7.49998 6.95246 8.61923 5.83317 9.99998 5.83317C11.3807 5.83317 12.5 6.95246 12.5 8.33317Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
