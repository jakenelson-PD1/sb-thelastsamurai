import { clsx } from 'clsx';

export interface Building08IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Building08Icon({ size = 20, className, ...props }: Building08IconProps) {
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
      <path d="M2.5 17.5H17.5M5 15V8.33331M8.33333 15V8.33331M11.6667 15V8.33331M15 15V8.33331M16.6667 5.83331L10.3533 1.88748C10.2252 1.80736 10.1611 1.76731 10.0923 1.75169C10.0316 1.73788 9.96842 1.73788 9.90767 1.75169C9.83892 1.76731 9.77483 1.80736 9.64667 1.88748L3.33333 5.83331H16.6667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
