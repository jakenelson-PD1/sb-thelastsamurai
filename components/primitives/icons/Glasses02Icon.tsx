import { clsx } from 'clsx';

export interface Glasses02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Glasses02Icon({ size = 20, className, ...props }: Glasses02IconProps) {
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
      <path d="M8.33335 12.1126C9.36127 11.5185 10.6386 11.5185 11.6666 12.1126M1.66669 12.5003L2.25126 6.65458C2.27342 6.43295 2.2845 6.32213 2.3015 6.22706C2.50187 5.10618 3.43435 4.26229 4.56962 4.17444C4.66591 4.16699 4.77728 4.16699 5.00002 4.16699M18.3334 12.5003L17.7488 6.65458C17.7266 6.43296 17.7155 6.32213 17.6985 6.22706C17.4982 5.10618 16.5657 4.26229 15.4304 4.17444C15.3341 4.16699 15.2228 4.16699 15 4.16699M7.35705 10.1433C8.65877 11.4451 8.65877 13.5556 7.35705 14.8573C6.0553 16.1591 3.94475 16.1591 2.643 14.8573C1.34125 13.5556 1.34125 11.4451 2.643 10.1433C3.94474 8.84158 6.0553 8.84158 7.35705 10.1433ZM17.357 10.1433C18.6588 11.4451 18.6588 13.5556 17.357 14.8573C16.0553 16.1591 13.9448 16.1591 12.643 14.8573C11.3413 13.5556 11.3413 11.4451 12.643 10.1433C13.9448 8.84158 16.0553 8.84158 17.357 10.1433Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
