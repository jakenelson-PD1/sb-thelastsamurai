import { clsx } from 'clsx';

export interface ArrowCircleUpRightIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ArrowCircleUpRightIcon({ size = 20, className, ...props }: ArrowCircleUpRightIconProps) {
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
      <g clipPath="url(#arrowcircleupright-clip0_118_39594)">
<path d="M12.5002 12.5V7.5M12.5002 7.5H7.50015M12.5002 7.5L7.50015 12.4999M18.3333 9.99996C18.3333 14.6023 14.6023 18.3333 9.99999 18.3333C5.39761 18.3333 1.66666 14.6023 1.66666 9.99996C1.66666 5.39758 5.39761 1.66663 9.99999 1.66663C14.6023 1.66663 18.3333 5.39758 18.3333 9.99996Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="arrowcircleupright-clip0_118_39594">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
