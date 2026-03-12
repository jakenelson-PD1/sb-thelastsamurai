import { clsx } from 'clsx';

export interface Atom01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Atom01Icon({ size = 20, className, ...props }: Atom01IconProps) {
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
      <path d="M9.99959 10.0003H10.0079M12.9458 12.9467C9.04067 16.8519 4.55571 18.6986 2.92853 17.0714C1.30135 15.4442 3.14808 10.9593 7.05332 7.05409C10.9586 3.14884 15.4435 1.30211 17.0707 2.92929C18.6978 4.55648 16.8511 9.04141 12.9458 12.9467ZM12.9458 7.05394C16.8511 10.9592 18.6978 15.4441 17.0707 17.0712C15.4434 18.6985 10.9585 16.8517 7.05329 12.9465C3.14804 9.04124 1.30131 4.55633 2.9285 2.92914C4.55568 1.30196 9.04059 3.14869 12.9458 7.05394ZM10.4163 10.0003C10.4163 10.2305 10.2298 10.417 9.99959 10.417C9.7695 10.417 9.58292 10.2305 9.58292 10.0003C9.58292 9.77024 9.7695 9.58366 9.99959 9.58366C10.2298 9.58366 10.4163 9.77024 10.4163 10.0003Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
