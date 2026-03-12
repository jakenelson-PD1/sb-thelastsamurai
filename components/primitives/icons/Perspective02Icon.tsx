import { clsx } from 'clsx';

export interface Perspective02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Perspective02Icon({ size = 20, className, ...props }: Perspective02IconProps) {
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
      <path d="M13.3333 4.16664V15.8333M8.33333 3.33331V16.6667M2.5 10H17.5M2.5 4.99095V15.009C2.5 16.1457 2.5 16.714 2.73445 17.108C2.94002 17.4534 3.2635 17.7129 3.64528 17.8387C4.08071 17.982 4.63552 17.8588 5.74515 17.6122L15.4118 15.464C16.1569 15.2984 16.5295 15.2157 16.8076 15.0153C17.0528 14.8386 17.2454 14.5985 17.3647 14.3207C17.5 14.0058 17.5 13.6242 17.5 12.8608V7.1391C17.5 6.37583 17.5 5.99418 17.3647 5.67925C17.2454 5.40147 17.0528 5.16136 16.8076 4.98465C16.5295 4.7843 16.1569 4.70151 15.4118 4.53594L5.74515 2.38778C4.63552 2.1412 4.08071 2.01791 3.64528 2.16132C3.2635 2.28706 2.94002 2.54655 2.73445 2.89196C2.5 3.2859 2.5 3.85425 2.5 4.99095Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
