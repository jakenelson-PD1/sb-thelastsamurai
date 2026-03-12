import { clsx } from 'clsx';

export interface MoonStarIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function MoonStarIcon({ size = 20, className, ...props }: MoonStarIconProps) {
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
      <g clipPath="url(#moonstar-clip0_118_52083)">
<path d="M15 1.66699L15.5149 2.69664C15.7361 3.13913 15.8467 3.36037 15.9945 3.55208C16.1256 3.72221 16.2781 3.87472 16.4483 4.00586C16.6399 4.15363 16.8612 4.26426 17.3037 4.4855L18.3334 5.00033L17.3037 5.51515C16.8612 5.73639 16.6399 5.84702 16.4483 5.99479C16.2781 6.12593 16.1256 6.27844 15.9945 6.44857C15.8467 6.64028 15.7361 6.86153 15.5149 7.30401L15 8.33366L14.4852 7.30401C14.2639 6.86153 14.1534 6.64028 14.0055 6.44857C13.8744 6.27844 13.7219 6.12593 13.5518 5.99479C13.3601 5.84702 13.1389 5.73639 12.6964 5.51515L11.6667 5.00033L12.6964 4.4855C13.1389 4.26426 13.3601 4.15363 13.5518 4.00586C13.7219 3.87472 13.8744 3.72221 14.0055 3.55208C14.1534 3.36037 14.2639 3.13913 14.4852 2.69664L15 1.66699Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5 11.1578C16.4075 13.0742 14.3454 14.3662 11.9816 14.3662C8.47594 14.3662 5.63398 11.5243 5.63398 8.01861C5.63398 5.65462 6.92626 3.59245 8.84294 2.5C4.81651 2.88177 1.66669 6.27243 1.66669 10.3988C1.66669 14.7809 5.21912 18.3333 9.60127 18.3333C13.7274 18.3333 17.1179 15.1838 17.5 11.1578Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="moonstar-clip0_118_52083">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
