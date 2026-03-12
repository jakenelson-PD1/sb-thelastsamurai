import { clsx } from 'clsx';

export interface Percent01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Percent01Icon({ size = 20, className, ...props }: Percent01IconProps) {
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
      <path d="M15.8333 4.16669L4.16666 15.8334M6.24999 5.41669C6.24999 5.87692 5.87689 6.25002 5.41666 6.25002C4.95642 6.25002 4.58332 5.87692 4.58332 5.41669C4.58332 4.95645 4.95642 4.58335 5.41666 4.58335C5.87689 4.58335 6.24999 4.95645 6.24999 5.41669ZM15.4167 14.5834C15.4167 15.0436 15.0436 15.4167 14.5833 15.4167C14.1231 15.4167 13.75 15.0436 13.75 14.5834C13.75 14.1231 14.1231 13.75 14.5833 13.75C15.0436 13.75 15.4167 14.1231 15.4167 14.5834Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
