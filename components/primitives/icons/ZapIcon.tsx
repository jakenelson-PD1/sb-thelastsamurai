import { clsx } from 'clsx';

export interface ZapIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ZapIcon({ size = 20, className, ...props }: ZapIconProps) {
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
      <path d="M10.8333 1.66669L3.41121 10.5733C3.12054 10.922 2.9752 11.0964 2.97298 11.2438C2.97105 11.3718 3.02811 11.4936 3.12771 11.5741C3.24229 11.6667 3.46931 11.6667 3.92336 11.6667H10L9.16668 18.3334L16.5888 9.42677C16.8794 9.07802 17.0248 8.9036 17.027 8.75627C17.0289 8.62827 16.9719 8.50644 16.8723 8.42594C16.7577 8.33335 16.5307 8.33335 16.0767 8.33335H10L10.8333 1.66669Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
