import { clsx } from 'clsx';

export interface Flag03IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Flag03Icon({ size = 20, className, ...props }: Flag03IconProps) {
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
      <path d="M3.33334 10.8333H16.3225C16.7079 10.8333 16.9007 10.8333 17.0107 10.7525C17.1067 10.6821 17.1679 10.5739 17.1789 10.4553C17.1917 10.3194 17.0925 10.1542 16.8942 9.82367L15.2058 7.00967C15.131 6.88496 15.0936 6.8226 15.0789 6.75603C15.066 6.69716 15.066 6.63617 15.0789 6.5773C15.0936 6.51073 15.131 6.44837 15.2058 6.32367L16.8942 3.50967C17.0925 3.17919 17.1917 3.01395 17.1789 2.87799C17.1679 2.75944 17.1067 2.65128 17.0107 2.58082C16.9007 2.5 16.7079 2.5 16.3225 2.5H3.33334V17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
