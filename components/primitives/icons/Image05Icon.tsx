import { clsx } from 'clsx';

export interface Image05IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Image05Icon({ size = 20, className, ...props }: Image05IconProps) {
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
      <path d="M15.8333 17.5H16.6753C17.4847 17.5 17.8892 17.5 18.1123 17.3313C18.3067 17.1843 18.4269 16.9596 18.4414 16.7163C18.4581 16.4372 18.2337 16.1004 17.7847 15.4271L15.2761 11.6641C14.9052 11.1077 14.7197 10.8295 14.4859 10.7326C14.2815 10.6477 14.0518 10.6477 13.8474 10.7326C13.6137 10.8295 13.4282 11.1077 13.0572 11.6641L12.4371 12.5943M15.8333 17.5L9.42958 8.25015C9.06133 7.71818 8.87716 7.4522 8.64716 7.3587C8.44591 7.2769 8.22075 7.2769 8.01953 7.3587C7.78951 7.4522 7.60537 7.71818 7.23709 8.25015L2.28185 15.4077C1.81265 16.0854 1.57806 16.4243 1.59142 16.7061C1.60305 16.9516 1.7224 17.1793 1.91757 17.3286C2.14168 17.5 2.55382 17.5 3.3781 17.5H15.8333ZM17.5 5C17.5 6.38071 16.3807 7.5 15 7.5C13.6193 7.5 12.5 6.38071 12.5 5C12.5 3.61929 13.6193 2.5 15 2.5C16.3807 2.5 17.5 3.61929 17.5 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
