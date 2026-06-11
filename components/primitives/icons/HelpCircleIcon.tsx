import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface HelpCircleIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function HelpCircleIcon({ size = 'md', className, ...props }: HelpCircleIconProps) {
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
      <g clipPath="url(#helpcircle-clip0_118_39054)">
<path d="M7.57499 7.49996C7.77091 6.94302 8.15761 6.47338 8.66666 6.17423C9.17566 5.87509 9.77407 5.76574 10.356 5.86555C10.9379 5.96537 11.4657 6.26789 11.8459 6.71957C12.2261 7.17123 12.4342 7.74289 12.4333 8.33329C12.4333 9.99996 9.93332 10.8333 9.93332 10.8333M9.99999 14.1666H10.0083M18.3333 9.99996C18.3333 14.6023 14.6023 18.3333 9.99999 18.3333C5.39761 18.3333 1.66666 14.6023 1.66666 9.99996C1.66666 5.39758 5.39761 1.66663 9.99999 1.66663C14.6023 1.66663 18.3333 5.39758 18.3333 9.99996Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="helpcircle-clip0_118_39054">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
