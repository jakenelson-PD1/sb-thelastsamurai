import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Send01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Send01Icon({ size = 'md', className, ...props }: Send01IconProps) {
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
      <g clipPath="url(#send01-clip0_118_41277)">
<path d="M8.74956 11.2502L17.4996 2.50014M8.8559 11.5235L11.046 17.1552C11.2389 17.6514 11.3354 17.8994 11.4744 17.9718C11.5949 18.0346 11.7385 18.0347 11.859 17.972C11.9981 17.8998 12.0949 17.6519 12.2884 17.1559L17.7803 3.08281C17.9551 2.63516 18.0424 2.41133 17.9946 2.26831C17.9531 2.1441 17.8556 2.04663 17.7314 2.00513C17.5884 1.95736 17.3646 2.0447 16.9169 2.21939L2.8438 7.71134C2.3479 7.90487 2.09995 8.00163 2.0277 8.14071C1.96505 8.26128 1.96514 8.40485 2.02792 8.52535C2.10034 8.66435 2.3484 8.76077 2.84452 8.95377L8.47623 11.1439C8.5769 11.183 8.62723 11.2026 8.66965 11.2329C8.70723 11.2596 8.74006 11.2925 8.7669 11.3301C8.79715 11.3724 8.81673 11.4229 8.8559 11.5235Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="send01-clip0_118_41277">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
