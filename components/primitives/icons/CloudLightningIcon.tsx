import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CloudLightningIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CloudLightningIcon({ size = 'md', className, ...props }: CloudLightningIconProps) {
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
      <g clipPath="url(#cloudlightning-clip0_118_51748)">
<path d="M15.8333 13.1202C17.2898 12.6055 18.3333 11.2164 18.3333 9.58366C18.3333 7.63068 16.8404 6.0264 14.9336 5.8498C14.5435 3.4771 12.4832 1.66699 9.99999 1.66699C7.51686 1.66699 5.4565 3.4771 5.06644 5.8498C3.15958 6.0264 1.66666 7.63068 1.66666 9.58366C1.66666 11.2164 2.71016 12.6055 4.16666 13.1202M10.8333 8.33366L7.49999 13.3337H12.5L9.16666 18.3337" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="cloudlightning-clip0_118_51748">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
