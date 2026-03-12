import { clsx } from 'clsx';

export interface MusicNote01IconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function MusicNote01Icon({ size = 20, className, ...props }: MusicNote01IconProps) {
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
      <path d="M7.5 14.9998V5.29598C7.5 4.89469 7.5 4.69405 7.573 4.53132C7.63735 4.38788 7.74097 4.26556 7.87189 4.1785C8.02041 4.07974 8.21832 4.04675 8.61417 3.98079L15.9475 2.75856C16.4816 2.66954 16.7487 2.62503 16.9568 2.70234C17.1395 2.77018 17.2926 2.89988 17.3895 3.06889C17.5 3.26149 17.5 3.53224 17.5 4.07375V13.3332M7.5 14.9998C7.5 16.3805 6.38071 17.4998 5 17.4998C3.61929 17.4998 2.5 16.3805 2.5 14.9998C2.5 13.6191 3.61929 12.4998 5 12.4998C6.38071 12.4998 7.5 13.6191 7.5 14.9998ZM17.5 13.3332C17.5 14.7138 16.3807 15.8332 15 15.8332C13.6192 15.8332 12.5 14.7138 12.5 13.3332C12.5 11.9524 13.6192 10.8332 15 10.8332C16.3807 10.8332 17.5 11.9524 17.5 13.3332Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
