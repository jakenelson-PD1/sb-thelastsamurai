import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Speaker02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Speaker02Icon({ size = 'md', className, ...props }: Speaker02IconProps) {
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
      <g clipPath="url(#speaker02-clip0_118_44563)">
<path d="M10 9.99984H10.0084M15 4.99984H15.0084M5.00002 4.99984H5.00835M15 14.9998H15.0084M5.00002 14.9998H5.00835M5.66669 18.3332H14.3334C15.7335 18.3332 16.4335 18.3332 16.9684 18.0607C17.4388 17.821 17.8212 17.4386 18.0609 16.9682C18.3334 16.4333 18.3334 15.7333 18.3334 14.3332V5.6665C18.3334 4.26637 18.3334 3.5663 18.0609 3.03153C17.8212 2.56112 17.4388 2.17867 16.9684 1.93899C16.4335 1.6665 15.7335 1.6665 14.3334 1.6665H5.66669C4.26655 1.6665 3.56649 1.6665 3.03171 1.93899C2.5613 2.17867 2.17885 2.56112 1.93917 3.03153C1.66669 3.5663 1.66669 4.26637 1.66669 5.6665V14.3332C1.66669 15.7333 1.66669 16.4333 1.93917 16.9682C2.17885 17.4386 2.5613 17.821 3.03171 18.0607C3.56649 18.3332 4.26655 18.3332 5.66669 18.3332ZM10.4167 9.99984C10.4167 10.2299 10.2301 10.4165 10 10.4165C9.76994 10.4165 9.58335 10.2299 9.58335 9.99984C9.58335 9.76975 9.76994 9.58317 10 9.58317C10.2301 9.58317 10.4167 9.76975 10.4167 9.99984ZM14.1667 9.99984C14.1667 12.301 12.3012 14.1665 10 14.1665C7.69884 14.1665 5.83335 12.301 5.83335 9.99984C5.83335 7.69865 7.69884 5.83317 10 5.83317C12.3012 5.83317 14.1667 7.69865 14.1667 9.99984Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="speaker02-clip0_118_44563">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
