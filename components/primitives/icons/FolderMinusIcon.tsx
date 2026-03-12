import { clsx } from 'clsx';

export interface FolderMinusIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function FolderMinusIcon({ size = 20, className, ...props }: FolderMinusIconProps) {
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
      <path d="M10.8333 5.83333L9.90375 3.9741C9.63616 3.439 9.50241 3.17144 9.30283 2.97597C9.12633 2.80311 8.91358 2.67164 8.68008 2.59109C8.416 2.5 8.11684 2.5 7.51857 2.5H4.33333C3.39991 2.5 2.9332 2.5 2.57668 2.68166C2.26307 2.84144 2.00811 3.09641 1.84832 3.41002C1.66666 3.76653 1.66666 4.23325 1.66666 5.16667V5.83333M1.66666 5.83333H14.3333C15.7335 5.83333 16.4335 5.83333 16.9683 6.10582C17.4387 6.3455 17.8212 6.72795 18.0608 7.19836C18.3333 7.73313 18.3333 8.43317 18.3333 9.83333V13.5C18.3333 14.9002 18.3333 15.6002 18.0608 16.135C17.8212 16.6054 17.4387 16.9878 16.9683 17.2275C16.4335 17.5 15.7335 17.5 14.3333 17.5H5.66666C4.26653 17.5 3.56646 17.5 3.03169 17.2275C2.56128 16.9878 2.17883 16.6054 1.93915 16.135C1.66666 15.6002 1.66666 14.9002 1.66666 13.5V5.83333ZM7.5 11.6667H12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
