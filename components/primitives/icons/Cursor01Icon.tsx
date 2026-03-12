import { clsx } from 'clsx';

export interface Cursor01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Cursor01Icon({ size = 20, className, ...props }: Cursor01IconProps) {
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
      <path d="M10.8333 10.8333L15.8333 15.8333M14.97 8.95941L10.7944 10.3777C10.6803 10.4164 10.6232 10.4358 10.5757 10.4684C10.5337 10.4973 10.4973 10.5337 10.4683 10.5757C10.4358 10.6232 10.4163 10.6803 10.3776 10.7945L8.95934 14.9701C8.7835 15.4879 8.6955 15.7467 8.558 15.8251C8.43892 15.8928 8.29401 15.8977 8.17057 15.8381C8.02812 15.7692 7.92297 15.5168 7.71268 15.0121L3.1225 3.99435C2.92736 3.52599 2.8298 3.29181 2.87727 3.1453C2.91845 3.01818 3.0181 2.91853 3.14522 2.87735C3.29173 2.82988 3.52591 2.92744 3.99427 3.12257L15.012 7.71276C15.5168 7.92305 15.7692 8.0282 15.838 8.17065C15.8977 8.29409 15.8928 8.439 15.825 8.55808C15.7467 8.69558 15.4878 8.78358 14.97 8.95941Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
