import { clsx } from 'clsx';

export interface GoogleChromeIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function GoogleChromeIcon({ size = 20, className, ...props }: GoogleChromeIconProps) {
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
      <g clipPath="url(#googlechrome-clip0_118_38887)">
<path d="M10 6.66663C8.15905 6.66663 6.66666 8.15901 6.66666 9.99996C6.66666 11.8409 8.15905 13.3333 10 13.3333C11.8409 13.3333 13.3333 11.8409 13.3333 9.99996C13.3333 8.15901 11.8409 6.66663 10 6.66663ZM10 6.66663H17.6417M3.29166 5.04996L7.11666 11.6666M9.06666 18.2833L12.8833 11.6666M18.3333 9.99996C18.3333 14.6023 14.6023 18.3333 10 18.3333C5.39762 18.3333 1.66666 14.6023 1.66666 9.99996C1.66666 5.39758 5.39762 1.66663 10 1.66663C14.6023 1.66663 18.3333 5.39758 18.3333 9.99996Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="googlechrome-clip0_118_38887">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
