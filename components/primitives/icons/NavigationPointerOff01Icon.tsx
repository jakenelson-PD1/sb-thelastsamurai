import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface NavigationPointerOff01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function NavigationPointerOff01Icon({ size = 'md', className, ...props }: NavigationPointerOff01IconProps) {
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
      <g clipPath="url(#navigationpointeroff01-clip0_118_51174)">
<path d="M9.4475 5.13429L16.9169 2.21939C17.3646 2.0447 17.5884 1.95736 17.7314 2.00513C17.8557 2.04663 17.9531 2.1441 17.9946 2.26831C18.0424 2.41133 17.9551 2.63516 17.7803 3.08281L14.8562 10.5761M13.6548 13.6548L12.2884 17.1559C12.0949 17.6518 11.9981 17.8998 11.859 17.972C11.7385 18.0347 11.5949 18.0346 11.4744 17.9718C11.3354 17.8994 11.2389 17.6513 11.046 17.1552L8.85592 11.5235C8.81675 11.4228 8.79717 11.3725 8.76692 11.3301C8.74008 11.2925 8.70725 11.2596 8.66967 11.2328C8.62725 11.2026 8.57692 11.183 8.47625 11.1438L2.84454 8.95375C2.34843 8.76083 2.10036 8.66433 2.02794 8.52533C1.96516 8.40483 1.96508 8.26128 2.02772 8.14071C2.09998 8.00163 2.34792 7.90487 2.84382 7.71134L6.3479 6.3439M17.4996 17.5002L2.4996 2.50014" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="navigationpointeroff01-clip0_118_51174">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
