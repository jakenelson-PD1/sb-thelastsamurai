import { clsx } from 'clsx';

export interface Modem01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Modem01Icon({ size = 20, className, ...props }: Modem01IconProps) {
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
      <g clipPath="url(#modem01-clip0_118_43960)">
<path d="M13.5356 3.96439C15.4881 5.91701 15.4881 9.08287 13.5356 11.0355M6.46443 11.0355C4.51181 9.08287 4.51181 5.91701 6.46443 3.96439M4.04856 13.3333C0.852972 10.0745 0.872521 4.84211 4.10722 1.60742M15.8927 1.60742C19.1274 4.84211 19.147 10.0745 15.9514 13.3333M9.99998 13.3333V7.49996M4.16663 18.3333H15.8333C16.6099 18.3333 16.9981 18.3333 17.3044 18.2065C17.7128 18.0373 18.0372 17.7128 18.2064 17.3045C18.3333 16.9981 18.3333 16.6099 18.3333 15.8333C18.3333 15.0567 18.3333 14.6685 18.2064 14.3621C18.0372 13.9538 17.7128 13.6293 17.3044 13.4601C16.9981 13.3333 16.6099 13.3333 15.8333 13.3333H4.16663C3.39005 13.3333 3.00177 13.3333 2.69549 13.4601C2.28711 13.6293 1.96265 13.9538 1.7935 14.3621C1.66663 14.6685 1.66663 15.0567 1.66663 15.8333C1.66663 16.6099 1.66663 16.9981 1.7935 17.3045C1.96265 17.7128 2.28711 18.0373 2.69549 18.2065C3.00177 18.3333 3.39005 18.3333 4.16663 18.3333Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="modem01-clip0_118_43960">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
