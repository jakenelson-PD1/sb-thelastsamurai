import { clsx } from 'clsx';

export interface GraduationHat01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function GraduationHat01Icon({ size = 20, className, ...props }: GraduationHat01IconProps) {
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
      <path d="M4.16669 8.33334V13.3426C4.16669 13.6418 4.16669 13.7913 4.21223 13.9233C4.25251 14.0401 4.31825 14.1465 4.40467 14.2347C4.50241 14.3345 4.63619 14.4014 4.90374 14.5352L9.40377 16.7852C9.62235 16.8945 9.73169 16.9492 9.84635 16.9707C9.94794 16.9897 10.0521 16.9897 10.1537 16.9707C10.2684 16.9492 10.3777 16.8945 10.5963 16.7852L15.0963 14.5352C15.3639 14.4014 15.4976 14.3345 15.5954 14.2347C15.6818 14.1465 15.7475 14.0401 15.7878 13.9233C15.8334 13.7913 15.8334 13.6418 15.8334 13.3426V8.33334M1.66669 7.0833L9.70185 3.06571C9.81119 3.01105 9.86585 2.98372 9.92319 2.97297C9.97394 2.96344 10.0261 2.96344 10.0769 2.97297C10.1342 2.98372 10.1889 3.01105 10.2982 3.06571L18.3334 7.0833L10.2982 11.1009C10.1889 11.1556 10.1342 11.1829 10.0769 11.1937C10.0261 11.2032 9.97394 11.2032 9.92319 11.1937C9.86585 11.1829 9.81119 11.1556 9.70185 11.1009L1.66669 7.0833Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
