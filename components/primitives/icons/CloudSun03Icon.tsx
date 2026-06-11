import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CloudSun03IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CloudSun03Icon({ size = 'md', className, ...props }: CloudSun03IconProps) {
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
      <g clipPath="url(#cloudsun03-clip0_118_51917)">
<path d="M2.62502 9.16699C2.54304 8.76308 2.5 8.34508 2.5 7.91699C2.5 4.46521 5.29821 1.66699 8.75 1.66699C11.9192 1.66699 14.5375 4.02586 14.9449 7.08366M5 18.3337C3.15905 18.3337 1.66666 16.8412 1.66666 15.0003C1.66666 13.1594 3.15905 11.667 5 11.667C5.09444 11.667 5.18796 11.6709 5.28041 11.6787C5.96351 9.73058 7.81862 8.33366 10 8.33366C11.854 8.33366 13.4723 9.34274 14.3357 10.8417C14.4176 10.8364 14.5002 10.8337 14.5833 10.8337C16.6544 10.8337 18.3333 12.5126 18.3333 14.5837C18.3333 16.6547 16.6544 18.3337 14.5833 18.3337C11.4694 18.3337 8.37883 18.3337 5 18.3337Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="cloudsun03-clip0_118_51917">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
