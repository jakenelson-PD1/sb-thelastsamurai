import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface Send02IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function Send02Icon({ size = 'md', className, ...props }: Send02IconProps) {
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
      <path d="M10.0004 15.8331V9.99975M10.2433 15.9037L16.0587 17.8505C16.5144 18.0031 16.7423 18.0793 16.8828 18.0246C17.0049 17.9771 17.0975 17.8749 17.1328 17.7488C17.1735 17.6036 17.0753 17.3843 16.8788 16.9457L10.6383 3.01842C10.4462 2.5895 10.3501 2.37504 10.2162 2.30859C10.0999 2.25086 9.96334 2.25064 9.84684 2.308C9.71275 2.37402 9.616 2.58817 9.42242 3.01647L3.12704 16.9465C2.92895 17.3848 2.82991 17.6039 2.87019 17.7493C2.90516 17.8756 2.99748 17.978 3.11941 18.0259C3.25982 18.0811 3.48806 18.0053 3.94455 17.8538L9.82167 15.9031C9.89992 15.8772 9.939 15.8642 9.97909 15.859C10.0146 15.8545 10.0505 15.8545 10.086 15.8592C10.126 15.8644 10.1651 15.8775 10.2433 15.9037Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
