import { clsx } from 'clsx';

export interface TerminalCircleIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function TerminalCircleIcon({ size = 20, className, ...props }: TerminalCircleIconProps) {
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
      <g clipPath="url(#terminalcircle-clip0_118_49060)">
<path d="M5.83335 12.4998L8.33335 9.99984L5.83335 7.49984M10.8334 12.4998H14.1667M18.3334 9.99984C18.3334 14.6022 14.6024 18.3332 10 18.3332C5.39765 18.3332 1.66669 14.6022 1.66669 9.99984C1.66669 5.39746 5.39765 1.6665 10 1.6665C14.6024 1.6665 18.3334 5.39746 18.3334 9.99984Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="terminalcircle-clip0_118_49060">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
