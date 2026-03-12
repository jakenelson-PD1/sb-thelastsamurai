import { clsx } from 'clsx';

export interface Edit03IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Edit03Icon({ size = 20, className, ...props }: Edit03IconProps) {
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
      <path d="M9.99997 16.6667H17.5M2.5 16.6667H3.89545C4.30311 16.6667 4.50693 16.6667 4.69874 16.6206C4.8688 16.5798 5.03137 16.5125 5.1805 16.4211C5.34869 16.318 5.49282 16.1739 5.78108 15.8856L16.2501 5.41669C16.9404 4.72634 16.9404 3.60705 16.2501 2.91669C15.5596 2.22634 14.4404 2.22634 13.7501 2.91669L3.28105 13.3856C2.9928 13.6739 2.84867 13.818 2.7456 13.9862C2.65422 14.1354 2.58687 14.2979 2.54605 14.468C2.5 14.6598 2.5 14.8636 2.5 15.2713V16.6667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
