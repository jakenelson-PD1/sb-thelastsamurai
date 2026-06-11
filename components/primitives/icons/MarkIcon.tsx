import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface MarkIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function MarkIcon({ size = 'md', className, ...props }: MarkIconProps) {
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
      <g clipPath="url(#mark-clip0_118_51039)">
<path d="M16.6667 10.0003C16.6667 13.6822 13.6819 16.667 10 16.667M16.6667 10.0003C16.6667 6.31843 13.6819 3.33366 10 3.33366M16.6667 10.0003H18.3334M10 16.667C6.31812 16.667 3.33335 13.6822 3.33335 10.0003M10 16.667V18.3337M10 3.33366C6.31812 3.33366 3.33335 6.31843 3.33335 10.0003M10 3.33366V1.66699M3.33335 10.0003H1.66669M12.5 10.0003C12.5 11.3811 11.3808 12.5003 10 12.5003C8.61927 12.5003 7.50002 11.3811 7.50002 10.0003C7.50002 8.61958 8.61927 7.50033 10 7.50033C11.3808 7.50033 12.5 8.61958 12.5 10.0003Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="mark-clip0_118_51039">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
