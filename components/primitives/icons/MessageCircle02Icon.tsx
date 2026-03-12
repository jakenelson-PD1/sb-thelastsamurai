import { clsx } from 'clsx';

export interface MessageCircle02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function MessageCircle02Icon({ size = 20, className, ...props }: MessageCircle02IconProps) {
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
      <path d="M17.5 10C17.5 14.1422 14.1422 17.5 10 17.5C9.00242 17.5 8.05025 17.3052 7.17957 16.9516C7.01293 16.8839 6.92962 16.8501 6.86227 16.835C6.79638 16.8202 6.74763 16.8148 6.68011 16.8148C6.61108 16.8148 6.53591 16.8273 6.38554 16.8524L3.42063 17.3466C3.11015 17.3983 2.95491 17.4242 2.84265 17.376C2.7444 17.3339 2.66611 17.2556 2.62397 17.1573C2.57582 17.0451 2.60169 16.8898 2.65344 16.5793L3.14759 13.6145C3.17265 13.4641 3.18518 13.3889 3.18518 13.3199C3.18517 13.2523 3.17977 13.2036 3.165 13.1377C3.1499 13.0704 3.11606 12.9871 3.04838 12.8204C2.69478 11.9497 2.5 10.9976 2.5 10C2.5 5.85787 5.85787 2.5 10 2.5C14.1422 2.5 17.5 5.85787 17.5 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
