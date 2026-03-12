import { clsx } from 'clsx';

export interface LetterSpacing01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function LetterSpacing01Icon({ size = 20, className, ...props }: LetterSpacing01IconProps) {
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
      <path d="M7.5 10.8333H12.5M5.83333 14.1667L9.39308 6.33521C9.58592 5.91103 9.68233 5.69893 9.81592 5.63313C9.932 5.57596 10.068 5.57596 10.1841 5.63313C10.3177 5.69893 10.4141 5.91103 10.6069 6.33521L14.1667 14.1667M17.5 2.5V17.5M2.5 2.5V17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
