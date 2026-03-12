import { clsx } from 'clsx';

export interface Strikethrough01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Strikethrough01Icon({ size = 20, className, ...props }: Strikethrough01IconProps) {
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
      <path d="M5 13.3333C5 15.1742 6.49238 16.6666 8.33333 16.6666H11.6667C13.5076 16.6666 15 15.1742 15 13.3333C15 11.4923 13.5076 9.99992 11.6667 9.99992M15 6.66659C15 4.82564 13.5076 3.33325 11.6667 3.33325H8.33333C6.49238 3.33325 5 4.82564 5 6.66659M2.5 9.99992H17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
