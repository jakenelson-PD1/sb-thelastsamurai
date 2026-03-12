import { clsx } from 'clsx';

export interface Building06IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Building06Icon({ size = 20, className, ...props }: Building06IconProps) {
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
      <path d="M9.16667 9.16667H5.16667C4.23325 9.16667 3.76654 9.16667 3.41002 9.34833C3.09641 9.50808 2.84145 9.76308 2.68166 10.0767C2.50001 10.4332 2.50001 10.8999 2.50001 11.8333V17.5M17.5 17.5V5.16667C17.5 4.23325 17.5 3.76653 17.3183 3.41002C17.1586 3.09641 16.9036 2.84144 16.59 2.68166C16.2335 2.5 15.7668 2.5 14.8333 2.5H11.8333C10.8999 2.5 10.4332 2.5 10.0767 2.68166C9.76309 2.84144 9.50809 3.09641 9.34834 3.41002C9.16667 3.76653 9.16667 4.23325 9.16667 5.16667V17.5M18.3333 17.5H1.66667M12.0833 5.83333H14.5833M12.0833 9.16667H14.5833M12.0833 12.5H14.5833" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
