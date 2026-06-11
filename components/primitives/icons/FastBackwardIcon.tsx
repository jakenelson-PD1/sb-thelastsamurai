import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface FastBackwardIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function FastBackwardIcon({ size = 'md', className, ...props }: FastBackwardIconProps) {
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
      <path d="M18.3331 13.6973C18.3331 14.639 18.3331 15.1099 18.1428 15.3407C17.9776 15.5412 17.7282 15.6532 17.4686 15.6435C17.1697 15.6323 16.8178 15.3195 16.1139 14.6939L11.9542 10.9963C11.5664 10.6516 11.3726 10.4793 11.3012 10.2758C11.2384 10.0971 11.2384 9.90238 11.3012 9.72371C11.3726 9.52021 11.5664 9.34788 11.9542 9.00321L16.1139 5.30568C16.8178 4.68005 17.1697 4.36724 17.4686 4.35605C17.7282 4.34633 17.9776 4.4583 18.1428 4.65885C18.3331 4.88969 18.3331 5.36053 18.3331 6.30222V13.6973Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.16642 13.6973C9.16642 14.639 9.16642 15.1099 8.97617 15.3407C8.81092 15.5412 8.56158 15.6532 8.3019 15.6435C8.00299 15.6323 7.65108 15.3195 6.94725 14.6939L2.78752 10.9963C2.39978 10.6516 2.20591 10.4793 2.13446 10.2758C2.07172 10.0971 2.07172 9.90238 2.13446 9.72371C2.20591 9.52021 2.39978 9.34788 2.78752 9.00321L6.94725 5.30568C7.65108 4.68005 8.00299 4.36724 8.3019 4.35605C8.56158 4.34633 8.81092 4.4583 8.97617 4.65885C9.16642 4.88969 9.16642 5.36053 9.16642 6.30222V13.6973Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
