import { clsx } from 'clsx';

export interface HandIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function HandIcon({ size = 20, className, ...props }: HandIconProps) {
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
      <path d="M5.75001 9.53708V11.8519M5.75001 9.53708V3.98156C5.75001 3.2145 6.38427 2.59267 7.16667 2.59267C7.94907 2.59267 8.58334 3.2145 8.58334 3.98156M5.75001 9.53708C5.75001 8.77008 5.11574 8.14823 4.33334 8.14823C3.55094 8.14823 2.91667 8.77008 2.91667 9.53708V11.389C2.91667 15.2242 6.08799 18.3334 10 18.3334C13.912 18.3334 17.0833 15.2242 17.0833 11.389V6.75934C17.0833 5.99228 16.4491 5.37045 15.6667 5.37045C14.8843 5.37045 14.25 5.99228 14.25 6.75934M8.58334 3.98156V9.07416M8.58334 3.98156V3.05564C8.58334 2.28857 9.21759 1.66675 10 1.66675C10.7824 1.66675 11.4167 2.28857 11.4167 3.05564V3.98156M14.25 6.75934V3.98156C14.25 3.2145 13.6158 2.59267 12.8333 2.59267C12.0509 2.59267 11.4167 3.2145 11.4167 3.98156M14.25 6.75934V9.07416M11.4167 3.98156V9.07416" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
