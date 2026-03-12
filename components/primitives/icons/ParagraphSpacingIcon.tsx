import { clsx } from 'clsx';

export interface ParagraphSpacingIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ParagraphSpacingIcon({ size = 20, className, ...props }: ParagraphSpacingIconProps) {
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
      <path d="M17.5 8.33325H10.8333M17.5 4.99992H10.8333M17.5 11.6666H10.8333M17.5 14.9999H10.8333M5 16.6666V3.33325M5 16.6666L2.5 14.1666M5 16.6666L7.5 14.1666M5 3.33325L2.5 5.83325M5 3.33325L7.5 5.83325" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
