import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface AirplayIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function AirplayIcon({ size = 'md', className, ...props }: AirplayIconProps) {
  const px = resolveIconSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('inline-block', className)}
      aria-hidden={!props['aria-label']}
      {...props}
    >
      <path d="M4.16666 15C2.78596 15 1.66666 13.8807 1.66666 12.5V6.5C1.66666 5.09987 1.66666 4.3998 1.93915 3.86503C2.17883 3.39462 2.56128 3.01217 3.03169 2.77248C3.56646 2.5 4.26653 2.5 5.66666 2.5H14.3333C15.7335 2.5 16.4335 2.5 16.9683 2.77248C17.4387 3.01217 17.8212 3.39462 18.0608 3.86503C18.3333 4.3998 18.3333 5.09987 18.3333 6.5V12.5C18.3333 13.8807 17.2141 15 15.8333 15M7.25669 17.5H12.7433C13.1973 17.5 13.4244 17.5 13.5389 17.4074C13.6386 17.3269 13.6956 17.2051 13.6937 17.0771C13.6915 16.9297 13.5462 16.7553 13.2554 16.4066L10.5122 13.1146C10.3362 12.9035 10.2483 12.798 10.143 12.7595C10.0507 12.7258 9.94933 12.7258 9.857 12.7595C9.75166 12.798 9.66375 12.9035 9.48783 13.1146L6.74455 16.4066C6.45387 16.7553 6.30853 16.9297 6.30631 17.0771C6.30438 17.2051 6.36144 17.3269 6.46105 17.4074C6.57562 17.5 6.80265 17.5 7.25669 17.5Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
