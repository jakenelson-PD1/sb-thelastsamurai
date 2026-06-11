import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Mail01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Mail01Icon({ size = 'md', className, ...props }: Mail01IconProps) {
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
      <path d="M1.66666 5.83325L8.47074 10.5961C9.02174 10.9818 9.29724 11.1747 9.59691 11.2493C9.86157 11.3153 10.1384 11.3153 10.4031 11.2493C10.7027 11.1747 10.9782 10.9818 11.5292 10.5961L18.3333 5.83325M5.66666 16.6666H14.3333C15.7335 16.6666 16.4335 16.6666 16.9683 16.3941C17.4387 16.1544 17.8212 15.772 18.0608 15.3016C18.3333 14.7668 18.3333 14.0668 18.3333 12.6666V7.33325C18.3333 5.93312 18.3333 5.23305 18.0608 4.69828C17.8212 4.22787 17.4387 3.84542 16.9683 3.60574C16.4335 3.33325 15.7335 3.33325 14.3333 3.33325H5.66666C4.26652 3.33325 3.56646 3.33325 3.03168 3.60574C2.56127 3.84542 2.17882 4.22787 1.93914 4.69828C1.66666 5.23305 1.66666 5.93312 1.66666 7.33325V12.6666C1.66666 14.0668 1.66666 14.7668 1.93914 15.3016C2.17882 15.772 2.56127 16.1544 3.03168 16.3941C3.56646 16.6666 4.26652 16.6666 5.66666 16.6666Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
