import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface ThermometerColdIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function ThermometerColdIcon({ size = 'md', className, ...props }: ThermometerColdIconProps) {
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
      <g clipPath="url(#thermometercold-clip0_118_52292)">
<path d="M1.66666 10.0003H9.99999M7.49999 3.33366V16.667M2.49999 7.50033L4.99999 10.0003L2.49999 12.5003M9.99999 5.00033L7.49999 7.50033L4.99999 5.00033M4.99999 15.0003L7.49999 12.5003L8.74999 13.7503M16.6667 12.1129V3.33366C16.6667 2.41318 15.9205 1.66699 15 1.66699C14.0795 1.66699 13.3333 2.41318 13.3333 3.33366V12.1129C12.337 12.6892 11.6667 13.7665 11.6667 15.0003C11.6667 16.8412 13.1591 18.3337 15 18.3337C16.8409 18.3337 18.3333 16.8412 18.3333 15.0003C18.3333 13.7665 17.663 12.6892 16.6667 12.1129Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="thermometercold-clip0_118_52292">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
