import { clsx } from 'clsx';

export interface RightIndent02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function RightIndent02Icon({ size = 20, className, ...props }: RightIndent02IconProps) {
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
      <path d="M10 7.70821H2.5M10 3.33321H2.5M17.5 12.2916H2.5M17.5 16.6666H2.5M16.4333 2.46654L13.2111 4.88321C12.9698 5.06414 12.8492 5.15461 12.8061 5.26552C12.7683 5.36266 12.7683 5.47044 12.8061 5.56758C12.8492 5.67848 12.9698 5.76894 13.2111 5.94988L16.4333 8.36659C16.7767 8.624 16.9483 8.75275 17.092 8.74975C17.217 8.74717 17.3343 8.68859 17.4114 8.59009C17.5 8.47692 17.5 8.26236 17.5 7.83321V2.99988C17.5 2.57074 17.5 2.35616 17.4114 2.243C17.3343 2.14454 17.217 2.0859 17.092 2.0833C16.9483 2.08032 16.7767 2.20906 16.4333 2.46654Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
