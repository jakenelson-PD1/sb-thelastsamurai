import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Crop01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Crop01Icon({ size = 'md', className, ...props }: Crop01IconProps) {
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
      <g clipPath="url(#crop01-clip0_118_41628)">
<path d="M1.66669 5.00008H12.3334C13.2668 5.00008 13.7335 5.00008 14.09 5.18174C14.4036 5.34152 14.6586 5.59649 14.8184 5.9101C15 6.26661 15 6.73332 15 7.66675V18.3334M18.3334 15.0001H7.66669C6.73326 15.0001 6.26655 15.0001 5.91004 14.8184C5.59643 14.6587 5.34146 14.4037 5.18168 14.0901C5.00002 13.7336 5.00002 13.2668 5.00002 12.3334V1.66675" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="crop01-clip0_118_41628">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
