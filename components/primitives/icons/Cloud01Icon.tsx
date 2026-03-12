import { clsx } from 'clsx';

export interface Cloud01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Cloud01Icon({ size = 20, className, ...props }: Cloud01IconProps) {
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
      <path d="M5.41666 15.8337C3.3456 15.8337 1.66666 14.1547 1.66666 12.0837C1.66666 10.1307 3.15959 8.52641 5.06645 8.34983C5.45651 5.9771 7.51686 4.16699 10 4.16699C12.4832 4.16699 14.5435 5.9771 14.9336 8.34983C16.8404 8.52641 18.3333 10.1307 18.3333 12.0837C18.3333 14.1547 16.6544 15.8337 14.5833 15.8337C10.9252 15.8337 8.61941 15.8337 5.41666 15.8337Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
