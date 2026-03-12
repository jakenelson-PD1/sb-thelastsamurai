import { clsx } from 'clsx';

export interface SkipBackIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function SkipBackIcon({ size = 20, className, ...props }: SkipBackIconProps) {
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
      <path d="M4.16669 15.8332V4.1665M13.6671 5.06618L8.80144 8.95867C8.3566 9.31459 8.13416 9.4925 8.05363 9.7075C7.98302 9.896 7.98302 10.1037 8.05363 10.2922C8.13416 10.5072 8.3566 10.6851 8.80144 11.041L13.6671 14.9335C14.3606 15.4883 14.7073 15.7657 14.9991 15.766C15.2529 15.7663 15.493 15.6508 15.6513 15.4525C15.8334 15.2244 15.8334 14.7804 15.8334 13.8923V6.10734C15.8334 5.21925 15.8334 4.77521 15.6513 4.54715C15.493 4.3488 15.2529 4.23342 14.9991 4.2337C14.7073 4.234 14.3606 4.5114 13.6671 5.06618Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
