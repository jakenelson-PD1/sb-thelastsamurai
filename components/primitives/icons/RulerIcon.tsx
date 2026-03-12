import { clsx } from 'clsx';

export interface RulerIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function RulerIcon({ size = 20, className, ...props }: RulerIconProps) {
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
      <g clipPath="url(#ruler-clip0_118_49940)">
<path d="M12.0833 4.58292L13.3333 5.83292M9.58335 7.08292L10.8333 8.33292M7.08331 9.58293L8.33331 10.8329M4.58331 12.0829L5.83331 13.3329M2.13802 14.6377L5.36188 17.8615C5.52689 18.0265 5.60939 18.1091 5.70453 18.1399C5.78821 18.1672 5.87835 18.1672 5.96204 18.1399C6.05718 18.1091 6.13968 18.0265 6.30469 17.8615L17.8618 6.30435C18.0268 6.13934 18.1094 6.05684 18.1403 5.9617C18.1675 5.87802 18.1675 5.78788 18.1403 5.70419C18.1094 5.60905 18.0268 5.52655 17.8618 5.36154L14.638 2.13769C14.473 1.97268 14.3905 1.89018 14.2953 1.85926C14.2117 1.83207 14.1215 1.83207 14.0378 1.85926C13.9428 1.89018 13.8602 1.97268 13.6952 2.13769L2.13802 13.6948C1.97301 13.8598 1.89051 13.9424 1.8596 14.0375C1.8324 14.1212 1.8324 14.2113 1.8596 14.295C1.89051 14.3902 1.97301 14.4727 2.13802 14.6377Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="ruler-clip0_118_49940">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
