import { clsx } from 'clsx';

export interface LayerSingleIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function LayerSingleIcon({ size = 20, className, ...props }: LayerSingleIconProps) {
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
      <path d="M10.2982 5.98222C10.1888 5.92756 10.1342 5.90022 10.0768 5.88947C10.0261 5.87994 9.97391 5.87994 9.92316 5.88947C9.86582 5.90022 9.81116 5.92756 9.70182 5.98222L1.66666 9.99984L9.70182 14.0174C9.81116 14.0721 9.86582 14.0994 9.92316 14.1102C9.97391 14.1197 10.0261 14.1197 10.0768 14.1102C10.1342 14.0994 10.1888 14.0721 10.2982 14.0174L18.3333 9.99984L10.2982 5.98222Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
