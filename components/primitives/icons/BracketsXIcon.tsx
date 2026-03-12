import { clsx } from 'clsx';

export interface BracketsXIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function BracketsXIcon({ size = 20, className, ...props }: BracketsXIconProps) {
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
      <path d="M15.4757 16.6668C16.5274 16.6668 17.3807 15.8143 17.3807 14.7618V10.9527L18.3332 10.0002L17.3807 9.04766V5.2385C17.3807 4.186 16.5282 3.3335 15.4757 3.3335M4.52419 3.3335C3.47169 3.3335 2.61919 4.186 2.61919 5.2385V9.04766L1.66669 10.0002L2.61919 10.9527V14.7618C2.61919 15.8143 3.47169 16.6668 4.52419 16.6668M12.5 7.50016L7.50002 12.5002M7.50002 7.50016L12.5 12.5002" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
