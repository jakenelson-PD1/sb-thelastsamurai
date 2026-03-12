import { clsx } from 'clsx';

export interface Building04IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Building04Icon({ size = 20, className, ...props }: Building04IconProps) {
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
      <path d="M7.91665 5.83333H12.0833M7.91665 9.16667H12.0833M7.91665 12.5H12.0833M15 17.5V5.16667C15 4.23325 15 3.76653 14.8183 3.41002C14.6586 3.09641 14.4036 2.84144 14.09 2.68166C13.7335 2.5 13.2667 2.5 12.3333 2.5H7.66665C6.73323 2.5 6.26651 2.5 5.91 2.68166C5.59639 2.84144 5.34142 3.09641 5.18164 3.41002C4.99998 3.76653 4.99998 4.23325 4.99998 5.16667V17.5M16.6666 17.5H3.33331" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
