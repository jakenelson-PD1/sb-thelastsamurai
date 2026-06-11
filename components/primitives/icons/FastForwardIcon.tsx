import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface FastForwardIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function FastForwardIcon({ size = 'md', className, ...props }: FastForwardIconProps) {
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
      <path d="M10.8333 13.6973C10.8333 14.639 10.8333 15.1099 11.0236 15.3407C11.1888 15.5412 11.4382 15.6532 11.6978 15.6435C11.9968 15.6323 12.3487 15.3195 13.0525 14.6939L17.2123 10.9963C17.6 10.6516 17.7938 10.4793 17.8653 10.2758C17.928 10.0971 17.928 9.90238 17.8653 9.72371C17.7938 9.52021 17.6 9.34788 17.2123 9.00321L13.0525 5.30568C12.3487 4.68005 11.9968 4.36724 11.6978 4.35605C11.4382 4.34633 11.1888 4.4583 11.0236 4.65885C10.8333 4.88969 10.8333 5.36053 10.8333 6.30222V13.6973Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.66667 13.6973C1.66667 14.639 1.66667 15.1099 1.8569 15.3407C2.02215 15.5412 2.2715 15.6532 2.53117 15.6435C2.83008 15.6323 3.182 15.3195 3.88582 14.6939L8.04556 10.9963C8.43334 10.6516 8.62717 10.4793 8.69859 10.2758C8.76134 10.0971 8.76134 9.90238 8.69859 9.72371C8.62717 9.52021 8.43334 9.34788 8.04556 9.00321L3.88582 5.30568C3.182 4.68005 2.83008 4.36724 2.53117 4.35605C2.2715 4.34633 2.02215 4.4583 1.8569 4.65885C1.66667 4.88969 1.66667 5.36053 1.66667 6.30222V13.6973Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
