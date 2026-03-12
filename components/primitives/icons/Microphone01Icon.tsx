import { clsx } from 'clsx';

export interface Microphone01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Microphone01Icon({ size = 20, className, ...props }: Microphone01IconProps) {
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
      <path d="M15.8333 8.33317V9.99984C15.8333 13.2215 13.2217 15.8332 9.99999 15.8332M9.99999 15.8332C6.77833 15.8332 4.16666 13.2215 4.16666 9.99984V8.33317M9.99999 15.8332V18.3332M6.66666 18.3332H13.3333M9.99999 12.4998C8.61924 12.4998 7.49999 11.3806 7.49999 9.99984V4.1665C7.49999 2.7858 8.61924 1.6665 9.99999 1.6665C11.3807 1.6665 12.5 2.7858 12.5 4.1665V9.99984C12.5 11.3806 11.3807 12.4998 9.99999 12.4998Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
