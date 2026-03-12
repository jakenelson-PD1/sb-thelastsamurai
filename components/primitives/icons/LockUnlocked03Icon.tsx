import { clsx } from 'clsx';

export interface LockUnlocked03IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function LockUnlocked03Icon({ size = 20, className, ...props }: LockUnlocked03IconProps) {
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
      <path d="M5.83331 9.16667V6.66667C5.83331 4.36548 7.6988 2.5 9.99998 2.5C12.0158 2.5 13.6972 3.93147 14.0833 5.83333M7.33331 17.5H12.6666C14.0668 17.5 14.7668 17.5 15.3016 17.2275C15.7721 16.9878 16.1545 16.6054 16.3941 16.135C16.6666 15.6002 16.6666 14.9002 16.6666 13.5V13.1667C16.6666 11.7665 16.6666 11.0665 16.3941 10.5317C16.1545 10.0612 15.7721 9.67883 15.3016 9.43917C14.7668 9.16667 14.0668 9.16667 12.6666 9.16667H7.33331C5.93318 9.16667 5.23311 9.16667 4.69834 9.43917C4.22793 9.67883 3.84548 10.0612 3.6058 10.5317C3.33331 11.0665 3.33331 11.7665 3.33331 13.1667V13.5C3.33331 14.9002 3.33331 15.6002 3.6058 16.135C3.84548 16.6054 4.22793 16.9878 4.69834 17.2275C5.23311 17.5 5.93318 17.5 7.33331 17.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
