import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Fingerprint01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Fingerprint01Icon({ size = 'md', className, ...props }: Fingerprint01IconProps) {
  const px = resolveIconSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('inline-block', className)}
      aria-hidden={!props['aria-label']}
      {...props}
    >
      <g clipPath="url(#fingerprint01-clip0_118_49204)">
<path d="M5.76518 2.8217C7.00618 2.08803 8.45391 1.66699 10 1.66699C14.6023 1.66699 18.3333 5.39795 18.3333 10.0003C18.3333 10.0279 18.3332 10.0555 18.3329 10.0831M2.81761 5.77187C2.08626 7.01145 1.66666 8.45691 1.66666 10.0003C1.66666 13.8833 4.32244 17.146 7.91666 18.0712M17.2563 14.1008C16.156 16.0438 14.2978 17.5012 12.0833 18.0712M11.7411 5.31181C11.1989 5.11038 10.6123 5.00033 10 5.00033C7.23857 5.00033 5 7.2389 5 10.0003C5 10.6159 5.11126 11.2056 5.31476 11.7502M14.6876 8.25672C14.8896 8.79958 15 9.38708 15 10.0003C15 12.7617 12.7614 15.0003 10 15.0003C9.39175 15.0003 8.80891 14.8917 8.26977 14.6928M10 8.33366V11.667" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="fingerprint01-clip0_118_49204">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
