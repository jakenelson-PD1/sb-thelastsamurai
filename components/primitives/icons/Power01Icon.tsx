import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Power01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Power01Icon({ size = 'md', className, ...props }: Power01IconProps) {
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
      <path d="M10.0001 1.6665V9.99984M15.3001 5.53317C16.3488 6.58216 17.0628 7.91854 17.352 9.37334C17.6412 10.8281 17.4925 12.336 16.9248 13.7063C16.3571 15.0766 15.3958 16.2478 14.1624 17.0718C12.9292 17.8958 11.4792 18.3356 9.99593 18.3356C8.51268 18.3356 7.06273 17.8958 5.82942 17.0718C4.59611 16.2478 3.63481 15.0766 3.06709 13.7063C2.49935 12.336 2.35069 10.8281 2.63988 9.37334C2.92907 7.91854 3.64313 6.58216 4.69178 5.53317" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
