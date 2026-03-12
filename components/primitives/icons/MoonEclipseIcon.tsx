import { clsx } from 'clsx';

export interface MoonEclipseIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function MoonEclipseIcon({ size = 20, className, ...props }: MoonEclipseIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('inline-block', className)}
      aria-hidden={!props['aria-label']}
      {...props}
    >
      <g clipPath="url(#mooneclipse-clip0_118_52066)">
<path d="M16.6681 5.00051C18.8889 7.95453 18.8884 12.0485 16.6667 15.0021M9.99999 18.3337C11.3092 18.3337 12.5479 18.0317 13.6502 17.4937C13.5452 17.4982 13.4395 17.5003 13.3333 17.5003C9.19116 17.5003 5.83332 14.1425 5.83332 10.0003C5.83332 5.85819 9.19116 2.50033 13.3333 2.50033C13.4395 2.50033 13.5452 2.50253 13.6502 2.5069C12.5479 1.9689 11.3092 1.66699 9.99999 1.66699C5.39761 1.66699 1.66666 5.39795 1.66666 10.0003C1.66666 14.6027 5.39761 18.3337 9.99999 18.3337Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="mooneclipse-clip0_118_52066">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
