import { clsx } from 'clsx';

export interface LineHeightIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function LineHeightIcon({ size = 20, className, ...props }: LineHeightIconProps) {
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
      <path d="M7.5 10.8333H12.5M5.83333 14.1667L9.39308 6.3352C9.58592 5.91102 9.68233 5.69893 9.81592 5.63313C9.932 5.57596 10.068 5.57596 10.1841 5.63313C10.3177 5.69893 10.4141 5.91102 10.6069 6.3352L14.1667 14.1667M17.5 17.5H2.5M17.5 2.5H2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
