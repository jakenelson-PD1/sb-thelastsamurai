import { clsx } from 'clsx';

export interface Link01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function Link01Icon({ size = 20, className, ...props }: Link01IconProps) {
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
      <path d="M10.5896 15.3032L9.41106 16.4817C7.78391 18.109 5.14573 18.109 3.51854 16.4817C1.89136 14.8545 1.89136 12.2164 3.51854 10.5892L4.69705 9.41071M15.3036 10.5892L16.4821 9.41071C18.1093 7.78349 18.1093 5.1453 16.4821 3.51812C14.855 1.89093 12.2168 1.89093 10.5896 3.51812L9.41106 4.69663M7.08369 12.9165L12.9171 7.08324" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
