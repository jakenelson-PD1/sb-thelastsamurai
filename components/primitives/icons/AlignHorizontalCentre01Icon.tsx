import { clsx } from 'clsx';

export interface AlignHorizontalCentre01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function AlignHorizontalCentre01Icon({ size = 20, className, ...props }: AlignHorizontalCentre01IconProps) {
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
      <path d="M9.99999 2.5V17.5M18.3333 10H12.9167M12.9167 10L16.25 13.3333M12.9167 10L16.25 6.66667M1.66666 10H7.08332M7.08332 10L3.74999 13.3333M7.08332 10L3.74999 6.66667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
