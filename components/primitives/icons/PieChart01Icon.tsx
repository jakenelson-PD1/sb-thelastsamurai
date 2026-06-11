import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface PieChart01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function PieChart01Icon({ size = 'md', className, ...props }: PieChart01IconProps) {
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
      <g clipPath="url(#piechart01-clip0_118_48193)">
<path d="M17.6754 13.2416C17.1452 14.4954 16.316 15.6002 15.2603 16.4594C14.2045 17.3186 12.9544 17.9062 11.619 18.1706C10.2838 18.4351 8.90402 18.3684 7.60048 17.9764C6.29691 17.5845 5.10921 16.8792 4.14121 15.9222C3.17321 14.9652 2.45437 13.7856 2.04756 12.4866C1.64074 11.1876 1.55832 9.80869 1.80752 8.47052C2.05672 7.1323 2.62994 5.8755 3.47706 4.81C4.32419 3.7445 5.41943 2.90275 6.66702 2.35831M17.6994 6.81095C18.0329 7.61634 18.2376 8.46777 18.307 9.33402C18.3242 9.54802 18.3328 9.65502 18.2903 9.75144C18.2548 9.83194 18.1844 9.9081 18.107 9.94994C18.0144 9.99994 17.8986 9.99994 17.667 9.99994H10.667C10.4337 9.99994 10.317 9.99994 10.2279 9.9546C10.1494 9.9146 10.0857 9.85085 10.0458 9.77244C10.0004 9.68335 10.0004 9.56669 10.0004 9.33327V2.33331C10.0004 2.10175 10.0004 1.98598 10.0504 1.8933C10.0923 1.81588 10.1684 1.74555 10.2489 1.71005C10.3454 1.66756 10.4524 1.67614 10.6664 1.6933C11.5325 1.76275 12.384 1.96738 13.1894 2.30098C14.2004 2.71977 15.1191 3.3336 15.8929 4.10742C16.6668 4.88125 17.2806 5.7999 17.6994 6.81095Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="piechart01-clip0_118_48193">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
