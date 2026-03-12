import { clsx } from 'clsx';

export interface BellRinging02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function BellRinging02Icon({ size = 20, className, ...props }: BellRinging02IconProps) {
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
      <path d="M11.6669 17.4998H8.33358M1.91178 4.84975C1.89982 3.64029 2.55189 2.51088 3.60529 1.9165M18.0854 4.84975C18.0974 3.6403 17.4453 2.51088 16.3919 1.9165M15.0002 6.6665C15.0002 5.34042 14.4735 4.06865 13.5358 3.13097C12.5981 2.19329 11.3263 1.6665 10.0002 1.6665C8.67417 1.6665 7.4024 2.19329 6.46472 3.13097C5.52703 4.06865 5.00025 5.34042 5.00025 6.6665C5.00025 9.24167 4.35064 11.0048 3.62497 12.171C3.01285 13.1548 2.7068 13.6466 2.71802 13.7838C2.73044 13.9358 2.76263 13.9937 2.88506 14.0845C2.99563 14.1665 3.49407 14.1665 4.49096 14.1665H15.5095C16.5064 14.1665 17.0048 14.1665 17.1154 14.0845C17.2378 13.9937 17.2701 13.9358 17.2825 13.7838C17.2937 13.6466 16.9877 13.1548 16.3755 12.171C15.6498 11.0048 15.0002 9.24167 15.0002 6.6665Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
