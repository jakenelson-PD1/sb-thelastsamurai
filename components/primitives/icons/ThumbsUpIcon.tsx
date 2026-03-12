import { clsx } from 'clsx';

export interface ThumbsUpIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ThumbsUpIcon({ size = 20, className, ...props }: ThumbsUpIconProps) {
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
      <path d="M5.83334 18.3332V9.1665M1.66667 10.8332V16.6665C1.66667 17.587 2.41286 18.3332 3.33334 18.3332H14.5218C15.7558 18.3332 16.8052 17.4329 16.9928 16.2133L17.8903 10.38C18.1233 8.86559 16.9515 7.49984 15.4193 7.49984H12.5C12.0398 7.49984 11.6667 7.12674 11.6667 6.6665V3.72137C11.6667 2.5865 10.7467 1.6665 9.61184 1.6665C9.34109 1.6665 9.09584 1.82592 8.98592 2.07327L6.05329 8.67159C5.91954 8.97259 5.62111 9.1665 5.29178 9.1665H3.33334C2.41286 9.1665 1.66667 9.91267 1.66667 10.8332Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
