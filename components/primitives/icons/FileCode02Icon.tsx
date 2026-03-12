import { clsx } from 'clsx';

export interface FileCode02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function FileCode02Icon({ size = 20, className, ...props }: FileCode02IconProps) {
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
      <path d="M4.16665 15.4165C4.16665 15.8035 4.16665 15.997 4.18804 16.1595C4.33573 17.2813 5.2185 18.1641 6.34033 18.3118C6.50279 18.3332 6.6963 18.3332 7.08331 18.3332H13.5C14.9001 18.3332 15.6001 18.3332 16.135 18.0607C16.6054 17.821 16.9878 17.4386 17.2275 16.9682C17.5 16.4333 17.5 15.7333 17.5 14.3332V8.32335C17.5 7.71188 17.5 7.40615 17.4309 7.11842C17.3696 6.86334 17.2686 6.61947 17.1316 6.3958C16.977 6.1435 16.7608 5.9273 16.3284 5.49493L13.6716 2.83808C13.2391 2.4057 13.023 2.1895 12.7707 2.0349C12.547 1.89783 12.3031 1.79682 12.0481 1.73558C11.7603 1.6665 11.4546 1.6665 10.8431 1.6665H7.08331C6.6963 1.6665 6.50279 1.6665 6.34033 1.6879C5.2185 1.83559 4.33573 2.71835 4.18804 3.84019C4.16665 4.00265 4.16665 4.19615 4.16665 4.58317M7.49998 12.0832L9.58331 9.99984L7.49998 7.9165M4.16665 7.9165L2.08331 9.99984L4.16665 12.0832" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
