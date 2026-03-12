import { clsx } from 'clsx';

export interface AlignTopArrow01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function AlignTopArrow01Icon({ size = 20, className, ...props }: AlignTopArrow01IconProps) {
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
      <path d="M17.5 2.5H2.5M10 17.5V5.83333M10 5.83333L4.16667 11.6667M10 5.83333L15.8333 11.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
