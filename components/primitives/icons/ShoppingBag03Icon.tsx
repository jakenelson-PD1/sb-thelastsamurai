import { clsx } from 'clsx';

export interface ShoppingBag03IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function ShoppingBag03Icon({ size = 20, className, ...props }: ShoppingBag03IconProps) {
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
      <path d="M13.333 6.66667C13.333 7.55072 12.9818 8.39858 12.3567 9.02367C11.7316 9.64883 10.8838 10 9.99968 10C9.11559 10 8.26777 9.64883 7.64264 9.02367C7.01753 8.39858 6.66634 7.55072 6.66634 6.66667M3.02735 6.16782L2.44402 13.1678C2.3187 14.6716 2.25604 15.4235 2.51024 16.0035C2.73357 16.5131 3.12053 16.9337 3.60982 17.1985C4.16673 17.5 4.92122 17.5 6.4302 17.5H13.5692C15.0781 17.5 15.8326 17.5 16.3895 17.1985C16.8788 16.9337 17.2658 16.5131 17.4891 16.0035C17.7433 15.4235 17.6806 14.6716 17.5553 13.1678L16.972 6.16782C16.8642 4.87396 16.8103 4.22702 16.5238 3.73738C16.2714 3.3062 15.8957 2.9605 15.4451 2.74487C14.9333 2.5 14.2842 2.5 12.9858 2.5H7.01354C5.71519 2.5 5.06602 2.5 4.55426 2.74487C4.10362 2.9605 3.72792 3.3062 3.4756 3.73738C3.18909 4.22702 3.13517 4.87396 3.02735 6.16782Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
