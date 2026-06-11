import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface PackageSearchIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function PackageSearchIcon({ size = 'md', className, ...props }: PackageSearchIconProps) {
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
      <path d="M17.0833 6.06478L10 10M10 10L2.91664 6.06478M10 10V17.9167M17.5 10V6.61786C17.5 6.33233 17.5 6.18956 17.4579 6.06223C17.4207 5.94958 17.3598 5.84618 17.2795 5.75894C17.1886 5.66032 17.0638 5.59099 16.8142 5.45232L10.6475 2.02639C10.4112 1.89509 10.293 1.82944 10.1679 1.8037C10.0571 1.78093 9.94292 1.78093 9.83217 1.8037C9.707 1.82944 9.58883 1.89509 9.3525 2.02639L3.18581 5.45232C2.93621 5.59099 2.8114 5.66032 2.72053 5.75894C2.64013 5.84618 2.57929 5.94958 2.54207 6.06223C2.5 6.18956 2.5 6.33233 2.5 6.61786V13.3821C2.5 13.6677 2.5 13.8104 2.54207 13.9378C2.57929 14.0504 2.64013 14.1538 2.72053 14.241C2.8114 14.3397 2.93622 14.409 3.18581 14.5477L9.3525 17.9736C9.58883 18.1049 9.707 18.1705 9.83217 18.1963C9.94292 18.2191 10.0571 18.2191 10.1679 18.1963C10.293 18.1705 10.4112 18.1049 10.6475 17.9736L10.8333 17.8703M6.25 3.74999L13.75 7.91665M18.3333 17.9167L17.5 17.0833M18.3333 15C18.3333 16.3807 17.2141 17.5 15.8333 17.5C14.4526 17.5 13.3333 16.3807 13.3333 15C13.3333 13.6193 14.4526 12.5 15.8333 12.5C17.2141 12.5 18.3333 13.6193 18.3333 15Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
