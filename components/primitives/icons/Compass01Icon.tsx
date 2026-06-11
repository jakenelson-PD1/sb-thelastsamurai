import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Compass01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Compass01Icon({ size = 'md', className, ...props }: Compass01IconProps) {
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
      <g clipPath="url(#compass01-clip0_118_50773)">
<path d="M18.3333 10.0003C18.3333 14.6027 14.6023 18.3337 9.99999 18.3337M18.3333 10.0003C18.3333 5.39795 14.6023 1.66699 9.99999 1.66699M18.3333 10.0003H16.6667M9.99999 18.3337C5.39761 18.3337 1.66666 14.6027 1.66666 10.0003M9.99999 18.3337V16.667M9.99999 1.66699C5.39761 1.66699 1.66666 5.39795 1.66666 10.0003M9.99999 1.66699V3.33366M1.66666 10.0003H3.33332M15.8926 15.8929L14.7141 14.7144M5.28595 5.28628L4.10743 4.10777M14.7141 5.28628L15.8926 4.10777M4.10743 15.8929L5.28595 14.7144M6.66666 10.0003L8.74999 8.75033L9.99999 6.66699L11.25 8.75033L13.3333 10.0003L11.25 11.2503L9.99999 13.3337L8.74999 11.2503L6.66666 10.0003Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="compass01-clip0_118_50773">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
