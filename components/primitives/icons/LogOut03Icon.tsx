import { clsx } from 'clsx';

export interface LogOut03IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function LogOut03Icon({ size = 20, className, ...props }: LogOut03IconProps) {
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
      <path d="M13.3333 14.1666L17.5 9.99994M17.5 9.99994L13.3333 5.8333M17.5 9.99994H7.5M10 14.1666C10 14.4129 10 14.5361 9.99083 14.6428C9.89567 15.7516 9.07908 16.664 7.98752 16.881C7.88252 16.9019 7.76002 16.9155 7.51529 16.9427L6.66412 17.0373C5.3854 17.1794 4.74601 17.2504 4.23805 17.0879C3.56077 16.8711 3.00785 16.3763 2.71765 15.727C2.5 15.2401 2.5 14.5969 2.5 13.3102V6.68972C2.5 5.4031 2.5 4.7598 2.71765 4.2729C3.00785 3.6237 3.56077 3.1288 4.23805 2.91208C4.74601 2.74953 5.38538 2.82057 6.66412 2.96265L7.51529 3.05723C7.7601 3.08443 7.88251 3.09803 7.98752 3.11891C9.07908 3.33594 9.89567 4.24834 9.99083 5.35714C10 5.46383 10 5.58699 10 5.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
