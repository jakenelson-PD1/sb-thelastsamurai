import { clsx } from 'clsx';

export interface RightIndent01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function RightIndent01Icon({ size = 20, className, ...props }: RightIndent01IconProps) {
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
      <path d="M17.5 3.33325H2.5M17.5 16.6666H2.5M10 7.70825H2.5M10 12.2916H2.5M16.4333 7.04992L13.2111 9.46658C12.9698 9.6475 12.8492 9.738 12.8061 9.84892C12.7683 9.946 12.7683 10.0538 12.8061 10.1509C12.8492 10.2618 12.9698 10.3523 13.2111 10.5333L16.4333 12.9499C16.7767 13.2074 16.9483 13.3362 17.092 13.3332C17.217 13.3306 17.3343 13.2719 17.4114 13.1734C17.5 13.0603 17.5 12.8458 17.5 12.4166V7.58325C17.5 7.15411 17.5 6.93953 17.4114 6.82638C17.3343 6.7279 17.217 6.66928 17.092 6.66668C16.9483 6.66368 16.7767 6.79244 16.4333 7.04992Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
