import { clsx } from 'clsx';

export interface ArrowCircleUpIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ArrowCircleUpIcon({ size = 20, className, ...props }: ArrowCircleUpIconProps) {
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
      <g clipPath="url(#arrowcircleup-clip0_118_39568)">
<path d="M13.3333 9.99996L10 6.66663M10 6.66663L6.66667 9.99996M10 6.66663V13.3333M18.3333 9.99996C18.3333 14.6023 14.6023 18.3333 10 18.3333C5.39763 18.3333 1.66667 14.6023 1.66667 9.99996C1.66667 5.39758 5.39763 1.66663 10 1.66663C14.6023 1.66663 18.3333 5.39758 18.3333 9.99996Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="arrowcircleup-clip0_118_39568">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
