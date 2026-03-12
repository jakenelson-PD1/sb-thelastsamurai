import { clsx } from 'clsx';

export interface Cursor02IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Cursor02Icon({ size = 20, className, ...props }: Cursor02IconProps) {
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
      <path d="M17.088 8.97958C17.6021 8.77966 17.8592 8.67966 17.9313 8.53833C17.9938 8.41591 17.9919 8.27046 17.9262 8.1497C17.8504 8.0103 17.5908 7.91711 17.0717 7.73075L3.83024 2.97741C3.4055 2.82494 3.19313 2.7487 3.05428 2.79679C2.93358 2.83859 2.83871 2.93345 2.79691 3.05416C2.74883 3.193 2.82507 3.40537 2.97753 3.83012L7.73083 17.0716C7.9172 17.5907 8.01038 17.8503 8.14978 17.9262C8.27054 17.9918 8.41592 17.9937 8.53842 17.9312C8.67975 17.8591 8.77967 17.602 8.97967 17.0879L11.1437 11.5232C11.1828 11.4226 11.2024 11.3722 11.2327 11.3298C11.2595 11.2922 11.2923 11.2594 11.3299 11.2326C11.3723 11.2023 11.4227 11.1827 11.5233 11.1436L17.088 8.97958Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
