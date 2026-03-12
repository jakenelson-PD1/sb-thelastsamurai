import { clsx } from 'clsx';

export interface UsersEditIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function UsersEditIcon({ size = 20, className, ...props }: UsersEditIconProps) {
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
      <path d="M9.16666 12.5H6.66666C5.11351 12.5 4.33695 12.5 3.72438 12.7538C2.90761 13.0921 2.25871 13.741 1.92039 14.5578C1.66666 15.1703 1.66666 15.9468 1.66666 17.5M12.9167 2.7423C14.1382 3.23679 15 4.43443 15 5.83333M9.99991 17.9167L11.6875 17.5792C11.8346 17.5498 11.9082 17.535 11.9767 17.5081C12.0377 17.4843 12.0956 17.4533 12.1492 17.4158C12.2097 17.3737 12.2627 17.3207 12.3688 17.2145L17.9167 11.6667C18.377 11.2064 18.3769 10.4603 17.9167 10C17.4564 9.53975 16.7102 9.53975 16.25 10L10.7021 15.5479C10.596 15.654 10.543 15.707 10.5008 15.7675C10.4634 15.8211 10.4324 15.879 10.4085 15.9398C10.3817 16.0085 10.3669 16.082 10.3375 16.2292L9.99991 17.9167ZM11.25 5.83333C11.25 7.67428 9.75757 9.16667 7.91666 9.16667C6.07571 9.16667 4.58332 7.67428 4.58332 5.83333C4.58332 3.99238 6.07571 2.5 7.91666 2.5C9.75757 2.5 11.25 3.99238 11.25 5.83333Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
