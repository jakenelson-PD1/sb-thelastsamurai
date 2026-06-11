import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Laptop02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Laptop02Icon({ size = 'md', className, ...props }: Laptop02IconProps) {
  const px = resolveIconSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('inline-block', className)}
      aria-hidden={!props['aria-label']}
      {...props}
    >
      <path d="M17.5 13.3335V6.00016C17.5 5.06675 17.5 4.60003 17.3184 4.24351C17.1586 3.9299 16.9036 3.67494 16.59 3.51515C16.2335 3.3335 15.7668 3.3335 14.8334 3.3335H5.16669C4.23326 3.3335 3.76655 3.3335 3.41004 3.51515C3.09643 3.67494 2.84146 3.9299 2.68168 4.24351C2.50002 4.60003 2.50002 5.06675 2.50002 6.00016V13.3335M3.88891 16.6668H16.1111C16.6278 16.6668 16.8861 16.6668 17.098 16.6101C17.6732 16.4559 18.1224 16.0067 18.2766 15.4315C18.3334 15.2196 18.3334 14.9612 18.3334 14.4446C18.3334 14.1862 18.3334 14.0571 18.3049 13.9512C18.2279 13.6636 18.0033 13.4389 17.7157 13.3619C17.6098 13.3335 17.4806 13.3335 17.2223 13.3335H2.7778C2.51947 13.3335 2.39031 13.3335 2.28434 13.3619C1.99676 13.4389 1.77214 13.6636 1.69508 13.9512C1.66669 14.0571 1.66669 14.1862 1.66669 14.4446C1.66669 14.9612 1.66669 15.2196 1.72348 15.4315C1.87759 16.0067 2.32684 16.4559 2.90199 16.6101C3.11393 16.6668 3.37226 16.6668 3.88891 16.6668Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
