import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface LinkBroken01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function LinkBroken01Icon({ size = 'md', className, ...props }: LinkBroken01IconProps) {
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
      <g clipPath="url(#linkbroken01-clip0_118_38025)">
<path d="M7.5 3.33335V1.66669M12.5 16.6667V18.3334M3.33333 7.50002H1.66666M16.6667 12.5H18.3333M4.09517 4.0952L2.91666 2.91669M15.9048 15.9049L17.0833 17.0834M10 14.7141L8.23223 16.4819C6.93048 17.7836 4.81993 17.7836 3.51819 16.4819C2.21644 15.1801 2.21644 13.0695 3.51819 11.7678L5.28596 10M14.7141 10L16.4818 8.23225C17.7836 6.9305 17.7836 4.81995 16.4818 3.51821C15.1801 2.21646 13.0695 2.21646 11.7677 3.51821L10 5.28598" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="linkbroken01-clip0_118_38025">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
