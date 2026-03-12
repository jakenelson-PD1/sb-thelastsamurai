import { clsx } from 'clsx';

export interface VideoRecorderIconProps {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

export function VideoRecorderIcon({ size = 20, className, ...props }: VideoRecorderIconProps) {
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
      <path d="M18.3334 7.44258C18.3334 6.93773 18.3334 6.68532 18.2335 6.56843C18.1469 6.46701 18.0169 6.41318 17.884 6.42365C17.7308 6.43571 17.5523 6.6142 17.1953 6.97118L14.1667 9.99978L17.1953 13.0284C17.5523 13.3854 17.7308 13.5639 17.884 13.5759C18.0169 13.5864 18.1469 13.5325 18.2335 13.4311C18.3334 13.3143 18.3334 13.0618 18.3334 12.5569V7.44258Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.66669 8.1665C1.66669 6.76637 1.66669 6.0663 1.93917 5.53153C2.17885 5.06112 2.5613 4.67867 3.03171 4.43899C3.56649 4.1665 4.26655 4.1665 5.66669 4.1665H10.1667C11.5669 4.1665 12.2669 4.1665 12.8017 4.43899C13.2721 4.67867 13.6545 5.06112 13.8942 5.53153C14.1667 6.0663 14.1667 6.76637 14.1667 8.1665V11.8332C14.1667 13.2333 14.1667 13.9333 13.8942 14.4682C13.6545 14.9386 13.2721 15.321 12.8017 15.5607C12.2669 15.8332 11.5669 15.8332 10.1667 15.8332H5.66669C4.26655 15.8332 3.56649 15.8332 3.03171 15.5607C2.5613 15.321 2.17885 14.9386 1.93917 14.4682C1.66669 13.9333 1.66669 13.2333 1.66669 11.8332V8.1665Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
