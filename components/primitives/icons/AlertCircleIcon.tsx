import { clsx } from 'clsx';

export interface AlertCircleIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function AlertCircleIcon({ size = 20, className, ...props }: AlertCircleIconProps) {
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
      <g clipPath="url(#alertcircle-clip0_118_46468)">
<path d="M10 6.6665V9.99984M10 13.3332H10.0083M18.3333 9.99984C18.3333 14.6022 14.6023 18.3332 10 18.3332C5.39762 18.3332 1.66666 14.6022 1.66666 9.99984C1.66666 5.39746 5.39762 1.6665 10 1.6665C14.6023 1.6665 18.3333 5.39746 18.3333 9.99984Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="alertcircle-clip0_118_46468">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
