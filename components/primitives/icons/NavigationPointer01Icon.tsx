import { clsx } from 'clsx';

export interface NavigationPointer01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function NavigationPointer01Icon({ size = 20, className, ...props }: NavigationPointer01IconProps) {
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
      <g clipPath="url(#navigationpointer01-clip0_118_51148)">
<path d="M2.84452 8.95375C2.3484 8.76083 2.10034 8.66433 2.02792 8.52533C1.96514 8.40483 1.96505 8.26128 2.0277 8.14072C2.09995 8.00163 2.3479 7.90487 2.8438 7.71134L16.9169 2.21939C17.3646 2.0447 17.5884 1.95736 17.7314 2.00513C17.8556 2.04663 17.9531 2.1441 17.9946 2.26831C18.0424 2.41133 17.9551 2.63516 17.7803 3.08281L12.2884 17.1559C12.0949 17.6518 11.9981 17.8998 11.859 17.972C11.7385 18.0347 11.5949 18.0346 11.4744 17.9718C11.3354 17.8994 11.2389 17.6513 11.046 17.1552L8.8559 11.5235C8.81673 11.4228 8.79715 11.3725 8.7669 11.3301C8.74006 11.2925 8.70723 11.2596 8.66965 11.2328C8.62723 11.2026 8.5769 11.183 8.47623 11.1438L2.84452 8.95375Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="navigationpointer01-clip0_118_51148">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
