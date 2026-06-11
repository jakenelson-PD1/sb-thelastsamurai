import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface AlertHexagonIconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function AlertHexagonIcon({ size = 'md', className, ...props }: AlertHexagonIconProps) {
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
      <path d="M10 6.66665V10M10 13.3333H10.0083M2.5 6.61786V13.3821C2.5 13.6677 2.5 13.8104 2.54207 13.9378C2.57929 14.0504 2.64013 14.1538 2.72053 14.241C2.81141 14.3397 2.93621 14.409 3.18581 14.5477L9.3525 17.9736C9.58883 18.1049 9.707 18.1705 9.83208 18.1963C9.94292 18.2191 10.0571 18.2191 10.1679 18.1963C10.293 18.1705 10.4112 18.1049 10.6475 17.9736L16.8142 14.5477C17.0638 14.409 17.1886 14.3397 17.2795 14.241C17.3598 14.1538 17.4207 14.0504 17.4579 13.9378C17.5 13.8104 17.5 13.6677 17.5 13.3821V6.61786C17.5 6.33233 17.5 6.18955 17.4579 6.06223C17.4207 5.94958 17.3598 5.84618 17.2795 5.75894C17.1886 5.66032 17.0638 5.59099 16.8142 5.45232L10.6475 2.02639C10.4112 1.89509 10.293 1.82944 10.1679 1.8037C10.0571 1.78093 9.94292 1.78093 9.83208 1.8037C9.707 1.82944 9.58883 1.89509 9.3525 2.02639L3.18581 5.45232C2.93621 5.59099 2.81141 5.66032 2.72053 5.75894C2.64013 5.84618 2.57929 5.94958 2.54207 6.06223C2.5 6.18955 2.5 6.33233 2.5 6.61786Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
