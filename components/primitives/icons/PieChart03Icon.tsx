import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface PieChart03IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function PieChart03Icon({ size = 'md', className, ...props }: PieChart03IconProps) {
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
      <g clipPath="url(#piechart03-clip0_118_48225)">
<path d="M10 1.6665C11.0943 1.6665 12.178 1.88205 13.189 2.30085C14.2001 2.71963 15.1187 3.33346 15.8926 4.10728C16.6664 4.8811 17.2802 5.79976 17.699 6.81081C18.1177 7.82186 18.3333 8.9055 18.3333 9.99984M10 1.6665V9.99984M10 1.6665C5.39762 1.6665 1.66666 5.39746 1.66666 9.99984C1.66666 14.6022 5.39762 18.3332 10 18.3332C14.6023 18.3332 18.3333 14.6023 18.3333 9.99984M10 1.6665C14.6023 1.6665 18.3333 5.39747 18.3333 9.99984M18.3333 9.99984H10M18.3333 9.99984C18.3333 11.3149 18.0221 12.6113 17.4251 13.7831C16.828 14.9548 15.9622 15.9687 14.8982 16.7417L10 9.99984" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="piechart03-clip0_118_48225">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
