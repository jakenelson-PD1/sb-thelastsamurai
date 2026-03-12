import { clsx } from 'clsx';

export interface RefreshCcw03IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function RefreshCcw03Icon({ size = 20, className, ...props }: RefreshCcw03IconProps) {
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
      <path d="M11.6667 1.66675C11.6667 1.66675 12.3743 1.76785 15.3033 4.69678C18.2323 7.62571 18.2323 12.3744 15.3033 15.3034C14.2656 16.3411 12.9994 17.0112 11.6667 17.3136M11.6667 1.66675H16.6667M11.6667 1.66675V6.66675M8.33333 18.3332C8.33333 18.3332 7.62563 18.2322 4.6967 15.3032C1.76777 12.3742 1.76777 7.62555 4.6967 4.69661C5.73443 3.65889 7.0006 2.98883 8.33333 2.68644M8.33333 18.3332L3.33333 18.3334M8.33333 18.3332V13.3334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
