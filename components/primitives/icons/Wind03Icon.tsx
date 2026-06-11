import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Wind03IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Wind03Icon({ size = 'md', className, ...props }: Wind03IconProps) {
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
      <path d="M13.9699 5.41667C14.4277 4.90521 15.0929 4.58333 15.8333 4.58333C17.2141 4.58333 18.3333 5.70262 18.3333 7.08333C18.3333 8.46408 17.2141 9.58333 15.8333 9.58333H10.8333M5.63657 3.33333C6.09434 2.82188 6.75957 2.5 7.49999 2.5C8.88074 2.5 9.99999 3.61929 9.99999 5C9.99999 6.38071 8.88074 7.5 7.49999 7.5H1.66666M8.96991 16.6667C9.42766 17.1781 10.0929 17.5 10.8333 17.5C12.2141 17.5 13.3333 16.3807 13.3333 15C13.3333 13.6192 12.2141 12.5 10.8333 12.5H1.66666" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
