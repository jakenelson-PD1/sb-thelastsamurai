import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Server05IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Server05Icon({ size = 'md', className, ...props }: Server05IconProps) {
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
      <path d="M15.8333 7.49984C15.8333 10.7215 13.2217 13.3332 10 13.3332M15.8333 7.49984C15.8333 4.27818 13.2217 1.6665 10 1.6665M15.8333 7.49984H4.16667M10 13.3332C6.77834 13.3332 4.16667 10.7215 4.16667 7.49984M10 13.3332C11.4591 11.7358 12.289 9.66284 12.3341 7.49984C12.289 5.33685 11.4591 3.26388 10 1.6665M10 13.3332C8.54092 11.7358 7.71248 9.66284 7.66742 7.49984C7.71248 5.33685 8.54092 3.26388 10 1.6665M10 13.3332V14.9998M10 1.6665C6.77834 1.6665 4.16667 4.27818 4.16667 7.49984M10 14.9998C10.9205 14.9998 11.6667 15.746 11.6667 16.6665M10 14.9998C9.0795 14.9998 8.33333 15.746 8.33333 16.6665M11.6667 16.6665C11.6667 17.587 10.9205 18.3332 10 18.3332C9.0795 18.3332 8.33333 17.587 8.33333 16.6665M11.6667 16.6665H17.5M8.33333 16.6665H2.5" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
