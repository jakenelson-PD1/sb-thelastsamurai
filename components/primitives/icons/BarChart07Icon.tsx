import { clsx } from 'clsx';

export interface BarChart07IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function BarChart07Icon({ size = 20, className, ...props }: BarChart07IconProps) {
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
      <path d="M17.5 17.5H5.16667C4.23324 17.5 3.76653 17.5 3.41002 17.3183C3.09641 17.1586 2.84144 16.9036 2.68166 16.59C2.5 16.2335 2.5 15.7667 2.5 14.8333V2.5M5.83333 8.75V14.5833M9.58333 4.58333V14.5833M13.3333 8.75V14.5833M17.0833 4.58333V14.5833" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
