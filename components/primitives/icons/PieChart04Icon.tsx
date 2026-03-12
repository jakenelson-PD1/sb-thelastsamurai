import { clsx } from 'clsx';

export interface PieChart04IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function PieChart04Icon({ size = 20, className, ...props }: PieChart04IconProps) {
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
      <g clipPath="url(#piechart04-clip0_118_48238)">
<path d="M10 9.99984L1.94316 7.87112C1.42479 9.83309 1.64011 11.9167 2.54873 13.7312C3.45735 15.5456 4.99681 16.9662 6.8783 17.7263L10 9.99984ZM10 9.99984L10.0873 1.66696C8.23799 1.6476 6.43479 2.24395 4.96169 3.36209C3.48859 4.48023 2.42929 6.05663 1.95063 7.84301L10 9.99984ZM18.3333 9.99984C18.3333 14.6022 14.6024 18.3332 10 18.3332C5.39764 18.3332 1.66668 14.6022 1.66668 9.99984C1.66668 5.39746 5.39764 1.6665 10 1.6665C14.6024 1.6665 18.3333 5.39746 18.3333 9.99984Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="piechart04-clip0_118_48238">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
