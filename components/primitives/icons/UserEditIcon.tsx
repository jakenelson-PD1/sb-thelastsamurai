import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface UserEditIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function UserEditIcon({ size = 'md', className, ...props }: UserEditIconProps) {
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
      <path d="M7.5 12.9167H6.25C5.08704 12.9167 4.50555 12.9167 4.03239 13.0602C2.96705 13.3833 2.13337 14.2171 1.81021 15.2824C1.66667 15.7556 1.66667 16.337 1.66667 17.5M12.0833 6.25C12.0833 8.32107 10.4044 10 8.33334 10C6.26227 10 4.58334 8.32107 4.58334 6.25C4.58334 4.17893 6.26227 2.5 8.33334 2.5C10.4044 2.5 12.0833 4.17893 12.0833 6.25ZM9.16667 17.5L11.7512 16.7616C11.8749 16.7262 11.9368 16.7085 11.9945 16.682C12.0458 16.6585 12.0945 16.6298 12.1399 16.5965C12.1911 16.5589 12.2366 16.5134 12.3277 16.4223L17.7083 11.0417C18.2837 10.4664 18.2837 9.53358 17.7083 8.95833C17.1331 8.383 16.2003 8.383 15.625 8.95833L10.2443 14.339C10.1533 14.4301 10.1078 14.4756 10.0702 14.5267C10.0368 14.5722 10.0082 14.6209 9.98467 14.6722C9.95809 14.7299 9.94042 14.7918 9.90509 14.9156L9.16667 17.5Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
