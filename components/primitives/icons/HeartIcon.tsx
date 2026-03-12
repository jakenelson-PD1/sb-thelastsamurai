import { clsx } from 'clsx';

export interface HeartIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function HeartIcon({ size = 20, className, ...props }: HeartIconProps) {
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
      <path fillRule="evenodd" clipRule="evenodd" d="M9.99432 4.27984C8.32816 2.332 5.54978 1.80804 3.46223 3.59168C1.37469 5.37532 1.0808 8.3575 2.72016 10.467C4.08317 12.2209 8.20813 15.9201 9.56007 17.1173C9.71132 17.2513 9.78699 17.3183 9.87516 17.3446C9.95216 17.3676 10.0364 17.3676 10.1134 17.3446C10.2016 17.3183 10.2772 17.2513 10.4285 17.1173C11.7804 15.9201 15.9054 12.2209 17.2684 10.467C18.9077 8.3575 18.6497 5.35656 16.5263 3.59168C14.4029 1.8268 11.6604 2.332 9.99432 4.27984Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
