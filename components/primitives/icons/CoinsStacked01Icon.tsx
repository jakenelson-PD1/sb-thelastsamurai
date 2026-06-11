import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface CoinsStacked01IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function CoinsStacked01Icon({ size = 'md', className, ...props }: CoinsStacked01IconProps) {
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
      <path d="M10 14.1667C10 16.4678 11.8655 18.3333 14.1667 18.3333C16.4678 18.3333 18.3333 16.4678 18.3333 14.1667C18.3333 11.8655 16.4678 10 14.1667 10C11.8655 10 10 11.8655 10 14.1667ZM10 14.1667C10 13.2285 10.3101 12.3627 10.8333 11.6663V4.16667M10 14.1667C10 14.8545 10.1667 15.5033 10.4618 16.0751C9.75975 16.6682 8.1382 17.0833 6.25 17.0833C3.7187 17.0833 1.66667 16.3372 1.66667 15.4167V4.16667M10.8333 4.16667C10.8333 5.08714 8.78134 5.83333 6.25 5.83333C3.7187 5.83333 1.66667 5.08714 1.66667 4.16667M10.8333 4.16667C10.8333 3.24619 8.78134 2.5 6.25 2.5C3.7187 2.5 1.66667 3.24619 1.66667 4.16667M1.66667 11.6667C1.66667 12.5872 3.7187 13.3333 6.25 13.3333C8.07417 13.3333 9.64942 12.9458 10.3872 12.3848M10.8333 7.91667C10.8333 8.83717 8.78134 9.58333 6.25 9.58333C3.7187 9.58333 1.66667 8.83717 1.66667 7.91667" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
