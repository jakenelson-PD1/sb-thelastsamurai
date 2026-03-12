import { clsx } from 'clsx';

export interface FaceSmileIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function FaceSmileIcon({ size = 20, className, ...props }: FaceSmileIconProps) {
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
      <g clipPath="url(#facesmile-clip0_118_45993)">
<path d="M6.66669 11.6665C6.66669 11.6665 7.91669 13.3332 10 13.3332C12.0834 13.3332 13.3334 11.6665 13.3334 11.6665M12.5 7.49984H12.5084M7.50002 7.49984H7.50835M18.3334 9.99984C18.3334 14.6022 14.6024 18.3332 10 18.3332C5.39765 18.3332 1.66669 14.6022 1.66669 9.99984C1.66669 5.39746 5.39765 1.6665 10 1.6665C14.6024 1.6665 18.3334 5.39746 18.3334 9.99984ZM12.9167 7.49984C12.9167 7.72995 12.7301 7.9165 12.5 7.9165C12.2699 7.9165 12.0834 7.72995 12.0834 7.49984C12.0834 7.26972 12.2699 7.08317 12.5 7.08317C12.7301 7.08317 12.9167 7.26972 12.9167 7.49984ZM7.91669 7.49984C7.91669 7.72995 7.73014 7.9165 7.50002 7.9165C7.2699 7.9165 7.08335 7.72995 7.08335 7.49984C7.08335 7.26972 7.2699 7.08317 7.50002 7.08317C7.73014 7.08317 7.91669 7.26972 7.91669 7.49984Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="facesmile-clip0_118_45993">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
