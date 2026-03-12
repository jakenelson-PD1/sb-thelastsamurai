import { clsx } from 'clsx';

export interface Award02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Award02Icon({ size = 20, className, ...props }: Award02IconProps) {
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
      <path d="M5.83333 12.5756V18.3337L9.75242 16.766C9.84383 16.7294 9.88958 16.7112 9.93683 16.7039C9.97867 16.6975 10.0213 16.6975 10.0632 16.7039C10.1104 16.7112 10.1562 16.7294 10.2476 16.766L14.1667 18.3337V12.5756M16.25 7.91699C16.25 11.3687 13.4517 14.167 10 14.167C6.54822 14.167 3.75 11.3687 3.75 7.91699C3.75 4.46521 6.54822 1.66699 10 1.66699C13.4517 1.66699 16.25 4.46521 16.25 7.91699Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
