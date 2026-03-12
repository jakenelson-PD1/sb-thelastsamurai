import { clsx } from 'clsx';

export interface InfinityIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function InfinityIcon({ size = 20, className, ...props }: InfinityIconProps) {
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
      <path d="M15.1481 6.66675C19.3947 6.66675 19.3947 13.3334 15.1481 13.3334C10.9022 13.3334 9.20391 6.66675 4.53228 6.66675C0.711448 6.66675 0.711448 13.3334 4.53228 13.3334C9.20391 13.3334 10.9023 6.66675 15.149 6.66675H15.1481Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
