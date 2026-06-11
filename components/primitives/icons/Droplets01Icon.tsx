import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Droplets01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Droplets01Icon({ size = 'md', className, ...props }: Droplets01IconProps) {
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
      <g clipPath="url(#droplets01-clip0_118_51934)">
<path d="M18.3333 13.3337C18.3333 16.0951 16.0948 18.3337 13.3333 18.3337C10.5719 18.3337 8.33334 16.0951 8.33334 13.3337C8.33334 9.73891 13.3333 1.66699 13.3333 1.66699C13.3333 1.66699 18.3333 9.73891 18.3333 13.3337Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.66667 7.50033C6.66667 8.88108 5.54738 10.0003 4.16667 10.0003C2.78596 10.0003 1.66667 8.88108 1.66667 7.50033C1.66667 5.70295 4.16667 1.66699 4.16667 1.66699C4.16667 1.66699 6.66667 5.70295 6.66667 7.50033Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="droplets01-clip0_118_51934">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
