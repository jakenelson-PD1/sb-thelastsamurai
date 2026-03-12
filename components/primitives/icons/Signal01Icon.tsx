import { clsx } from 'clsx';

export interface Signal01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Signal01Icon({ size = 20, className, ...props }: Signal01IconProps) {
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
      <path d="M13.5355 6.46444C15.4882 8.41704 15.4882 11.5829 13.5355 13.5355M6.46447 13.5355C4.51185 11.5829 4.51185 8.41704 6.46447 6.46441M4.10745 15.8925C0.85308 12.6381 0.85308 7.36179 4.10745 4.10742M15.8926 4.10746C19.1469 7.36182 19.1469 12.6382 15.8926 15.8925M11.6667 9.99996C11.6667 10.9205 10.9205 11.6666 10 11.6666C9.0795 11.6666 8.33334 10.9205 8.33334 9.99996C8.33334 9.07954 9.0795 8.33329 10 8.33329C10.9205 8.33329 11.6667 9.07954 11.6667 9.99996Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
