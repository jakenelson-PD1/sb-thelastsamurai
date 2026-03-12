import { clsx } from 'clsx';

export interface DeleteIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function DeleteIcon({ size = 20, className, ...props }: DeleteIconProps) {
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
      <path d="M14.1667 7.49992L9.16667 12.4999M9.16667 7.49992L14.1667 12.4999M2.26667 10.7999L5.86667 15.5999C6.16 15.991 6.30667 16.1866 6.49254 16.3276C6.65717 16.4526 6.8436 16.5458 7.04231 16.6025C7.26667 16.6666 7.51112 16.6666 8 16.6666H14.3333C15.7335 16.6666 16.4335 16.6666 16.9683 16.3941C17.4388 16.1544 17.8212 15.772 18.0608 15.3016C18.3333 14.7668 18.3333 14.0668 18.3333 12.6666V7.33325C18.3333 5.93312 18.3333 5.23305 18.0608 4.69828C17.8212 4.22787 17.4388 3.84542 16.9683 3.60574C16.4335 3.33325 15.7335 3.33325 14.3333 3.33325H8C7.51112 3.33325 7.26667 3.33325 7.04231 3.39733C6.8436 3.45408 6.65717 3.54729 6.49254 3.67221C6.30667 3.81325 6.16 4.00881 5.86667 4.39992L2.26667 9.19992C2.05151 9.48684 1.94393 9.63025 1.90245 9.78775C1.86585 9.92684 1.86585 10.073 1.90245 10.2121C1.94393 10.3696 2.05151 10.513 2.26667 10.7999Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
